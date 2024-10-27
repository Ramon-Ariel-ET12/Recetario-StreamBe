using System.Linq.Expressions;
using application.Repositories;
using core;
using infraestructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace infraestructure.Repositories;

public class RecetaRepository : IRecetaRepository
{
    private readonly RecetarioDbContext context;
    public RecetaRepository(RecetarioDbContext context)
    {
        this.context = context;
    }
    public async Task CrearReceta(Receta receta)
    {
        context.Receta.Add(receta);
        await context.SaveChangesAsync();
    }

    public async Task<List<Receta>> TraerReceta(Expression<Func<Receta, bool>>? expression = null, int salteo = 0)
    {
        if (expression != null)
        {
            return await context.Receta.Include(x => x.Ingrediente).Include(x => x.Imagen).Include(x => x.Usuario)
                                        .AsNoTracking()
                                        .Where(expression)
                                        .Skip(salteo)
                                        .Take(10)
                                        .OrderByDescending(x => x.FechaCreacion)
                                        .ToListAsync();
        }
        return await context.Receta.Include(x => x.Ingrediente).Include(x => x.Imagen).Include(x => x.Usuario)
                                    .AsNoTracking()
                                    .Skip(salteo)
                                    .Take(10)
                                    .OrderByDescending(x => x.FechaCreacion)
                                    .ToListAsync();
    }

}
