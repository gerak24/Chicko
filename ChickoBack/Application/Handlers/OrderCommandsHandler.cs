using ChickoBack.Application.Commands.Order;
using ChickoBack.Application.Helpers;
using ChickoBack.Data;
using ChickoBack.Entitites.Orders;
using static System.Text.Encoding;

namespace ChickoBack.Application.Handlers;

public class OrderCommandsHandler
{
    public OrderCommandsHandler(DataContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _key = configuration.GetValue<string>("aes:key") ??
               throw new BusinessException("В конфигурации не задан ключ для шифрования");
        _iv = configuration.GetValue<string>("aes:key") ??
              throw new BusinessException("В конфигурации не задан IV ключ для шифрования");
    }

    private readonly string _key;
    private readonly string _iv;
    private DataContext _dbContext;

    public async Task<string> Create(CreateOrderCommand cmd)
    {
        var contactHash = Encryptor.EncryptString_Aes(cmd.Contact, UTF8.GetBytes(_key), UTF8.GetBytes(_iv));
        await _dbContext.Orders.AddAsync(new Order(Guid.NewGuid())
        {
            Sum = CalculateSum(cmd.Products), Products = cmd.Products,
            Customer = cmd.Customer, Contact = contactHash
        });
        await _dbContext.SaveChangesAsync();
        return "Заказ отправлен";
    }

    public IEnumerable<Order> GetOrders()
    {
        var list = _dbContext.Orders.Select(order => new Order(order.Id)
        {
            Sum = order.Sum, Customer = order.Customer,
            Contact = Encryptor.DecryptString_Aes(order.Contact, UTF8.GetBytes(_key), UTF8.GetBytes(_iv))
        }).ToList();

        return list;
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