namespace core.DTO;

public class ImagenCommandDto
{
    public string? Datos { get; set; }
    public string? Formato { get; set; }

}

public class ImagenQueryDto
{
    public string IdImagen { get; set; }
    public string Datos { get; set; }
    public string Formato { get; set; }

}