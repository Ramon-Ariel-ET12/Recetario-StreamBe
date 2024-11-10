using application.Repositories;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using core.Entities;
using Infrastructure.Persistence;

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
            return await context.Usuario.AsNoTracking().OrderByDescending(x => x.FechaCreacion).ToListAsync();
        }
        return await context.Usuario.Where(expression).AsNoTracking().OrderByDescending(x => x.FechaCreacion).ToListAsync();
    }
}