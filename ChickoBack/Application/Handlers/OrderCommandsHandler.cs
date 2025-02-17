using ChickoBack.Application.Commands.Order;
using ChickoBack.Data;
using ChickoBack.Entitites.Orders;

namespace ChickoBack.Application.Handlers;

public class OrderCommandsHandler
{
    public OrderCommandsHandler(DataContext dbContext)
    {
        _dbContext = dbContext;
    }

    private DataContext _dbContext;

    public async Task<string> Create(CreateOrderCommand cmd)
    {
        await _dbContext.Orders.AddAsync(new Order(Guid.NewGuid()){Sum = CalculateSum(cmd.Products), Products = cmd.Products,
           Customer = cmd.Customer, Contact = cmd.Contact});
        await _dbContext.SaveChangesAsync();
        return "Заказ отправлен";
    }

    public IEnumerable<Order> GetOrders()
    {
        return _dbContext.Orders;
    }

    private decimal CalculateSum(IEnumerable<OrderProduct> products)
    {
        decimal sum = 0;
        foreach (var product in products)
        {
            if (_dbContext.Products.All(x => x.Id != product.ProductId))
                throw new BusinessException("Указанный товар не числится в базе данных.");
            sum += product.Price * product.Amount;
        }

        return sum;
    }
}