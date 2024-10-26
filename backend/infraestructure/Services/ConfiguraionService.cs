using application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace infraestructure.Services;

public static class ConfiguraionService
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddScoped<IUsuarioService, UsuarioService>();
        return services;
    }
}