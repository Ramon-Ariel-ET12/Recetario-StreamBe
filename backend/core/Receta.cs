namespace core;

public class Receta
{
    public Guid IdReceta { get; set; } = Guid.NewGuid();
    public string Nombre { get; set; }
    public string Descripcion { get; set; }
    public List<Ingrediente> Ingrediente { get; set; } = [];
    public List<Imagen> Imagen { get; set; } = [];
    public DateTime FechaCreacion { get; set; } = DateTime.UtcNow;

    public Guid IdUsuario { get; set; }
    public Usuario Usuario { get; set; }
}