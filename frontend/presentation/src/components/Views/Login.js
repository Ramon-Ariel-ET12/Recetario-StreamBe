import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

function FormGroupExample() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const requestLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://backend-streambe.onrender.com/api/Usuario/IniciarSesion", { Correo: email, Clave: pass })
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-center'>
                <Card style={{ margin: 'auto', width: ' fit-content', height: 'fit-content' }}>
                    <Card.Body>
                        <Form>
                            <h1 className=' text-center'>Hola de nuevo!</h1>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control type="email" id='email' placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control type="password" id='password' placeholder="Password" onChange={e => setPass(e.target.value)}/>
                            <Button color='primary' type='submit' onClick={requestLogin}>Iniciar sesión</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default FormGroupExample;