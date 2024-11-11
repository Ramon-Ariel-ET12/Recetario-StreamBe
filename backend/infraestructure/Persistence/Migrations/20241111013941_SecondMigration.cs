using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace infraestructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class SecondMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Convierte los valores actuales de la columna Cantidad a texto
            migrationBuilder.Sql("UPDATE Ingrediente SET Cantidad = CAST(Cantidad AS TEXT)");

            // Ahora cambia el tipo de la columna Cantidad de float a string
            migrationBuilder.AlterColumn<string>(
                name: "Cantidad",
                table: "Ingrediente",
                type: "text",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");
        }


        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Convierte los valores de texto de vuelta a float (si es posible)
            migrationBuilder.Sql("UPDATE Ingrediente SET Cantidad = CAST(Cantidad AS REAL)");

            // Luego, cambia el tipo de la columna Cantidad de string a float
            migrationBuilder.AlterColumn<float>(
                name: "Cantidad",
                table: "Ingrediente",
                type: "real",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }

    }
}
