import '../hojas-de-estilo/NuevoReporte.css'
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import React from 'react';
import  Button from 'react-bootstrap/Button';
import Acordeon from '../componentes/Acordeon';
import BarraLateralUsuario from '../componentes/BarraLateralUsuario';
import { enviarReporteUsuario } from '../Funciones/consultas';


import {motion} from 'framer-motion';


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

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}>
    <main className="contenido-principal">
      <div>
        <BarraLateralUsuario></BarraLateralUsuario>
      </div>
      <Stack gap={3}>
        <div>
          <h2 className="text-center titulo">Generador de reporte</h2>
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