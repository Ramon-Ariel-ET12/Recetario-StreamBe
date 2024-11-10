import { useParams } from 'react-router-dom';

export function Receta() {
    const { id } = useParams();

    console.log("ID de la receta:", id);

    return (
        <>
            <p>ID de la receta: {id}</p>
        </>
    );
}

export default Receta;