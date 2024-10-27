using application.Services;
using core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
[Produces("application/json")]
[Authorize]
public class RecetaController : ControllerBase
{
    private readonly IRecetaService context;
    public RecetaController(IRecetaService context)
    {
        this.context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CrearReceta([FromBody] CrearReceta nuevareceta)
    {
        
        if (nuevareceta == null || string.IsNullOrEmpty(nuevareceta.Nombre) || string.IsNullOrEmpty(nuevareceta.Descripcion) || nuevareceta.Ingrediente == null || nuevareceta.Imagen == null || nuevareceta.Imagen.Count > 2)
        {
            return BadRequest("Datos de receta inválidos.");
        }

        Receta receta = new()
        {
            Nombre = nuevareceta.Nombre,
            Descripcion = nuevareceta.Descripcion,
            Ingrediente = nuevareceta.Ingrediente,
            Imagen = nuevareceta.Imagen,
            IdUsuario = Guid.Parse(nuevareceta.IdUsuario!)
        };

        await context.CrearReceta(receta);
        return Ok("Receta creada exitosamente.");
    }

    [HttpGet]
    public async Task<IActionResult> TraerRecetas()
    {
        var recetas = await context.TraerReceta();

        var recetaconlaimagen = recetas.Select(receta => new
        {
            receta.IdReceta,
            receta.Nombre,
            receta.Descripcion,
            receta.FechaCreacion,
            Ingredientes = receta.Ingrediente,
            Imagenes = receta.Imagen.Select(imagen => new
            {
                imagen.IdImagen,
                Base64 = Convert.ToBase64String(imagen.Datos),
                imagen.Formato
            }).ToList(),
        });

        return Ok(recetaconlaimagen); // <img src={`data:image/png;base64,${Base64}`} alt="Imagen de la receta" />
    }
}

public class CrearReceta
{
    public string? Nombre { get; set; }
    public string? Descripcion { get; set; }
    public List<Ingrediente> Ingrediente { get; set; } = [];
    public List<Imagen> Imagen { get; set; } = [];

    public string? IdUsuario { get; set; }
}