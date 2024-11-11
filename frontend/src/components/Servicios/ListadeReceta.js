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
        <div className="row">
            {recetas.map((receta) => (
                <div className="col mb-4" key={receta.idReceta}>
                    <Card style={{ width: '400px', height:'400px' }}>
                        {receta.imagen && receta.imagen.length > 0 ? (
                            receta.imagen.map((imagen, cell) => (
                                <div key={imagen.idImagen} style={{ height: '100%', width: '100%' }}>
                                    <img
                                        src={`data:${imagen.formato};base64,${imagen.datos}`}
                                        alt={`Receta ${cell + 1}`}
                                        className="card-img-top"
                                        style={{ width: '200px', height: '200px' }}
                                        onError={(e) => { e.target.src = ''; e.target.style.backgroundColor = '#d3d3d3'; }}
                                    />
                                </div>
                            ))) : (<p>Error en obtener la imagen</p>)}
                        <h5>{receta.nombre}</h5>
                        <p>{receta.descripcion}</p>
                        <a href="." className="btn">Ver más</a>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Recetas;
