import { useNavigate } from "react-router-dom";
import { RegistrarUsuarioApi } from "../Servicios/ConsumoApi";
import Card from "../Servicios/Card";
import { useState } from "react";
import Button from "../Servicios/Button";
import { AlertWarning } from "../Servicios/AlertMessage";

function Registro() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const RegistrarUsuario = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!nombre || !apellido || !email || !password) {
            setMessage(AlertWarning("Todos los campos son obligatorios"));
            return;
        }

        try {
            await RegistrarUsuarioApi(nombre, apellido, email, password);
            navigate("/Iniciar-sesion");
        } catch (error) {
            const errorMessage = error.response?.data || "Error al registrarse.";
            setMessage(AlertWarning(errorMessage));
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card style={{ margin: 'auto' }}>
                <h1 className='text-center'>Bienvenido!</h1>
                <form onSubmit={RegistrarUsuario}>
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

                    <Button type={'submit'} disabled={loading || !isChecked}>
                        {loading ? "Cargando..." : "Registrarse"}
                    </Button>
                </form>
                <a href="/iniciar-sesion">Tengo cuenta, iniciar sesión</a>
            </Card>
        </>
    );
}

export default Registro;
