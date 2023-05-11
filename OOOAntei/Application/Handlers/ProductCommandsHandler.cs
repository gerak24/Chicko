using Microsoft.EntityFrameworkCore;
using OOOAntei.Application.Commands.Product;
using OOOAntei.Data;
using OOOAntei.Entitites;

namespace OOOAntei.Application.Handlers;

public class ProductCommandsHandler
{
    public ProductCommandsHandler(DataContext dbContext)
    {
        DbContext = dbContext;
    }

    private DataContext DbContext { get; }

    public async Task<string> UpdateProduct(UpdateProductCommand cmd)
    {
        var product = await DbContext.Products.FirstOrDefaultAsync(x => x.Id == cmd.Id) ??
                      throw new BusinessException("Продукт не найден");

        product.Name = cmd.Name ?? product.Name;
        product.Description = cmd.Description ?? product.Description;
        product.Type = cmd.Type ?? product.Type;
        product.Price = cmd.Price ?? product.Price;
        product.Image = cmd.Image ?? product.Image;
        product.IsHotOffer = cmd.IsHotOffer ?? product.IsHotOffer;
        DbContext.Update(product);

        await DbContext.SaveChangesAsync();
        return "Продукт обновлен";
    }

    public async Task<string> DeleteProduct(DeleteProductCommand cmd)
    {
        var product = await DbContext.Products.FirstOrDefaultAsync(x => x.Id == cmd.Id) ??
                      throw new BusinessException("Продукт не найден");

        switch (cmd.IsSoftDelete)
        {
            case true:
                product.IsDeleted = true;
                DbContext.Products.Update(product);
                break;

            case false:
                DbContext.Products.Remove(product);
                break;
        }

        await DbContext.SaveChangesAsync();
        return "Продукт удален";
    }


    public async Task<string> CreateProduct(CreateProductCommand cmd)
    {
        await DbContext.Products.AddAsync(new Product(Guid.NewGuid(), cmd.Name, cmd.Description, cmd.Image,
            cmd.Type,
            cmd.Price, cmd.IsHotOffer));

        await DbContext.SaveChangesAsync();
        return "Продукт создан";
    }

    public IEnumerable<Product> GetDeletedProducts()
    {
        return DbContext.Products.Where(x => x.IsDeleted == true);
    }
    
    public IEnumerable<Product> GetProducts()
    {
        return DbContext.Products.Where(x => x.IsDeleted != true);
    }
}