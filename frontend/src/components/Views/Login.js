import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const requestLogin = async (e) => {
        e.preventDefault();
        if (!email || !pass) {
            setMessage(<div className="alert alert-warning" role="alert">Por favor, complete todos los campos.</div>);
            return;
        }

        setLoading(true);
        setMessage(null); // Clear previous messages

        try {
            const response = await axios.post("http://localhost:5050/api/Usuario/IniciarSesion", { Correo: email, Clave: pass }, { withCredentials: true });
            console.log(response);
            // Handle successful login (e.g., redirect or show success message)
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Credenciales incorrectos!";
            setMessage(<div className="alert alert-danger" role="alert">{errorMessage}</div>);
            console.log(error);
        } finally {
            setLoading(false);
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
                            <input type="email" id='email' className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input type="password" id='password' className="form-control" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
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