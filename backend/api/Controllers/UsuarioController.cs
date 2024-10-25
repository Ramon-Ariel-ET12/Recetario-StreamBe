using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [Produces("application/json")]
    public class UsuarioController : ControllerBase
    {

        [HttpGet]
        public IActionResult Hola()
        {
            return Ok();
        }
    }
}
