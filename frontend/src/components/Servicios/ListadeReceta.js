import { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import { TraerRecetasApi } from './ConsumoApi';

export function Recetas() {
    const [loading, setLoading] = useState(true);
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        async function TraerRecetas() {
            try {
                const response = await TraerRecetasApi();
                setRecetas(response.data);
            } catch (error) {
                console.error("Error al obtener recetas:", error);
            }
            finally {
                setLoading(false);
            }
        }
        TraerRecetas();
    }, []);

    if (loading) {
        return Loading();
    }

    return (
        <Card style={{ width: '18rem' }}>

            {recetas.map((receta) => (
                <div key={receta.idReceta}>
                    {receta.imagen && receta.imagen.length > 0 ? (

                        receta.imagen.map((imagen, cell) => (
                            <div key={imagen.idImagen} style={{ height: '20vh', width: '20vh' }}>
                                <img
                                    src={`data:${imagen.formato};base64,${imagen.datos}`}
                                    alt={`Receta ${cell + 1}`}
                                    className="card-img-top"
                                    style={{ width: '100%', height: '100%' }}
                                    onError={(e) => { e.target.src = ''; e.target.style.backgroundColor = '#d3d3d3'; }}
                                />
                            </div>
                        ))) : (<p>Error en obtener la imagen</p>)}

                    <h5 >{receta.nombre}</h5>
                    <p>{receta.descripcion}</p>
                    <a href="." className="btn">Ver más</a>

                </div>
            ))}

        </Card>
    );
}

export default Recetas;
