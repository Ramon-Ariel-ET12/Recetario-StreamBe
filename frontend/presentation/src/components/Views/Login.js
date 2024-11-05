import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [message, setMessage] = useState(null);
    const requestLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/api/Usuario/IniciarSesion", { Correo: email, Clave: pass }, { withCredentials: true });
            console.log(response);
        } catch (error) {
            setMessage(<div class="alert alert-danger" role="alert">Credenciales incorrectos!</div>)
            console.log(error);
        }
    };

    return (
        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
            <div className="card" style={{ margin: 'auto', width: 'fit-content', height: 'fit-content' }}>
                <div className="card-body">
                    <form onSubmit={requestLogin}>
                        <h1 className='text-center'>Hola de nuevo!</h1>
                        <div className="mb-3">
                            <label htmlFor='email' className="form-label">Email</label>
                            <input type="email" id='email' className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input type="password" id='password' className="form-control" placeholder="Password" onChange={e => setPass(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" type="submit">Iniciar sesión</button>
                    </form>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Login;
