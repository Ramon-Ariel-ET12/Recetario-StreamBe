using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace infraestructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    IdUsuario = table.Column<Guid>(type: "uuid", nullable: false),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Apellido = table.Column<string>(type: "text", nullable: false),
                    Correo = table.Column<string>(type: "text", nullable: false),
                    Clave = table.Column<string>(type: "text", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.IdUsuario);
                });

            migrationBuilder.CreateTable(
                name: "Receta",
                columns: table => new
                {
                    IdReceta = table.Column<Guid>(type: "uuid", nullable: false),
                    Nombre = table.Column<string>(type: "text", nullable: false),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IdUsuario = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Receta", x => x.IdReceta);
                    table.ForeignKey(
                        name: "FK_Receta_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Imagen",
                columns: table => new
                {
                    IdImagen = table.Column<Guid>(type: "uuid", nullable: false),
                    Datos = table.Column<byte[]>(type: "bytea", nullable: false),
                    Formato = table.Column<string>(type: "text", nullable: false),
                    IdReceta = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagen", x => x.IdImagen);
                    table.ForeignKey(
                        name: "FK_Imagen_Receta_IdReceta",
                        column: x => x.IdReceta,
                        principalTable: "Receta",
                        principalColumn: "IdReceta",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ingrediente",
                columns: table => new
                {
                    IdIngrediente = table.Column<Guid>(type: "uuid", nullable: false),
                    Cantidad = table.Column<decimal>(type: "numeric", nullable: false),
                    UnidadMedida = table.Column<string>(type: "text", nullable: false),
                    Descripcion = table.Column<string>(type: "text", nullable: true),
                    IdReceta = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingrediente", x => x.IdIngrediente);
                    table.ForeignKey(
                        name: "FK_Ingrediente_Receta_IdReceta",
                        column: x => x.IdReceta,
                        principalTable: "Receta",
                        principalColumn: "IdReceta",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Imagen_IdReceta",
                table: "Imagen",
                column: "IdReceta");

            migrationBuilder.CreateIndex(
                name: "IX_Ingrediente_IdReceta",
                table: "Ingrediente",
                column: "IdReceta");

            migrationBuilder.CreateIndex(
                name: "IX_Receta_IdUsuario",
                table: "Receta",
                column: "IdUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imagen");

            migrationBuilder.DropTable(
                name: "Ingrediente");

            migrationBuilder.DropTable(
                name: "Receta");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
