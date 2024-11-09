import React from 'react'
import { useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import api from '../Servicios/Api'

const Contacto = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        var token = localStorage.getItem("AuthToken");
        const decodedToken = jwtDecode(token);
        const id = decodedToken.IdUsuario;
        console.log(id);

        const response = api.get(`/Usuario/Traerusuario?id=${id}`);
        console.log(response);

      } catch (error) {
        console.log(error);

      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Esta es la pagina de Contacto</h1>
    </div>
  )
}

export default Contacto