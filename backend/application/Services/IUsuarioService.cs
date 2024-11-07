using core;

namespace application.Services;

public interface IUsuarioService
{
    Task<List<Usuario>?> TraerUsuario();
    Task<List<Usuario>?> TraerUsuarioPorNombre(string Nombre);
    Task<List<Usuario>?> TraerUsuarioPorApellido(string Apellido);
    Task<Usuario?> TraerUsuarioPorId(Guid IdUsuario);
    Task<Usuario?> TraerUsuarioPorCorreo(string Correo);
    Task<Usuario?> TraerUsuarioPorCorreoyClave(string Correo, string Clave);

    Task RegistrarUsuario(Usuario usuario);
}