namespace core;

public class Ingrediente
{
    public Guid IdIngrediente { get; set; } = Guid.NewGuid();
    public decimal Cantidad { get; set; }
    public string? UnidadMedida { get; set; }
    public string? Descripcion { get; set; }

}