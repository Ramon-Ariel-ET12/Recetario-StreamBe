import { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import { TraerRecetasApi } from './ConsumoApi';
import Button from "./Button"

export function Recetas() {
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [recetas, setRecetas] = useState([]);
    const [salteo, setSalteo] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function TraerRecetas() {
            try {
                const response = await TraerRecetasApi(salteo);
                if (response.data.length < 12) {
                    setHasMore(false);
                }
                setRecetas((x) => {
                    const newRecetas = response.data.filter(
                        (receta) => !x.some((r) => r.idReceta === receta.idReceta)
                    );
                    console.log(newRecetas);
                    return [...x, ...newRecetas];
                });
            } catch (error) {
                document.location.reload();
                console.error("Error al obtener recetas:", error);
            } finally {
                setLoadingButton(false);
                setLoading(false);
            }
        }


        TraerRecetas();
    }, [salteo]);

    const loadMore = () => {
        setLoadingButton(true);
        setSalteo((nuevoSalteo) => nuevoSalteo + 1);
    };

    if (loading) {
        return Loading();
    }

    return (
        <div>
            <div className="d-flex flex-wrap">
                {recetas.map((x) => (
                    <div className="mb-4" style={{ margin: 'auto' }} key={x.idReceta}>
                        <Card style={{ width: '300px', height: '500px' }}>
                            {x.imagen && x.imagen.length > 0 ? (
                                x.imagen.map((x, cell) => (
                                    <div key={x.idImagen} style={{ margin: 'auto', height: 'min-content', width: 'min-content' }}>
                                        <img
                                            src={`data:${x.formato};base64,${x.datos}`}
                                            alt={`Receta ${cell + 1}`}
                                            className="card-img-top"
                                            style={{ width: '200px', height: '200px' }}
                                            onError={(e) => { e.target.src = ''; e.target.style.backgroundColor = '#d3d3d3'; }}
                                        />
                                    </div>
                                ))) : (<p>Error en obtener la imagen</p>)}

                            <div style={{ bottom: '0' }}>
                                <p>De: {`${x.usuario.nombre} ${x.usuario.apellido}`}</p>
                                <h5 className="limited-text">{x.nombre}</h5>
                                <p className="limited-text">{x.descripcion}</p>
                                <a href={`/Receta/:${x.idReceta}`} className="btn">Ver receta</a>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
            {hasMore && (
                <div className="text-center" style={{ marginBottom: '20px' }}>
                    <Button disabled={loadingButton} onClick={loadMore} >
                        {loadingButton ? "Trayendo recetas..." : "Cargar más recetas"}
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Recetas;
