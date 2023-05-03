

import './App.css';

import BarraSuperior from './componentes/BarraSuperior';

import { useState,useEffect } from 'react';

import { obtenerDatosAdministrador } from './Funciones/consultas';

import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './Paginas/AnimatedRoutes';


import {motion} from 'framer-motion';



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
      <div className='App'>
        <Router>
          <BarraSuperior administrador={administrador} />
          <AnimatedRoutes />
        </Router>

      </div>
    );
  }


  
  export default App;