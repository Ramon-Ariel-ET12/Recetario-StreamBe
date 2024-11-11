namespace core.DTO;

public class UsuarioCommandDto
{
    public string? Nombre { get; set; }
    public string? Apellido { get; set; }
    public string? Correo { get; set; }
    public string? Clave { get; set; }
}

public class UsuarioQueryDto
{
    public string IdUsuario { get; set; }
    public string Nombre { get; set; }
    public string Apellido { get; set; }
    public string Correo { get; set; }
    public DateTime FechaCreacion { get; set; }
}
