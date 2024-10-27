using core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations
{
    public class RecetaConfiguration : IEntityTypeConfiguration<Receta>
    {
        public void Configure(EntityTypeBuilder<Receta> builder)
        {
            builder.HasKey(x => x.IdReceta);
            builder.Property(x => x.IdReceta).IsRequired();
            builder.Property(x => x.Nombre).IsRequired();
            builder.Property(x => x.Descripcion).IsRequired();


            builder.HasMany(x => x.Ingrediente).WithOne().HasForeignKey("IdReceta").IsRequired();

            builder.HasMany(x => x.Imagen).WithOne().HasForeignKey("IdReceta").IsRequired();

            builder.HasOne(x => x.Usuario).WithMany(x => x.Receta).HasForeignKey(x => x.IdUsuario).IsRequired();
        }

    }
}