using core.DTO;
using core.Entities;
using Mapster;

namespace infraestructure.Mapster;

public class ImagenMapster : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<ImagenCommandDto, Imagen>()
                .Map(destino => destino.Datos, origen => Convert.FromBase64String(origen.Datos))
                .Map(destino => destino.Formato, origen => origen.Formato);

        config.NewConfig<Imagen, ImagenQueryDto>()
                .Map(destino => destino.IdImagen, origen => origen.IdImagen.ToString())
                .Map(destino => destino.Datos, origen => Convert.ToBase64String(origen.Datos))
                .Map(destino => destino.Formato, origen => origen.Formato);
    }
}