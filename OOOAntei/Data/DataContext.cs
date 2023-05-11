using Microsoft.EntityFrameworkCore;
using OOOAntei.Application.Helpers;
using OOOAntei.Entitites;

namespace OOOAntei.Data;

public sealed class DataContext : DbContext
{
#pragma warning disable CS8618
    public DataContext(DbContextOptions<DataContext> options, IConfiguration configuration) : base(options)
    {
        var login = configuration["OwnerLogin"] ?? "admin";
        var passHash = Hasher.Create(configuration["OwnerPassword"] ?? "admin",
            configuration["Salt"] ?? throw new BusinessException("В конфигурации не задана соль для паролей"));
        Database.EnsureCreated();
        if (Managers != null && !Managers.Any())
        {
            Managers.Add(new Manager(Guid.NewGuid(), login, passHash));
        }
    }

    public DbSet<Manager> Managers { get; set; }
    public DbSet<Product> Products { get; set; }
}