import { useNavigate } from "react-router-dom";
import api from "../Servicios/Api";
import Card from "../Servicios/Card";
import { useState } from "react";

function Registro() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const requestRegister = async (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !email || !password) {
            setMessage(<div className="alert alert-danger" role="alert">{"Todos los campos son obligatorios"}</div>);
            return;
        } else {
            setLoading(true);
            setMessage(null);
        }

        try {
            const response = await api.post("/Usuario/CrearUsuario", {
                nombre, apellido, correo: email, clave: password
            });
            if (response.status === 200) {
                navigate("/Iniciar-sesion");
            }
        } catch (error) {
            const errorMessage = error.response?.data || "Error al registrarse.";
            setMessage(<div className="alert alert-danger" role="alert">{errorMessage}</div>);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card style={{ margin: 'auto' }}>
                <h1 className='text-center'>Bienvenido!</h1>
                <form onSubmit={requestRegister}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor='nombre' className="form-label">Nombre</label>
                            <input type="text" id='nombre' className="form-control" placeholder="nombre" onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor='apellido' className="form-label">Apellido</label>
                            <input type="text" id='apellido' className="form-control" placeholder="apellido" onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input type="email" id='email' className="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='password' className="form-label">Contraseña</label>
                        <input type="password" id='password' className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" id="terms" className="form-check-input" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label htmlFor="terms" className="form-check-label">
                            Al registrarse acepta los <a href="/terminos-y-condiciones" target="_blank">términos y condiciones</a>.
                        </label>
                    </div>

                    {message}

                    <button className="btn" type="submit" disabled={loading || !isChecked}>
                        {loading ? "Cargando..." : "Iniciar sesión"}
                    </button>
                </form>
                <a href="/iniciar-sesion">Tengo cuenta, iniciar sesión</a>
            </Card>
        </>
    );
}

export default Registro;
