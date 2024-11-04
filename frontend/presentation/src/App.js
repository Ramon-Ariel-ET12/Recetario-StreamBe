import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './components/Views/Inicio'
import Login from './components/Views/Login'
import Contacto from './components/Views/Contacto'
import Layout from './components/Navegacion/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Iniciar-sesion" element={<Login />} />
          {/* y asi para agregar mas elementos,  que pro*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
