using System.Linq.Expressions;
using core;

namespace application.Repositories;

public interface IRecetaRepository
{
    Task<List<Receta>> TraerReceta(Expression<Func<Receta, bool>>? expression = null, int salteo = 0);
    Task CrearReceta(Receta receta);
}
