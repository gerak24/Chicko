using ChickoBack.Application.Commands.Product;
using ChickoBack.Data;
using ChickoBack.Entitites;
using Microsoft.EntityFrameworkCore;

namespace ChickoBack.Application.Handlers;

public class ProductCommandsHandler
{
    public ProductCommandsHandler(DataContext dbContext)
    {
        _dbContext = dbContext;
    }

    private DataContext _dbContext;

    public async Task<string> UpdateProduct(UpdateProductCommand cmd)
    {
        var product = await _dbContext.Products.FirstOrDefaultAsync(x => x.Id == cmd.Id) ??
                      throw new BusinessException("Продукт не найден");

        product.Name = cmd.Name ?? product.Name;
        product.Description = cmd.Description ?? product.Description;
        product.Type = cmd.Type ?? product.Type;
        product.Price = cmd.Price ?? product.Price;
        product.Image = cmd.Image ?? product.Image;
        product.IsHotOffer = cmd.IsHotOffer ?? product.IsHotOffer;
        product.IsDeleted = cmd.IsDeleted ?? product.IsDeleted;
        _dbContext.Update(product);

        await _dbContext.SaveChangesAsync();
        return "Продукт обновлен";
    }

    public async Task<string> DeleteProduct(DeleteProductCommand cmd)
    {
        var product = await _dbContext.Products.FirstOrDefaultAsync(x => x.Id == cmd.Id) ??
                      throw new BusinessException("Продукт не найден");

        switch (cmd.IsSoftDelete)
        {
            case true:
                product.IsDeleted = true;
                _dbContext.Products.Update(product);
                break;

            case false:
                _dbContext.Products.Remove(product);
                break;
        }

        await _dbContext.SaveChangesAsync();
        return "Продукт удален";
    }


    public async Task<string> CreateProduct(CreateProductCommand cmd)
    {
        await _dbContext.Products.AddAsync(new Product(Guid.NewGuid(), cmd.Name, cmd.Description, cmd.Image,
            cmd.Type,
            cmd.Price, cmd.IsHotOffer));

        await _dbContext.SaveChangesAsync();
        return "Продукт создан";
    }

    public IEnumerable<Product> GetDeletedProducts()
    {
        return _dbContext.Products.Where(x => x.IsDeleted == true);
    }

    public IEnumerable<Product> GetProducts()
    {
        return _dbContext.Products.Where(x => x.IsDeleted != true);
    }
}