using core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations;

public class IngredienteConfiguration : IEntityTypeConfiguration<Ingrediente>
{
    public void Configure(EntityTypeBuilder<Ingrediente> builder)
    {
        builder.HasKey(x => x.IdIngrediente);
        builder.Property(x => x.Cantidad).IsRequired();
        builder.Property(x => x.UnidadMedida).IsRequired();
        builder.Property(x => x.Descripcion).IsRequired();
    }
}