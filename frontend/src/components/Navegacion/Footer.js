import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Authorization";

function Footer() {
    const { logueado } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (logueado && document.location.pathname.toLowerCase() !== "/terminos-y-condiciones") {
            setMessage(<a href="/Terminos-y-condiciones">Ver términos y condiciones</a>);
        }
    }, [logueado]);
    return (
        <footer>
            <nav className="navbar navbar-expand-lg justify-content-between footers px-4">
                    <a href="https://github.com/Ramon-Ariel-ET12/Recetario-StreamBe" className="footer-icon"><i className="bi bi-github"></i></a>
                    {message && <div className="footer-message">{message}</div>}
                    <a href="/Sobre-nosotros" className="footer-link">Sobre nosotros</a>
            </nav>
        </footer>
    );
}

export default Footer;
