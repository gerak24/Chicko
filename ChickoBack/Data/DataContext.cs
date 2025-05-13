using ChickoBack.Application.Helpers;
using ChickoBack.Entitites;
using ChickoBack.Entitites.Orders;
using Microsoft.EntityFrameworkCore;

namespace ChickoBack.Data;

public sealed class DataContext(DbContextOptions<DataContext> options, IConfiguration configuration)
    : DbContext(options)
{
    private readonly string _ownerLogin = configuration["adminLogin"] ??
                                          throw new BusinessException("Не задан логин администратора в конфигурации");

    private readonly string _ownerPass = configuration["adminPassword"] ??
                                         throw new BusinessException("Не задан пароль администратора в конфигурации");

    private readonly string _salt = configuration["salt"] ??
                                    throw new BusinessException("В конфигурации не задана соль для паролей");

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Manager>().HasData(new
            { Id = Guid.NewGuid(), Login = _ownerLogin, PassHash = Hasher.Create(_ownerPass, _salt) });
        builder.Entity<Order>().OwnsMany(x => x.Products);
    }

    public DbSet<Manager> Managers { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
}