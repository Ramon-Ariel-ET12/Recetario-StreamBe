using core;
using infraestructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace infraestructure.Persistence;

public class RecetarioDbContext(DbContextOptions<RecetarioDbContext> options) : DbContext(options)
{

    public DbSet<Usuario> Usuario { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
    }
}