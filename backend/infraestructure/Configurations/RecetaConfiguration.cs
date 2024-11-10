using core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations
{
    public class RecetaConfiguration : IEntityTypeConfiguration<Receta>
    {
        public void Configure(EntityTypeBuilder<Receta> builder)
        {
            builder.HasKey(x => x.IdReceta);
            builder.Property(x => x.Nombre).IsRequired().HasMaxLength(25);
            builder.Property(x => x.Descripcion).IsRequired().HasMaxLength(200);


            builder.HasMany(x => x.Ingrediente).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(x => x.Imagen).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(x => x.Instruccion).WithOne().OnDelete(DeleteBehavior.Cascade);
        }

    }
}