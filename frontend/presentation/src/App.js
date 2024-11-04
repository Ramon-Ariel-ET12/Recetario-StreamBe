import './App.css';
import './components/Navegacion/Cards.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navegacion/Navbar'
import Footer from './components/Navegacion/Footer'
import Inicio from './components/Views/Inicio'
import Contacto from './components/Views/Contacto'
import Cards from './components/Navegacion/Cards'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Contacto" element={<Contacto />} />
          {/* y asi para agregar mas elementos,  que pro*/}
        </Routes>
        <Footer/>
      </Router>
      <Cards />
    </div>
  );
}

export default App;