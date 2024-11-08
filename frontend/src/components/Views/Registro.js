import Card from "../Servicios/Card";



function Registro() {
    return (<>
        <Card style={{ margin:'auto'}}>
            <h1 className='text-center'>Bienvenido!</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email</label>
                    <input type="email" id='email' className="form-control" placeholder="Enter email"  />
                </div>
                <div className="mb-3">
                    <label htmlFor='password' className="form-label">Password</label>
                    <input type="password" id='password' className="form-control" placeholder="Password"/>
                </div>
                <button className="btn btn-primary" type="submit" >
                    asd
                </button>
            </form>
            <a href="/iniciar-sesion">Tengo cuenta, iniciar sesion</a>
        </Card>
    </>);
}


export default Registro;