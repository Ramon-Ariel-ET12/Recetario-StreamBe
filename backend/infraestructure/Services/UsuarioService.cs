using System.Security.Cryptography;
using System.Text;
using application.Repositories;
using application.Services;
using core;

namespace infraestructure.Services;

public class UsuarioService : IUsuarioService
{
    private readonly IUsuarioRepository context;
    public UsuarioService(IUsuarioRepository repository)
    {
        context = repository;
    }

    public Task RegistrarUsuario(Usuario usuario)
    {
        usuario.Clave = EncriptarSHA256(usuario.Clave);
        return context.CrearUsuario(usuario);
    }

    public async Task<List<Usuario>?> TraerUsuario()
    {
        return await context.TraerUsuario();
    }

    public async Task<List<Usuario>?> TraerUsuarioPorApellido(string Apellido)
    {
        return await context.TraerUsuario(x => x.Apellido == Apellido);
    }

    public async Task<Usuario?> TraerUsuarioPorCorreo(string Correo)
    {
        var correo = await context.TraerUsuario(x => x.Correo == Correo);
        return correo?.FirstOrDefault();
    }

    public async Task<Usuario?> TraerUsuarioPorCorreoyClave(string Correo, string Clave)
    {
        Clave = EncriptarSHA256(Clave);
        var login = await context.TraerUsuario(x => x.Correo == Correo && x.Clave == Clave);
        return login?.FirstOrDefault(); ;
    }

    public async Task<List<Usuario>?> TraerUsuarioPorNombre(string Nombre)
    {
        return await context.TraerUsuario(x => x.Nombre == Nombre);
    }

    private static string EncriptarSHA256(string texto)
    {
        using (SHA256 sha256Hash = SHA256.Create())
        {
            byte[] sourceBytes = Encoding.UTF8.GetBytes(texto);
            byte[] hashBytes = sha256Hash.ComputeHash(sourceBytes);
            return BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
        }
    }
}