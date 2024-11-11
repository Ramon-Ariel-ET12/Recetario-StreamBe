using core.DTO;
using core.Entities;
using Mapster;

namespace infraestructure.Mapster;

public class UsuarioMapster : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<UsuarioCommandDto, Usuario>()
                .Map(destino => destino.Nombre, origen => origen.Nombre)
                .Map(destino => destino.Apellido, origen => origen.Apellido)
                .Map(destino => destino.Correo, origen => origen.Correo)
                .Map(destino => destino.Clave, origen => origen.Clave);

        config.NewConfig<Usuario, UsuarioQueryDto>()
                .Map(destino => destino.IdUsuario, origen => origen.IdUsuario.ToString())
                .Map(destino => destino.Nombre, origen => origen.Nombre)
                .Map(destino => destino.Apellido, origen => origen.Apellido)
                .Map(destino => destino.Correo, origen => origen.Correo)
                .Map(destino => destino.FechaCreacion, origen => origen.FechaCreacion);
    }
}