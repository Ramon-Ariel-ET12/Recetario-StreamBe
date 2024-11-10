namespace core.Entities;

public class Ingrediente
{
    public Guid IdIngrediente { get; set; } = Guid.NewGuid();
    public float Cantidad { get; set; }
    public string UnidadMedida { get; set; }
    public string Descripcion { get; set; }

}