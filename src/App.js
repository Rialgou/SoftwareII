import './App.css';

import BarraSuperior from './componentes/BarraSuperior';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState,useEffect } from 'react';

import Home from './Paginas/Home';
import ComoFunciona from './Paginas/ComoFunciona';
import Cuenta from './Paginas/Cuenta';
import Ajustes from './Paginas/Ajustes';
import SalirCuenta from './Paginas/SalirCuenta';
import AcercaDeNosotros from './Paginas/AcercaDeNosotros';
import Usuario from './Paginas/Usuario';
import Administrador from './Paginas/Administrador';
import Reporte from './Paginas/Reporte';
import NuevoReporte from './Paginas/NuevoReporte';

import { obtenerDatosAdministrador } from './Funciones/consultas';




function App() {

  const [administrador, setAdministrador] = useState({});

  const administradorId = "DiCuM9PV5XFJJGZytGqT"; // Reemplazar con el ID del administrador

  useEffect(() => {
    const fetchData = async () => {
      const datosAdministrador = await obtenerDatosAdministrador(administradorId);
      setAdministrador(datosAdministrador);
    };

    fetchData();
  }, [administradorId]);



  return (
    <div className="App">
      <Router>
        <div >
          <BarraSuperior administrador = {administrador}/>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/salir-cuenta" element={<SalirCuenta />} />
            <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
            <Route path="/administrador" element={<Administrador/>} />
            <Route path='/administrador/:id' element={<Reporte></Reporte>} />
            <Route path="/Usuario" element={<Usuario/>} />
            <Route path="/usuario/reporte" element= {<NuevoReporte></NuevoReporte>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;