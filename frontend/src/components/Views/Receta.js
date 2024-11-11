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

    document.title = receta.nombre;
    return (
        <div style={{ margin: 'auto', width: '90%' }}>
            <br />
            <Card style={{ width: '100%', margin: 'auto' }}>
                {receta ? (
                    <>
                        <h2>{receta.nombre}</h2>
                        {receta.imagen.length > 0 ? (
                            <img
                                src={`data:${receta.imagen[0].formato};base64,${receta.imagen[0].datos}`}
                                alt={`Imagen de la receta`}
                                style={{ width: '200px', height: '200px', borderRadius: '8px' }}
                            />
                        ) : (
                            <p>Sin imagen disponible</p>
                        )}
                        <h3>Ingredientes:</h3>
                        <ul style={{ listStyle: 'disc inside', marginLeft: '20px' }}>
                            {receta.ingrediente.map((x, index) => (
                                <li key={index}>
                                    {x.cantidad} {x.unidadMedida} de {x.descripcion}
                                </li>
                            ))}
                        </ul>
                        <h3>Instrucciones:</h3>
                        <ul>
                            {receta.instruccion.map((x, index) => (
                                <li key={index}>
                                    {`Paso ${x.paso}:  ${x.explicacion}`}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Creado por:</strong> {receta.usuario.nombre} {receta.usuario.apellido}</p>
                        <p><strong>Descripción:</strong> {receta.descripcion}</p>
                    </>
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
