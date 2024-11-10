namespace core.DTO;

public class IngredienteCommandDto
{
    public float? Cantidad { get; set; }
    public string? UnidadMedida { get; set; }
    public string? Descripcion { get; set; }
}

public class IngredienteQueryDto
{
    public string IdIngrediente { get; set; }
    public float Cantidad { get; set; }
    public string UnidadMedida { get; set; }
    public string Descripcion { get; set; }
}