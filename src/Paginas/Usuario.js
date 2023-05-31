import { useNavigate } from 'react-router-dom';
import { Stack, Badge, Button } from 'react-bootstrap';
import {motion} from 'framer-motion';
import {obtenerUsuario} from '../Funciones/consultas';
import { useState,useEffect } from 'react';

import BarraLateralUsuario from '../componentes/BarraLateralUsuario';
import ReportesUsuarios from '../componentes/ReportesUsuarios';
import BarraSuperior from '../componentes/BarraSuperior';


function Usuario() {
  const navigate = useNavigate();
  
  const handleNewReportClick = () => {
      navigate('/usuario/reporte');
  };


  const [usuario, setUsuario] = useState({});

  const usuarioId = "umlvgp6OkqUwNtDeh1aA"; // Reemplazar con el ID del administrador

  useEffect(() => {
    const fetchData = async () => {
    const datosUsuario = await obtenerUsuario(usuarioId);
    setUsuario(datosUsuario);
  };

  fetchData();
  }, [usuarioId]);


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
          <h2 className="titulo"><strong>Estado</strong> <Badge bg='primary'>Reportes</Badge></h2>
        </div>

        <div className="mx-auto acordeon">
          <ReportesUsuarios />
        </div>

        <div className="contenedor-boton">
          <Button className="boton-enviar" variant='dark' onClick={handleNewReportClick}>
            Crear nuevo reporte
          </Button>
        </div>
      </Stack>

    </main>
    </motion.div>
  );
}

export default Usuario;