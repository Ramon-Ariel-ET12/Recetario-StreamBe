using Mapster;

namespace infraestructure.Mapster;

public static class MapsterConfiguration
{
    public static void RegisterMappings()
    {
        TypeAdapterConfig.GlobalSettings.Apply(new ImagenMapster());
        TypeAdapterConfig.GlobalSettings.Apply(new IngredienteMapster());
        TypeAdapterConfig.GlobalSettings.Apply(new IngredienteMapster());
        TypeAdapterConfig.GlobalSettings.Apply(new RecetaMapster());
        TypeAdapterConfig.GlobalSettings.Apply(new UsuarioMapster());
    }
}