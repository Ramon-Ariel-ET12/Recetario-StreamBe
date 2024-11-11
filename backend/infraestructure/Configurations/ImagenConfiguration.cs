using core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations;

public class ImagenConfiguration : IEntityTypeConfiguration<Imagen>
{
    public void Configure(EntityTypeBuilder<Imagen> builder)
    {
        builder.HasKey(x => x.IdImagen);
        builder.Property(x => x.Datos).IsRequired();
        builder.Property(x => x.Formato).IsRequired();
    }

}