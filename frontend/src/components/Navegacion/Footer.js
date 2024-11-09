import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Authorization";
import { useLocation } from "react-router-dom";

function Footer() {
    const { logueado } = useContext(AuthContext);
    const [message, setMessage] = useState('')
    const location = useLocation();
    useEffect(() => {
        if (logueado && location.pathname.toLowerCase() !== "/terminos-y-condiciones") {
            setMessage(<a href="/Terminos-y-condiciones" target="_blank" >Ver términos y condiciones</a>);
        }
    }, [logueado, location.pathname]);
    return (
        <footer>
            <nav className="navbar navbar-expand-lg justify-content-between px-4">
                <a href="https://github.com/Ramon-Ariel-ET12/Recetario-StreamBe"><i className="bi bi-github"></i></a>
                {message}
                <a href="/Sobre-nosotros" >Sobre nosotros</a>
            </nav>
        </footer>
    );
}

export default Footer;
