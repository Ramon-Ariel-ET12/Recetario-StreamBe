using application.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace infraestructure.Repositories;

public static class ConfiguraionRepositories
{
    public static IServiceCollection AddRepositories(this IServiceCollection repositories)
    {
        repositories.AddScoped<IUsuarioRepository, UsuarioRepository>();
        return repositories;
    }
}