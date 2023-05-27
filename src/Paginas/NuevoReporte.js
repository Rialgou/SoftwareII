import React from 'react';
import Button from 'react-bootstrap/Button';
import Acordeon from '../componentes/Acordeon';
import BarraLateralUsuario from '../componentes/BarraLateralUsuario';
import BarraSuperior from '../componentes/BarraSuperior';

import { Stack, Badge } from 'react-bootstrap';
import { enviarReporteUsuario } from '../Funciones/consultas';
import {motion} from 'framer-motion';
import {obtenerUsuario} from '../Funciones/consultas';
import { useState,useEffect } from 'react';

import '../hojas-de-estilo/NuevoReporte.css'


function NuevoReporte() {
  const [datosReporte, setDatosReporte] = useState({
    proyecto: '',
    prioridad: '',
    descripcion: ''
  });

  const handleNewReportClick = async () => {
    console.log(datosReporte);
  
    if (datosReporte.proyecto.trim().length === 0 || datosReporte.prioridad.trim().length === 0 || datosReporte.descripcion.trim().length === 0) {
      console.log('No enviar data');
      alert('Tienes que llenar todos los campos');
      return;
    }

    else {
      console.log('Enviar data');
      await enviarReporteUsuario(datosReporte);
    } 
  };

  const handleProyect = (proyecto) => {
    console.log(`NuevoReporte botón seleccionado: ${proyecto}`);
    setDatosReporte(prevState => ({...prevState, proyecto}));
  };

  const handlePriority = (prioridad) => {
    console.log(`NuevoReporte prioridad seleccionado: ${prioridad}`);
    setDatosReporte(prevState => ({...prevState, prioridad}));
  };

  const handleDescripcion = (descripcion) => {
    console.log(`NuevoReporte descripción: ${descripcion}`);
    setDatosReporte(prevState => ({...prevState, descripcion}));
  };


  const [usuario, setUsuario] = useState({});

  const usuarioId = "umlvgp6OkqUwNtDeh1aA"; // Reemplazar con el ID del administrador

  useEffect(() => {
    const fetchData = async () => {
      const datosUsuario = await obtenerUsuario(usuarioId);
      setUsuario(datosUsuario);
    };

  fetchData();
  }, []);


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}>
    <main className="contenido-principal">
      <div>
        <BarraSuperior nombre={usuario.nombre}></BarraSuperior>
      </div>
      <div>
        <BarraLateralUsuario></BarraLateralUsuario>
      </div>
      <Stack gap={3}>
        <div className="text-center">
          <h2 className="titulo"><strong>Generador de</strong> <Badge bg='primary'>reporte</Badge></h2>
        </div>

        <div className="mx-auto acordeon">
          <Acordeon 
            proyectoId={handleProyect} 
            prioridadProyecto={handlePriority} 
            descripcionProyecto={handleDescripcion}
            />
        </div>

        <div className="contenedor-boton">
          <Button variant="dark" className="boton-enviar" onClick={handleNewReportClick}>
            Enviar reporte
          </Button>
        </div>
      </Stack>
    </main>
    </motion.div>
  );
}

export default NuevoReporte;