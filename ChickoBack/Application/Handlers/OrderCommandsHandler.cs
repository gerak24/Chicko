using ChickoBack.Application.Commands.Order;
using ChickoBack.Application.Helpers;
using ChickoBack.Data;
using ChickoBack.Entitites.Orders;

namespace ChickoBack.Application.Handlers;

public class OrderCommandsHandler(DataContext dbContext, IConfiguration configuration)
{
    private readonly string _key = configuration.GetValue<string>("aes:key") ??
                                   throw new BusinessException("В конфигурации не задан ключ для шифрования");

    private readonly string _iv = configuration.GetValue<string>("aes:key") ??
                                  throw new BusinessException("В конфигурации не задан IV ключ для шифрования");

    public async Task<string> Create(CreateOrderCommand cmd)
    {
        var contactHash = Encryptor.EncryptString_Aes(cmd.Contact, _key, _iv);
        await dbContext.Orders.AddAsync(new Order(Guid.NewGuid())
        {
            Number = dbContext.Orders.Count() + 1,
            Sum = CalculateSum(cmd.Products), Products = cmd.Products,
            Customer = cmd.Customer, Contact = contactHash
        });
        await dbContext.SaveChangesAsync();
        return "Заказ отправлен";
    }

    public IEnumerable<Order> GetOrders()
    {
        var list = dbContext.Orders.Select(order => new Order(order.Id)
        {
            Number = order.Number, Sum = order.Sum, Customer = order.Customer,
            Contact = Encryptor.DecryptString_Aes(order.Contact, _key, _iv).Replace("\n", "")
        }).ToList();

        return list;
    }

    public Order GetOrder(Guid id)
    {
        var order = dbContext.Orders.FirstOrDefault(order => order.Id == id) ??
                    throw new EntityNotFoundException($"Не найден заказ с идентификатором: {id}");
        return order;
    }

    private decimal CalculateSum(IEnumerable<OrderProduct> products)
    {
        decimal sum = 0;
        foreach (var product in products)
        {
            if (dbContext.Products.All(x => x.Id != product.ProductId))
                throw new BusinessException("Указанный товар не числится в базе данных.");
            sum += product.Price * product.Amount;
        }

        return sum;
    }
}