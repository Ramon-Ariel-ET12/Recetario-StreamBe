namespace core;

public class Imagen
{
    public Guid IdImagen { get; set; } = Guid.NewGuid();
    public byte[] Datos { get; set; }
    public string Formato { get; set; }
}