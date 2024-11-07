import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Authorization'
import Inicio from './components/Views/Inicio'
import Login from './components/Views/Login'
import Contacto from './components/Views/Contacto'
import Layout from './components/Navegacion/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Iniciar-sesion" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
