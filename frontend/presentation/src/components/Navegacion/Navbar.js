import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/'>
                <img src='./logo.png' width='50'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto"> 
                        <li className="nav-item">
                            <Link className="nav-link" to='/' >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Contacto' >Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/' >Algo mas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
    </div>
  )
}
//<ul className="navbar-nav mx-auto"> le agregue el "mx-auto" para centrar los elementos (juguetito de bootstrap)

export default Navbar