using Microsoft.EntityFrameworkCore;
using OOOAntei.Entitites;

namespace OOOAntei.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DbSet<Manager> Managers { get; set; }
    public DbSet<Product> Products { get; set; }
}