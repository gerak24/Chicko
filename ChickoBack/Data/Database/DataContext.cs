using ChickoBack.Entitites;
using ChickoBack.Entitites.Orders;
using Microsoft.EntityFrameworkCore;

namespace ChickoBack.Data.Database;

public sealed class DataContext(DbContextOptions<DataContext> options)
    : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
    }

    public DbSet<Manager> Managers { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
}