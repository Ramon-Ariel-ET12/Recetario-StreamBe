import api from "./Api";


export const RegistrarUsuarioApi = async (nombre, apellido, correo, clave) => {
    return await api.post("/Usuario/CrearUsuario", { nombre, apellido, correo, clave });

}
export const IniciarSesionApi = async (correo, clave) => {
    return await api.post("/Usuario/IniciarSesion", { correo, clave });
}

export const TraerRecetasApi = async () => {
    return await api.get("/Receta/TraerRecetas");
}

export const TraerUsuarioApi = async (id) => {
    return await api.get(`/Usuario/Traerusuario?id=${id}`);
}