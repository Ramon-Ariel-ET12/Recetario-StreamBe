import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from "../../Authorization";

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login, logueado } = useContext(AuthContext);

    if (logueado) {
        navigate("/");
    }

    const requestLogin = async (e) => {
        e.preventDefault();

        if (!email || !pass) {
            setMessage(<div className="alert alert-warning" role="alert">Por favor, complete todos los campos.</div>);
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const response = await axios.post("https://backend-streambe.onrender.com/api/Usuario/IniciarSesion", { Correo: email, Clave: pass });
            setLoading(false);
            login(response.data);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Credenciales incorrectos!";
            setMessage(<div className="alert alert-danger" role="alert">{errorMessage}</div>);
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
                        <button className="btn btn-primary" type="submit" disabled={loading}>
                            {loading ? 'Cargando...' : 'Iniciar sesión'}
                        </button>
                    </form>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Login;
