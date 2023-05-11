namespace OOOAntei.Entitites.Orders;

public class OrderProduct
{
    public Guid ProductId { get; set; }
    public string Name { get; set; } = null!;
    public ProductType Type { get; set; }
    public decimal Price { get; set; }
    public decimal Amount { get; set; }
}