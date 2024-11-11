using application.Services;
using core.DTO;
using core.Entities;
using Mapster;
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
    public async Task<IActionResult> CrearReceta([FromBody] RecetaCommandDto nuevareceta)
    {
        try
        {
            if (nuevareceta == null ||
            string.IsNullOrEmpty(nuevareceta.Nombre) ||
            string.IsNullOrEmpty(nuevareceta.Descripcion) ||
                nuevareceta.Ingrediente == null ||
                nuevareceta.Imagen == null ||
                nuevareceta.Imagen.Count == 0)
            {
                return BadRequest("Rellene los campos.");
            }

            var receta = nuevareceta.Adapt<Receta>();

            await context.CrearReceta(receta);

            return Ok("Receta creada exitosamente.");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest("Error en el backend: " + ex.Message);
        }
    }


    [HttpGet]
    public async Task<IActionResult> TraerRecetas(int salteo = 0)
    {
        try
        {
            var recetas = await context.TraerRecetas(salteo);

            var recetaconlaimagen = recetas.Adapt<List<RecetaQueryDto>>();

            return Ok(recetaconlaimagen);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest("Error en el backend: " + ex.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> TraerRecetasPorIdReceta(string id)
    {
        try
        {
            if (!Guid.TryParse(id, out var IdReceta))
                return BadRequest("No se encontro la receta.");

            var recetas = await context.TraerRecetaPorIdReceta(IdReceta);

            var recetaconlaimagen = recetas.Adapt<List<RecetaQueryDto>>();

            return Ok(recetaconlaimagen);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest("Error en el backend: " + ex.Message);
        }
    }

}