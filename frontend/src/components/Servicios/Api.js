import axios from "axios"


const token = localStorage.getItem("AuthToken");
const api = axios.create({
    baseURL: 'https://backend-recetario.onrender.com/api/',
    headers: {
        Authorization: `Bearer ${token}`
    },
});


export default api;