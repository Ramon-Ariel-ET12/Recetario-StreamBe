import api from "./Api";


export const RegistrarUsuarioApi = async (nombre, apellido, correo, clave) => {
    return await api.post("/Usuario/CrearUsuario", { nombre, apellido, correo, clave });

}
export const IniciarSesionApi = async (correo, clave) => {
    return await api.post("/Usuario/IniciarSesion", { correo, clave });
}

export const TraerRecetasApi = async (salteo = 0) => {
        return  await api.get(`/Receta/TraerRecetas?salteo=${salteo * 10}`);
}

export const TraerRecetasPorIdApi = async (IdReceta) => {
        return  await api.get(`/Receta/TraerRecetasPorIdReceta?id=${IdReceta}`);
}
export const TraerRecetasPorBusquedaApi = async (busqueda) => {
        return  await api.get(`/Receta/TraerRecetasPorBusqueda?busqueda=${busqueda}`);
}

export const TraerUsuarioApi = async (id) => {
    return await api.get(`/Usuario/Traerusuario?id=${id}`);
}