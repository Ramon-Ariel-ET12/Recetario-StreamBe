using core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations;

public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
{
    public void Configure(EntityTypeBuilder<Usuario> builder)
    {
        builder.HasKey(x => x.IdUsuario);
        builder.Property(x => x.IdUsuario).IsRequired();
        builder.Property(x => x.Nombre).IsRequired();
        builder.Property(x => x.Apellido).IsRequired();
        builder.Property(x => x.Correo).IsRequired();
        builder.Property(x => x.Clave).IsRequired();
    }
}