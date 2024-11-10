using core.DTO;
using core.Entities;
using Mapster;

namespace infraestructure.Mapster;

public class RecetaMapster : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<RecetaCommandDto, Receta>()
                .Map(destino => destino.Nombre, origen => origen.Nombre)
                .Map(destino => destino.Descripcion, origen => origen.Descripcion)
                .Map(destino => destino.IdUsuario, origen => origen.IdUsuario)
                .Map(destino => destino.Ingrediente, origen => origen.Ingrediente.Adapt<List<Ingrediente>>())
                .Map(destino => destino.Imagen, origen => origen.Imagen.Adapt<List<Imagen>>())
                .Map(destino => destino.Instruccion, origen => origen.Instruccion.Adapt<List<Instruccion>>());

        config.NewConfig<Receta, RecetaQueryDto>()
                .Map(destino => destino.IdReceta, origen => origen.IdReceta.ToString())
                .Map(destino => destino.Nombre, origen => origen.Nombre)
                .Map(destino => destino.Descripcion, origen => origen.Descripcion)
                .Map(destino => destino.FechaCreacion, origen => origen.FechaCreacion)
                .Map(destino => destino.Usuario, origen => origen.Usuario.Adapt<UsuarioQueryDto>())
                .Map(destino => destino.Ingrediente, origen => origen.Ingrediente.Adapt<List<IngredienteQueryDto>>())
                .Map(destino => destino.Imagen, origen => origen.Imagen.Adapt<List<ImagenQueryDto>>())
                .Map(destino => destino.Instruccion, origen => origen.Instruccion.Adapt<List<InstruccionQueryDto>>());
    }
}
