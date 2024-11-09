using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using application.Services;
using core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;


namespace api.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
[Produces("application/json")]
[Authorize]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioService context;
    public UsuarioController(IUsuarioService usuarioService)
    {
        context = usuarioService;
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> IniciarSesion([FromBody] IniciarSesionUsuario usuario)
    {
        try
        {
            var logueado = await context.TraerUsuarioPorCorreoyClave(usuario.Correo!.ToLower(), usuario.Clave!);
            if (logueado != null)
            {
                var token = GenerateJwtToken(logueado);

                return Ok(token);
            }
        }
        catch (Exception)
        {
            return BadRequest("Error en el backend");
        }
        return BadRequest("Credenciales incorrectos");
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CrearUsuario([FromBody] RegistrarUsuario usuario)
    {
        try
        {
            if (usuario.Nombre != null && usuario.Apellido != null && usuario.Correo != null && usuario.Clave != null)
            {
                var existe = await context.TraerUsuarioPorCorreo(usuario.Correo!);
                if (existe == null)
                {
                    var newuser = new Usuario() { Nombre = usuario.Nombre, Apellido = usuario.Apellido, Correo = usuario.Correo, Clave = usuario.Clave };
                    await context.RegistrarUsuario(newuser);
                    return Ok("Usuario Creado");
                }
                else
                {
                    return BadRequest($"Ya existe ese correo: {usuario.Correo}");
                }
            }
            return Unauthorized("Error");
        }
        catch (Exception)
        {
            return Unauthorized("Error");
        }
    }

    [HttpGet]
    public async Task<IActionResult> TraerUsuario([FromQuery] string id)
    {
        try
        {
            if (id != null)
            {
                var IdUsuario = Guid.Parse(id);

                var usuario = await context.TraerUsuarioPorId(IdUsuario);
                var usuarioQueryDto = new ConsultarUsuario
                {
                    IdUsuario = usuario!.IdUsuario.ToString(),
                    Nombre = usuario.Nombre,
                    Apellido = usuario.Apellido,
                    Correo = usuario.Correo,
                    FechaCreacion = usuario.FechaCreacion
                };

                return Ok(usuarioQueryDto);
            }
            else
            {
                return BadRequest("No se recibió el id");

            }
        }
        catch (Exception ex)
        {
            return BadRequest($"Error: {ex.Message}");
        }
    }

    private static string GenerateJwtToken(Usuario usuario)
    {
        var claims = new List<Claim>
        {
            new("IdUsuario", usuario.IdUsuario.ToString()),
            new("Nombre", usuario.Nombre),
            new("Apellido", usuario.Apellido),
            new("Correo", usuario.Correo),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("klsdfj34897uoalñ@d987u120alskjd3456y"));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: "http://localhost:5050",
            audience: "http://localhost:5050",
            expires: DateTime.Now.AddMonths(1) ,
            claims: claims,
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
public class IniciarSesionUsuario
{
    public string? Correo { get; set; }
    public string? Clave { get; set; }
}
public class RegistrarUsuario
{
    public string? Nombre { get; set; }
    public string? Apellido { get; set; }
    public string? Correo { get; set; }
    public string? Clave { get; set; }
}

public class ConsultarUsuario
{
    public string? IdUsuario { get; set; }
    public string? Nombre { get; set; }
    public string? Apellido { get; set; }
    public string? Correo { get; set; }
    public DateTime? FechaCreacion { get; set; }
}
