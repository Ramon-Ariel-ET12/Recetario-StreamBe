using application.Repositories;
using application.Services;
using core;

namespace infraestructure.Services;

public class RecetaService : IRecetaService
{
    private readonly IRecetaRepository context;
    public RecetaService(IRecetaRepository context)
    {
        this.context = context;
    }

    public async Task CrearReceta(Receta receta)
    {
        await context.CrearReceta(receta);
    }


    public async Task<List<Receta>> TraerReceta()
    {
        return await context.TraerReceta();
    }

    public async Task<List<Receta>> TraerRecetaPorIdReceta(Guid IdReceta)
    {
        return await context.TraerReceta(x => x.IdReceta == IdReceta);
    }

    public async Task<List<Receta>> TraerRecetaPorIdUsuario(Guid IdUsuario)
    {
        return await context.TraerReceta(x => x.Usuario.IdUsuario == IdUsuario);
    }

    public async Task<List<Receta>> TraerRecetaPorNombre(string nombre)
    {
        return await context.TraerReceta(x => x.Nombre == nombre);
    }

    public async Task<List<Receta>> TraerRecetas(int salteo)
    {
        return await context.TraerReceta(salteo: salteo);
    }
}