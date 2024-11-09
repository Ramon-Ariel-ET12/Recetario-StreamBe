import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from "../../Authorization";
import api from '../Servicios/Api';
import Card from '../Servicios/Card';
function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const { login, logueado } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (logueado) {
            navigate("/");
        }
    }, [logueado, navigate]);

    const requestLogin = async (e) => {
        e.preventDefault();

        if (!email || !pass) {
            setMessage(<div className="alert alert-warning" role="alert">Por favor, complete todos los campos.</div>);
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const response = await api.post("/Usuario/IniciarSesion", { Correo: email, Clave: pass });
            login(response.data);
        } catch (error) {
            const errorMessage = error.response?.data;
            setMessage(<div className="alert alert-danger" role="alert">{errorMessage}</div>);
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className='d-flex justify-content-center' style={{ height: '100%' }}>
            <Card>
                <form onSubmit={requestLogin}>
                    <h1 className='text-center'>Hola de nuevo!</h1>
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input type="email" id='email' className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='password' className="form-label">Contraseña</label>
                        <input type="password" id='password' className="form-control" placeholder="Password" onChange={e => setPass(e.target.value)} />
                    </div>
                    {message}
                    <button className="btn" type="submit" disabled={loading}>
                        {loading ? 'Cargando...' : 'Iniciar sesión'}
                    </button>
                </form>
                <a href='/registrarse'>¿No tienes cuenta? Registrate</a>
            </Card >
        </div>
    );
}

export default Login;
