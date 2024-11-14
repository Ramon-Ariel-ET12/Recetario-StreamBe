
import { useContext } from "react";
import AuthContext from "../../Authorization";

function Perfil() {
    const { logueado, logout } = useContext(AuthContext);
    if (!logueado) {
        return;
    }
    return (
        <div className="nav-item dropdown">
            <button data-bs-toggle="dropdown" style={{ background: 'none', border: 'none', }}>
                <i className="bi bi-person-circle" ></i>
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
                {/* <li><a className="dropdown-item" href="/Ver-mis-recetas">Ver mis recetas</a></li> */}
                <li><a className="dropdown-item" href="/Subir-receta">Subir receta</a></li>
                <li><a className="dropdown-item" href='/Iniciar-sesion' onClick={logout}>Cerrar sesion</a></li>
            </ul>
        </div>
    )
}

function Header() {

    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg justify-content-between px-4">

                <a className="navbar-brand" href="/"><i className="bi bi-cookie"></i></a>
                <Perfil />
            </nav>
        </header >
    );
}

export default Header;
