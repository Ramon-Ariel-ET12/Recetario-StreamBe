import { useContext } from "react";
import Recetas from "../Servicios/ListadeReceta";
import AuthContext from "../../Authorization";

export function VerMisRecetas() {
    const {ObtenerUsuario} = useContext(AuthContext);
    const token = ObtenerUsuario();
    console.log(token.IdUsuario);
    
    if (token === null) {
        return (
            <>
            No se encontró ni una receta
            </>
        );
    }
    
    return (
        <>
        <Recetas buscar={token.IdUsuario} />
        </>
    );
}


export default VerMisRecetas;