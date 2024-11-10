import React from 'react'
import { useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import { TraerUsuarioApi } from '../Servicios/ConsumoApi'

const Contacto = () => {
  useEffect(() => {
    async function TraerUsuario() {
      try {
        var token = localStorage.getItem("AuthToken");
        const decodedToken = jwtDecode(token);
        const id = decodedToken.IdUsuario;

        const response = await TraerUsuarioApi(id);
        console.log(response);

      } catch (error) {
        console.log(error);

      }
    }
    TraerUsuario();
  }, []);
  return (
    <div>
      <h1>Esta es la pagina de Contacto</h1>
    </div>
  )
}

export default Contacto