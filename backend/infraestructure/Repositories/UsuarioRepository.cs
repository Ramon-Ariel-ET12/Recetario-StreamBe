using infraestructure.Persistence;
using application.Repositories;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using core;

namespace infraestructure.Repositories;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly RecetarioDbContext context;
    public UsuarioRepository(RecetarioDbContext context)
    {
        this.context = context;
    }

    public async Task CrearUsuario(Usuario usuario)
    {
        context.Usuario.Add(usuario);
        await context.SaveChangesAsync();
    }

    public async Task<List<Usuario>?> TraerUsuario(Expression<Func<Usuario, bool>>? expression = null)
    {
        if (expression == null)
        {
            return await context.Usuario.Select(x => new Usuario { Nombre = x.Nombre, Apellido = x.Apellido, Correo = x.Correo, }).AsNoTracking().ToListAsync();
        }
        return await context.Usuario.Where(expression).Select(x => new Usuario { Nombre = x.Nombre, Apellido = x.Apellido, Correo = x.Correo, }).AsNoTracking().ToListAsync();
    }
}