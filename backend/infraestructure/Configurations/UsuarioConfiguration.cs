using core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations;

public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
{
    public void Configure(EntityTypeBuilder<Usuario> builder)
    {
        builder.HasKey(x => x.IdUsuario);
        builder.Property(x => x.Nombre).IsRequired().HasMaxLength(25);
        builder.Property(x => x.Apellido).IsRequired().HasMaxLength(25);
        builder.HasMany(c => c.Receta)
                .WithOne(x => x.Usuario)
                .HasForeignKey(x => x.IdUsuario)
                .OnDelete(DeleteBehavior.Cascade);
    }
}