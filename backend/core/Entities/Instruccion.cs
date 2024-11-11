namespace core.Entities;

public class Instruccion
{
    public Guid IdIntruccion { get; set; } = Guid.NewGuid();
    public int Paso { get; set; }
    public string Explicacion { get; set; }
}