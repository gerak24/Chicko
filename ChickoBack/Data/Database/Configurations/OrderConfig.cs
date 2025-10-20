using ChickoBack.Entitites.Orders;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChickoBack.Data.Database.Configurations;

public class OrderConfig : DomainObjectConfig<Order>
{
    public override void Configure(EntityTypeBuilder<Order> builder)
    {
        base.Configure(builder);
        builder.ToTable("Orders");

        builder.HasKey(o => o.Id);
        builder.Property(o => o.Number).IsRequired();
        builder.Property(o => o.Sum).IsRequired();
        builder.Property(o => o.Contact).IsRequired();
        builder.Property(o => o.Customer).IsRequired();
        builder.Property(o => o.Created).IsRequired();

        builder.HasIndex(order => order.Number);
        builder.OwnsMany<OrderProduct>(x => x.Products, products =>
        {
            products.WithOwner().HasForeignKey(p => p.OrderId);
            products.Property(x => x.ProductId);
            products.Property(x => x.Name);
            products.Property(x => x.Type);
            products.Property(x => x.Price);
            products.Property(x => x.Amount);
        });
    }
}