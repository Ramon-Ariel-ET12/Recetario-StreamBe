using core;
using infraestructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace infraestructure.Persistence;

public class RecetarioDbContext(DbContextOptions<RecetarioDbContext> options) : DbContext(options)
{

    public DbSet<Usuario> Usuario { get; set; }
    public DbSet<Imagen> Imagen { get; set; }
    public DbSet<Ingrediente> Ingrediente { get; set; }
    public DbSet<Receta> Receta { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
        modelBuilder.ApplyConfiguration(new ImagenConfiguration());
        modelBuilder.ApplyConfiguration(new IngredienteConfiguration());
        modelBuilder.ApplyConfiguration(new RecetaConfiguration());
    }
}