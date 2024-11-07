import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logueado, setLogueado] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("AuthToken");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.IdUsuario && decoded.IdUsuario !== "") {
                    setLogueado(true);
                }
            } catch (error) {
                console.error("Error al decodificar el token", error);
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("AuthToken", token);
        setLogueado(true);
    };

    const logout = () => {
        localStorage.removeItem("AuthToken");
        setLogueado(false);
    };

    return (
        <AuthContext.Provider value={{ logueado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
