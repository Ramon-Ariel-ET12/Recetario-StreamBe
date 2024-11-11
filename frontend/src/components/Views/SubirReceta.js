import { useContext, useState } from "react";
import Card from "../Servicios/Card";
import AuthContext from "../../Authorization";
import api from "../Servicios/Api";
import Button from "../Servicios/Button";
import { AlertSucces, AlertWarning } from "../Servicios/AlertMessage";

export function SubirReceta() {
    document.title = "Cual será la receta";
    const [loading, setLoading] = useState(false);
    const { ObtenerUsuario } = useContext(AuthContext);
    const [ingredientes, setIngredientes] = useState([{ cantidad: "", unidadMedida: "", descripcion: "" }]);
    const [instrucciones, setInstrucciones] = useState([{ paso: 1, explicacion: "" }]);
    const [imagen, setImagen] = useState(null);
    const [nombre, setNombre] = useState("");
    const [message, setMessage] = useState(null);
    const [descripcion, setDescripcion] = useState("");
    const [conteo, setConteo] = useState(2);


    const manejarImagen = (e) => {
        const archivo = e.target.files[0];

        if (archivo && archivo.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen({
                    datos: reader.result.split(",")[1],
                    formato: archivo.type
                });
            };
            reader.readAsDataURL(archivo);
        } else {
            setImagen(null);
        }
    };

    const AgregarInput = (cell, field, value, list, setList) => {
        const newList = [...list];
        newList[cell][field] = value;
        if (newList[cell].cantidad === "" && newList[cell].unidadMedida === "" && newList[cell].descripcion === "") {
            newList.splice(cell, 1);
        }
        if ((newList[cell].cantidad || newList[cell].unidadMedida || newList[cell].descripcion) && cell === list.length - 1) {
            newList.push({ cantidad: "", unidadMedida: "", descripcion: "" });
        }
        if (newList[cell].paso === "" && newList[cell].explicacion === "") {
            newList.splice(cell, 1);
        }
        if ((newList[cell].paso || newList[cell].explicacion) && cell === list.length - 1) {
            setConteo(conteo+1);
            newList.push({ paso: conteo, explicacion: "" });
        }
        setList(newList);
    };

    const CrearReceta = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const usuario = ObtenerUsuario();

        const ingredientesConCantidadValida = ingredientes
            .filter(ingrediente => ingrediente.cantidad && ingrediente.descripcion);

        const instruccionesValidas = instrucciones
            .filter(instruccion => instruccion.paso && instruccion.explicacion);

        const imagenesValidas = imagen ? [{ Datos: imagen.datos, Formato: imagen.formato }] : [];

        const nuevareceta = {
            nombre: nombre,
            descripcion: descripcion,
            ingrediente: ingredientesConCantidadValida,
            imagen: imagenesValidas,
            idUsuario: usuario.IdUsuario,
            instruccion: instruccionesValidas,
        };

        console.log("Receta a enviar:", nuevareceta);

        try {
            await api.post("/Receta/CrearReceta", nuevareceta);
            setMessage(AlertSucces("Tu receta se ha subido correctamente."));
            setNombre("");
            setDescripcion("");
            setInstrucciones([{ paso: "", explicacion: "" }]);
            setIngredientes([{ cantidad: "", unidadMedida: "", descripcion: "" }]);
            setImagen(null);
        } catch (error) {
            const errorMessage = error.response?.data || "Error en subir la receta.";
            setMessage(AlertWarning(errorMessage));
            console.error("Error al crear la receta:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const manejarCantidad = (e, cell) => {
        const valor = e.target.value;
        const condicion = /^[0-9/]*$/;

        if (condicion.test(valor)) {
            AgregarInput(cell, 'cantidad', valor, ingredientes, setIngredientes);
        }
    };



    const TamanoTextArea = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const AgregarTextArea = (e, cell) => {
        TamanoTextArea(e);
        AgregarInput(cell, "explicacion", e.target.value, instrucciones, setInstrucciones);
    };

    return (
        <>
            <Card style={{ margin: 'auto', top: 0, marginTop: '5vh', marginBottom: '5vh' }}>
                <form onSubmit={CrearReceta}>
                    <h1>¡Suba su receta!</h1>

                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre de la receta</label>
                        <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            placeholder="Ingrese el nombre de la receta"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imagen" className="form-label">Imagen de la receta</label>
                        <input
                            type="file"
                            className="form-control"
                            id="imagen"
                            accept="image/*"
                            onChange={manejarImagen}
                        />
                        {imagen && (
                            <div className="mt-3">
                                <img src={`data:${imagen.formato};base64,${imagen.datos}`} alt="Vista previa" style={{ maxWidth: "100%", maxHeight: "300px" }} />
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Una breve descripcion</label>
                        <textarea
                            id="descripcion"
                            className="form-control"
                            rows={1}
                            value={descripcion}
                            style={{ resize: 'none', overflow: 'hidden' }}
                            onChange={(e) => {
                                setDescripcion(e.target.value);
                                TamanoTextArea(e);
                            }}
                        />
                    </div>

                    <h3>Ingredientes:</h3>
                    {ingredientes.map((ingrediente, cell) => (
                        <div key={cell} className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cantidad"
                                value={ingrediente.cantidad}
                                onChange={(e) => manejarCantidad(e, cell)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Unidad de medida"
                                value={ingrediente.unidadMedida}
                                onChange={(e) => AgregarInput(cell, 'unidadMedida', e.target.value, ingredientes, setIngredientes)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Descripción del ingrediente"
                                value={ingrediente.descripcion}
                                onChange={(e) => AgregarInput(cell, 'descripcion', e.target.value, ingredientes, setIngredientes)}
                            />
                        </div>
                    ))}

                    <h3>Instrucciones:</h3>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Pasos</th>
                                <th scope="col">Explicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instrucciones.map((instruccion, cell) => (
                                <tr key={cell}>
                                    <td>
                                        <input
                                            disabled={true}
                                            type="text"
                                            className="form-control"
                                            placeholder="Paso"
                                            value={instruccion.paso}
                                            onChange={(e) => AgregarInput(cell, 'paso', e.target.value, instrucciones, setInstrucciones)}
                                        />
                                    </td>
                                    <td>
                                        <textarea
                                            className="form-control"
                                            rows="1"
                                            placeholder="Explicación"
                                            value={instruccion.explicacion}
                                            onChange={(e) => AgregarTextArea(e, cell)}
                                            style={{ resize: 'none', overflow: 'hidden' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {message}

                    <Button disabled={loading}>
                        {loading ? "Subiendo...." : "Subir receta"}
                    </Button>
                </form>
            </Card>

        </>
    );
}

export default SubirReceta;
