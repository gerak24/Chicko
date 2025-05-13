namespace ChickoBack.Entitites.Orders;

public class Order(Guid id) : Entity(id)
{
    public int Number { get; set; }
    public decimal Sum { get; set; }

    public IEnumerable<OrderProduct> Products { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Customer { get; set; } = null!;
}