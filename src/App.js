import './App.css';

import BarraSuperior from './componentes/BarraSuperior';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Paginas/Home';
import ComoFunciona from './Paginas/ComoFunciona';
import HistorialCuenta from './Paginas/HistorialCuenta';
import Ajustes from './Paginas/Ajustes';
import SalirCuenta from './Paginas/SalirCuenta';
import AcercaDeNosotros from './Paginas/AcercaDeNosotros';
import Usuario from './Paginas/Usuario';
import Administrador from './Paginas/Administrador';

function App() {
  return (
    <div className="App">
      <Router>
        <div >
          <BarraSuperior />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/historial-cuenta" element={<HistorialCuenta />} />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/salir-cuenta" element={<SalirCuenta />} />
            <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
            <Route path="/Administrador" element={<Administrador/>} />
            <Route path="/Usuario" element={<Usuario/>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
