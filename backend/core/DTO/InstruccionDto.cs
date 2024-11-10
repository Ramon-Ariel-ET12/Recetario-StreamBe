namespace core.DTO;

public class InstruccionCommandDto
{
    public string? Paso { get; set; }
    public string? Explicacion { get; set; }
}

public class InstruccionQueryDto
{
    public string IdIntruccion { get; set; }
    public string Paso { get; set; }
    public string Explicacion { get; set; }
}