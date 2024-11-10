import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from "../../Authorization";
import Card from '../Servicios/Card';
import { AlertWarning } from '../Servicios/AlertMessage';
import Button from '../Servicios/Button';
import { IniciarSesionApi } from '../Servicios/ConsumoApi';


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

    const IniciarSesion = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!email || !pass) {
            setMessage(AlertWarning("Por favor, complete todos los campos."));
            return;
        }

        try {
            const response = await IniciarSesionApi(email, pass);
            
            login(response.data);
        } catch (error) {
            const errorMessage = error.response?.data || "Error al Iniciar sesion.";
            setMessage(AlertWarning(errorMessage));
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <Card style={{ margin: 'auto' }}>
            <form onSubmit={IniciarSesion}>
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

                <Button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Iniciar sesión'}
                </Button>
            </form>
            <a href='/registrarse'>¿No tienes cuenta? Registrate</a>
        </Card >
    );
}

export default Login;
