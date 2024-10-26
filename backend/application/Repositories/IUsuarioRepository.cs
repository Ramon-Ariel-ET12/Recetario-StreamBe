using System.Linq.Expressions;
using core;

namespace application.Repositories;

public interface IUsuarioRepository
{
    Task<List<Usuario>?> TraerUsuario(Expression<Func<Usuario, bool>>? expression = null);
    Task CrearUsuario(Usuario usuario);
}