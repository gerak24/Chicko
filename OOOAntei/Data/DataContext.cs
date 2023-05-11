using Microsoft.EntityFrameworkCore;
using OOOAntei.Application.Helpers;
using OOOAntei.Entitites;
using OOOAntei.Entitites.Orders;

namespace OOOAntei.Data;

public sealed class DataContext : DbContext
{
#pragma warning disable CS8618
    public DataContext(DbContextOptions<DataContext> options, IConfiguration configuration) : base(options)
    {
        _ownerLogin = configuration["OwnerLogin"] ??
                      throw new BusinessException("Не задан лолгин администратора в конфигурации");
        _ownerPass =
            Hasher.Create(
                configuration["OwnerPassword"] ??
                throw new BusinessException("Не задан лолгин администратора в конфигурации"),
                configuration["Salt"] ?? throw new BusinessException("В конфигурации не задана соль для паролей"));
    }

    private readonly string _ownerLogin;
    private readonly string _ownerPass;

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Manager>().HasData(new {Id = Guid.NewGuid(), Login = _ownerLogin, PassHash = _ownerPass});
        builder.Entity<Order>().OwnsMany(x => x.Products);
    }

    public DbSet<Manager> Managers { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
}