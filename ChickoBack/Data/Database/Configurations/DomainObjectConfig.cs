using ChickoBack.Entitites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChickoBack.Data.Database.Configurations;

public class DomainObjectConfig<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : Entity
{
    public virtual void Configure(EntityTypeBuilder<TEntity> builder)
    {
        builder.HasKey(e => e.Id);
    }
}