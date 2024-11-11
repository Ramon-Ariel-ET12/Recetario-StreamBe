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
            if (nuevareceta == null)
            {
                return BadRequest("Rellene los campos.");
            }
            if (string.IsNullOrEmpty(nuevareceta.Nombre))
            {
                return BadRequest("Ingrese el nombre de la receta.");
            }
            if (string.IsNullOrEmpty(nuevareceta.Descripcion))
            {
                return BadRequest("Ingrese la descripcion de la receta.");
            }
            if (nuevareceta.Ingrediente == null || nuevareceta.Ingrediente.Count == 0)
            {
                return BadRequest("Ingrese los ingredientes de la receta.");
            }
            if (nuevareceta.Instruccion == null || nuevareceta.Instruccion.Count == 0)
            {
                return BadRequest("Ingrese las intrucciones de la receta.");
            }
            if (nuevareceta.Imagen == null || nuevareceta.Imagen.Count == 0)
            {
                return BadRequest("Ingrese el imagen de la receta.");
            }
            foreach (var x in nuevareceta.Ingrediente)
            {
                if (string.IsNullOrEmpty(x.Cantidad))
                {
                    return BadRequest("Ingrese el campo cantidad de ingrediente de la receta.");
                }
                if (string.IsNullOrEmpty(x.Descripcion))
                {
                    return BadRequest("Ingrese el campo descripcion de ingrediente de la receta.");
                }
            }
            foreach (var x in nuevareceta.Instruccion)
            {
                if (string.IsNullOrEmpty(x.Explicacion))
                {
                    return BadRequest("Ingrese la explicacion de intrucciones de la receta.");
                }
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