import { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import { TraerRecetasApi, TraerRecetasPorBusquedaApi } from './ConsumoApi';
import Button from "./Button";

export function Recetas({ buscar }) {
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [recetas, setRecetas] = useState([]);
    const [salteo, setSalteo] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchRecetas = async () => {
            try {
                let response;
                setLoading(true);
                if (buscar) {
                    response = await TraerRecetasPorBusquedaApi(buscar);
                    setRecetas(response.data);
                    setSalteo(0);
                } else {
                    response = await TraerRecetasApi(salteo);
                    if (response.data.length < 12) {
                        setHasMore(false);
                    }
                    setRecetas((prevRecetas) => [
                        ...prevRecetas.filter(
                            (receta) => !response.data.some((r) => r.idReceta === receta.idReceta)
                        ),
                        ...response.data,
                    ]);
                }
            } catch (error) {
                console.error('Error al obtener recetas:', error);
            } finally {
                setLoading(false);
                setLoadingButton(false);
            }
        };

        fetchRecetas();
    }, [buscar, salteo]);

    const loadMore = () => {
        setLoadingButton(true);
        setSalteo((prevSalteo) => prevSalteo + 1);
    };

    if (loading && recetas.length === 0) return <Loading />;

    return (
        <div>
            <div className="d-flex flex-wrap">
                {recetas.length === 0 ? (
                    <p>No se encontraron recetas.</p>
                ) : (
                    recetas.map((receta) => (
                        <div className="mb-4" style={{ margin: 'auto' }} key={receta.idReceta}>
                            <Card style={{ width: '300px', height: '500px' }}>
                                {receta.imagen && receta.imagen.length > 0 ? (
                                    receta.imagen.map((img, index) => (
                                        <div
                                            key={img.idImagen}
                                            style={{ margin: 'auto', height: 'min-content', width: 'min-content' }}
                                        >
                                            <img
                                                src={`data:${img.formato};base64,${img.datos}`}
                                                alt={`Receta ${index + 1}`}
                                                className="card-img-top"
                                                style={{ width: '200px', height: '200px' }}
                                                onError={(e) => {
                                                    e.target.src = '';
                                                    e.target.style.backgroundColor = '#d3d3d3';
                                                }}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p>Error en obtener la imagen</p>
                                )}

                                <div style={{ bottom: '0' }}>
                                    <p>De: {`${receta.usuario.nombre} ${receta.usuario.apellido}`}</p>
                                    <h5 className="limited-text">{receta.nombre}</h5>
                                    <p className="limited-text">{receta.descripcion}</p>
                                    <a href={`/Receta/:${receta.idReceta}`} className="btn">
                                        Ver receta
                                    </a>
                                </div>
                            </Card>
                        </div>
                    ))
                )}
            </div>
            {hasMore && !buscar && (
                <div className="text-center" style={{ marginBottom: '20px' }}>
                    <Button disabled={loadingButton} onClick={loadMore}>
                        {loadingButton ? 'Trayendo recetas...' : 'Cargar más recetas'}
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Recetas;
