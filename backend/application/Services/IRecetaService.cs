using core.Entities;

namespace application.Services;

public interface IRecetaService
{
    Task CrearReceta(Receta receta);
    Task<List<Receta>> TraerReceta();
    Task<List<Receta>> TraerRecetas(int salteo);
    Task<List<Receta>> TraerRecetaPorIdUsuario(Guid IdUsuario);
    Task<List<Receta>> TraerRecetaPorIdReceta(Guid IdReceta);
    Task<List<Receta>> TraerRecetaPorNombre(string Nombre);
    Task<List<Receta>> TraerRecetasPorBusqueda(string busqueda);
}
