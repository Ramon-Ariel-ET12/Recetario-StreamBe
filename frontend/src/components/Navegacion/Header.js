import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

function Header() {
    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <a className="navbar-brand" href="/">
                        <i className="bi bi-cookie" style={{ fontSize: '1.5rem' }}></i>
                    </a>

                    <div className="nav-item dropdown">
                        <button data-bs-toggle="dropdown" style={{ background: 'none', border: 'none', }}>

                            <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }} ></i>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="/Subir-receta">Subir receta</a></li>
                            <li><a className="dropdown-item" href="/Cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Header;