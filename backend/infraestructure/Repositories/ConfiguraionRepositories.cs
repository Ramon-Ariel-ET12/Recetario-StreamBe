using application.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace infraestructure.Repositories;

public static class ConfiguraionRepositories
{
    public static IServiceCollection AddRepositories(this IServiceCollection repositories)
    {
        repositories.AddTransient<IUsuarioRepository, UsuarioRepository>();
        repositories.AddTransient<IRecetaRepository, RecetaRepository>();
        return repositories;
    }
}