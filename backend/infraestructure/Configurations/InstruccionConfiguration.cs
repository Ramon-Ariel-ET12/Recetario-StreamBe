using core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace infraestructure.Configurations;

public class InstruccionConfiguration : IEntityTypeConfiguration<Instruccion>
{
    public void Configure(EntityTypeBuilder<Instruccion> builder)
    {
        builder.HasKey(x => x.IdIntruccion);
        builder.Property(x => x.Paso).IsRequired();
        builder.Property(x => x.Explicacion).IsRequired();
    }

}