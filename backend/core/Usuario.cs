namespace core;

public class Usuario
{
    public Guid IdUsuario { get; set; } = Guid.NewGuid();
    public string Nombre { get; set; }
    public string Apellido { get; set; }
    public string Correo { get; set; }
    public string Clave { get; set; }
    public DateTime FechaCreacion { get; set; } = DateTime.UtcNow;

    public List<Receta> Receta { get; set; }
}
