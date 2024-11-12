using System.Text;
using infraestructure.Mapster;
using infraestructure.Repositories;
using infraestructure.Services;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

var jwtSettings = builder.Configuration.GetSection("Jwt");
var connection = builder.Configuration.GetConnectionString("Recetario");

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddServices();
builder.Services.AddRepositories();

builder.Services.AddDbContext<RecetarioDbContext>(x => x.UseNpgsql(connection));

MapsterConfiguration.RegisterMappings();

var options = new DbContextOptionsBuilder<RecetarioDbContext>();
options.UseNpgsql(connection);
var context = new RecetarioDbContext(options.Options);
context.Database.Migrate();

builder.Services.AddCors(x =>
{
    x.AddPolicy("RecetarioPolicy", builder =>
    {
        builder.AllowAnyHeader()
                .AllowAnyMethod()
                .WithOrigins("http://localhost:3000", "https://frontend-recetario-x6vq.onrender.com")
                .AllowCredentials();
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings["Issuer"],
            ValidAudience = jwtSettings["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!))
        };
    });



var app = builder.Build();

app.UseCors("RecetarioPolicy");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.Run();
