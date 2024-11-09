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

function PrivateRoute({ children }) {
    const { logueado, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading...</p>;
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
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
