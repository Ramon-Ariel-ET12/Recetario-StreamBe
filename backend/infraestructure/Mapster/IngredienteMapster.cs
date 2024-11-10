using core.DTO;
using core.Entities;
using Mapster;

namespace infraestructure.Mapster;

public class IngredienteMapster : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<IngredienteCommandDto, Ingrediente>()
                .Map(destino => destino.Cantidad, origen => origen.Cantidad)
                .Map(destino => destino.UnidadMedida, origen => origen.UnidadMedida)
                .Map(destino => destino.Descripcion, origen => origen.Descripcion);

        config.NewConfig<Ingrediente, IngredienteQueryDto>()
                .Map(destino => destino.IdIngrediente, origen => origen.IdIngrediente.ToString())
                .Map(destino => destino.Cantidad, origen => origen.Cantidad)
                .Map(destino => destino.UnidadMedida, origen => origen.UnidadMedida)
                .Map(destino => destino.Descripcion, origen => origen.Descripcion);
    }
}