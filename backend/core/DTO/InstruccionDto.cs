namespace core.DTO;

public class InstruccionCommandDto
{
    public int Paso { get; set; }
    public string? Explicacion { get; set; }
}

public class InstruccionQueryDto
{
    public string IdIntruccion { get; set; }
    public int Paso { get; set; }
    public string Explicacion { get; set; }
}