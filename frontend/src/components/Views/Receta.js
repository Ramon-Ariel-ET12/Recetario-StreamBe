import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Servicios/Loading';
import { TraerRecetasPorIdApi } from '../Servicios/ConsumoApi';
import Card from '../Servicios/Card';
import Recetas from '../Servicios/ListadeReceta';

export function Receta() {
    const [receta, setReceta] = useState(null);
    let { id } = useParams();
    id = id.replace(/^:/, '');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function TraerLaReceta() {
            try {
                const response = await TraerRecetasPorIdApi(id);
                if (response.data && response.data.length > 0) {
                    setReceta(response.data[0]);
                }
            } catch (error) {
                console.error("Error al obtener la receta:", error);
            } finally {
                setLoading(false);
            }
        }
        TraerLaReceta();
    }, [id]);

    if (loading) {
        return <Loading />;
    }
    if (!receta) {
        return (<><p>No se encontró</p></>);
    }
    document.title = receta.nombre;
    return (
        <div style={{ margin: 'auto', width: '90%' }}>
            <br />
            <Card style={{ width: '100%', margin: 'auto' }}>
                {receta ? (
                    <div className="row">
                        <div className="col" style={{ marginRight: '20px' }}>
                            <h1><u>{receta.nombre}</u></h1>
                            <h4>Ingredientes:</h4>
                            <ul>
                                {receta.ingrediente.map((x, index) => (
                                    <li key={index}>
                                        {x.cantidad} {x.unidadMedida} de {x.descripcion}
                                    </li>
                                ))}
                            </ul>
                            <h4>Instrucciones:</h4>
                            <ul>
                                {receta.instruccion.map((x, index) => (
                                    <li key={index}>
                                        {`Paso ${x.paso}: ${x.explicacion}`}
                                    </li>
                                ))}
                            </ul>
                            <p><strong>Creado por:</strong> {receta.usuario.nombre} {receta.usuario.apellido}</p>
                            <p><strong>Descripción:</strong> {receta.descripcion}</p>
                        </div>
                        <div className="col-auto" style={{ width: '400px', height: '400px' }}>
                            {receta.imagen.length > 0 ? (
                                <img
                                    src={`data:${receta.imagen[0].formato};base64,${receta.imagen[0].datos}`}
                                    alt={`Imagen de la receta`}
                                    style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                                />
                            ) : (
                                <p>Sin imagen disponible</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>No se encontró la receta.</p>
                )}
            </Card>
            <br />
            <Recetas />
        </div>
    );
}

export default Receta;
