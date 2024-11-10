using core.Entities;
using infraestructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence;

public class RecetarioDbContext(DbContextOptions<RecetarioDbContext> options) : DbContext(options)
{
    public DbSet<Usuario> Usuario { get; set; }
    public DbSet<Imagen> Imagen { get; set; }
    public DbSet<Instruccion> Instruccion { get; set; }
    public DbSet<Ingrediente> Ingrediente { get; set; }
    public DbSet<Receta> Receta { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
        modelBuilder.ApplyConfiguration(new ImagenConfiguration());
        modelBuilder.ApplyConfiguration(new IngredienteConfiguration());
        modelBuilder.ApplyConfiguration(new RecetaConfiguration());
        modelBuilder.ApplyConfiguration(new InstruccionConfiguration());
    }
}
