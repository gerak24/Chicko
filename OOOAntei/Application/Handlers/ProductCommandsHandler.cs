using OOOAntei.Data;
using OOOAntei.Entitites;

namespace OOOAntei.Application.Handlers;

public class ProductCommandsHandler
{
    public ProductCommandsHandler(DataContext dbContext, IConfiguration configuration)
    {
        DbContext = dbContext;
    }
    private DataContext DbContext { get; }
    

    public IEnumerable<Product> GetProducts()
    {
        return DbContext.Products;
    }

}