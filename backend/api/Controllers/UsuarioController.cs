using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using application.Services;
using core.DTO;
using core.Entities;
using Mapster;
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
    public async Task<IActionResult> IniciarSesion([FromBody] LoginDto loginDto)
    {
        try
        {
            var existe = await context.TraerUsuarioPorCorreo(loginDto.Correo!.ToLower());
            if (existe == null)
                return BadRequest("El usuario no existe");

            var logueado = await context.TraerUsuarioPorCorreoyClave(loginDto.Correo!.ToLower(), loginDto.Clave!);
            if (logueado != null)
            {
                var token = GenerateJwtToken(logueado);

                return Ok(token);
            }
            else
            {
                return BadRequest("Credenciales incorrectos");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest("Error en el backend: " + ex.Message);
        }
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CrearUsuario([FromBody] UsuarioCommandDto usuario)
    {
        try
        {
            var email = new EmailAddressAttribute();
            if (usuario != null)
            {
                var separar = usuario.Nombre.Trim(' ');
                string[] validar = separar.Split(' ');
                if (string.IsNullOrEmpty(usuario.Nombre) || validar.Length > 2)
                    return BadRequest("Ingrese su nombre");

                separar = usuario.Apellido.Trim(' ');
                validar = separar.Split(' ');

                if (string.IsNullOrEmpty(usuario.Apellido) || validar.Length > 2)
                    return BadRequest("Ingrese su apellido");

                if (!email.IsValid(usuario.Correo))
                    return BadRequest("Ingrese un email válido");
                if (string.IsNullOrEmpty(usuario.Clave))
                    return BadRequest("Ingrese su clave");
                if (usuario.Clave.Length < 7)
                    return BadRequest("El clave debe ser mayo a 7");
                var existe = await context.TraerUsuarioPorCorreo(usuario.Correo!);
                if (existe == null)
                {
                    var usuarionuevo = usuario.Adapt<Usuario>();
                    await context.RegistrarUsuario(usuarionuevo);
                    return Ok("Usuario Creado");
                }
                else
                {
                    return BadRequest($"Ya existe ese correo: {usuario.Correo}");
                }
            }
            else
            {
                return BadRequest("Complete los datos");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest("Error en el backend: " + ex.Message);
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


                var usuarioQueryDto = usuario.Adapt<UsuarioQueryDto>();

                return Ok(usuarioQueryDto);
            }
            else
            {
                return BadRequest("No se recibió el id");

            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest("Error en el backend: " + ex.Message);
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
            expires: DateTime.Now.AddMonths(1),
            claims: claims,
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}


public class LoginDto
{
    public string? Correo { get; set; }
    public string? Clave { get; set; }
}
