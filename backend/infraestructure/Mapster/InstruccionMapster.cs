using core.DTO;
using core.Entities;
using Mapster;

namespace infraestructure.Mapster;

public class InstruccionMapster : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<InstruccionCommandDto, Instruccion>()
                .Map(destino => destino.Paso, origen => origen.Paso)
                .Map(destino => destino.Explicacion, origen => origen.Explicacion);

        config.NewConfig<Instruccion, InstruccionQueryDto>()
                .Map(destino => destino.IdIntruccion, origen => origen.IdIntruccion.ToString())
                .Map(destino => destino.Paso, origen => origen.Paso)
                .Map(destino => destino.Explicacion, origen => origen.Explicacion);
    }
}