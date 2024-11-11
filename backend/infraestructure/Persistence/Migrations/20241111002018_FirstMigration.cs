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
                    RecetaIdReceta = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagen", x => x.IdImagen);
                    table.ForeignKey(
                        name: "FK_Imagen_Receta_RecetaIdReceta",
                        column: x => x.RecetaIdReceta,
                        principalTable: "Receta",
                        principalColumn: "IdReceta",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ingrediente",
                columns: table => new
                {
                    IdIngrediente = table.Column<Guid>(type: "uuid", nullable: false),
                    Cantidad = table.Column<float>(type: "real", nullable: false),
                    UnidadMedida = table.Column<string>(type: "text", nullable: false),
                    Descripcion = table.Column<string>(type: "text", nullable: false),
                    RecetaIdReceta = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingrediente", x => x.IdIngrediente);
                    table.ForeignKey(
                        name: "FK_Ingrediente_Receta_RecetaIdReceta",
                        column: x => x.RecetaIdReceta,
                        principalTable: "Receta",
                        principalColumn: "IdReceta",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Instruccion",
                columns: table => new
                {
                    IdIntruccion = table.Column<Guid>(type: "uuid", nullable: false),
                    Paso = table.Column<string>(type: "text", nullable: false),
                    Explicacion = table.Column<string>(type: "text", nullable: false),
                    RecetaIdReceta = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Instruccion", x => x.IdIntruccion);
                    table.ForeignKey(
                        name: "FK_Instruccion_Receta_RecetaIdReceta",
                        column: x => x.RecetaIdReceta,
                        principalTable: "Receta",
                        principalColumn: "IdReceta",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Imagen_RecetaIdReceta",
                table: "Imagen",
                column: "RecetaIdReceta");

            migrationBuilder.CreateIndex(
                name: "IX_Ingrediente_RecetaIdReceta",
                table: "Ingrediente",
                column: "RecetaIdReceta");

            migrationBuilder.CreateIndex(
                name: "IX_Instruccion_RecetaIdReceta",
                table: "Instruccion",
                column: "RecetaIdReceta");

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
                name: "Instruccion");

            migrationBuilder.DropTable(
                name: "Receta");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
