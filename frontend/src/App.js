import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext, { AuthProvider } from './Authorization';
import Inicio from './components/Views/Inicio';
import Login from './components/Views/Login';
import Contacto from './components/Views/Contacto';
import Layout from './components/Navegacion/Layout';
import Registro from './components/Views/Registro';
import Terminoscondiciones from './components/Views/Terminoscondiciones';
import { SubirReceta } from './components/Views/SubirReceta';
import Loading from './components/Servicios/Loading';
import Receta from './components/Views/Receta';

function PrivateRoute({ children }) {
  const { logueado, loading } = useContext(AuthContext);

  if (loading) {
    return Loading();
  }

  if (logueado) {
    return children;
  } else {
    return <Navigate to="/iniciar-sesion" />;
  }
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<PrivateRoute><Inicio /></PrivateRoute>} />
            <Route path="/Registrarse" element={<Registro />} />
            <Route path="/Iniciar-sesion" element={<Login />} />
            <Route path="/Terminos-y-condiciones" element={<Terminoscondiciones />} />
            <Route path="/Contacto" element={<PrivateRoute><Contacto /></PrivateRoute>} />
            <Route path="/Subir-receta" element={<PrivateRoute><SubirReceta /></PrivateRoute>} />
            {/* <Route path="/Ver-mis-recetas" element={<PrivateRoute><VerMisRecetas /></PrivateRoute>} /> */}
            <Route path="/Receta/:id" element={<PrivateRoute><Receta /></PrivateRoute>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
