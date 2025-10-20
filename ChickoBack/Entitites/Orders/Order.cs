namespace ChickoBack.Entitites.Orders;

public class Order : Entity
{
    protected Order() // EF migrations building
    {
    }

    public Order(Guid id, int number, decimal sum, string contact, string customer,
        List<OrderProduct> products) : base(id)
    {
        Number = number;
        Sum = sum;
        Contact = contact;
        Customer = customer;
        Products = products;
    }

    public int Number { get; set; }
    public decimal Sum { get; set; }
    public IEnumerable<OrderProduct> Products { get; set; }
    public string Contact { get; set; }
    public string Customer { get; set; }
    public DateTime Created { get; private set; } = DateTime.UtcNow;
}