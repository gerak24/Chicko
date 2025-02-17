namespace ChickoBack.Entitites.Orders;

public class Order : Entity
{
    public Order(Guid id) : base(id)
    {
    }

    public decimal Sum { get; set; }

    public IEnumerable<OrderProduct> Products { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Customer { get; set; } = null!;
}