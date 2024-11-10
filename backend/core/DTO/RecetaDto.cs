namespace core.DTO;

public class RecetaCommandDto
{
    public string? Nombre { get; set; }
    public string? Descripcion { get; set; }
    public List<IngredienteCommandDto>? Ingrediente { get; set; }
    public List<ImagenCommandDto>? Imagen { get; set; }
    public List<InstruccionCommandDto>? Instruccion { get; set; }

    public string IdUsuario { get; set; }
}

public class RecetaQueryDto
{
    public string IdReceta { get; set; }
    public string Nombre { get; set; }
    public string Descripcion { get; set; }
    public List<IngredienteQueryDto> Ingrediente { get; set; }
    public List<ImagenQueryDto> Imagen { get; set; }
    public List<InstruccionQueryDto> Instruccion { get; set; }
    public DateTime FechaCreacion { get; set; }

    public UsuarioQueryDto Usuario { get; set; }
}