import ListGroup from 'react-bootstrap/ListGroup';
import '../hojas-de-estilo/Lista.css'

import { useNavigate } from 'react-router-dom';

import { useState,useEffect } from 'react';

import {Link} from 'react-router-dom';

import { obtenerReportesAdministrador } from '../Funciones/consultas';

function Lista({listaReportesAdministrador}) {

  const navigate = useNavigate();

  const handleReporte = () => {
    navigate('/historial-cuenta'); {/* Agregar ruta a administrador2 , consumir api  */}
  };

 /* Ejemplo al consmir api de informacion reporte bug para rellnar lista  path??? */


  // Configuración hooks
  const [listaReportes, setListaReportes] = useState([]);

  const administradorId = "DiCuM9PV5XFJJGZytGqT"; // Reemplazar con el ID del administrador

  const getReportesAdministrador = async (administradorId) => {
    try {
      const reportes = await obtenerReportesAdministrador(administradorId);
      setListaReportes(reportes);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getReportesAdministrador(administradorId);
  }, []);
  

 

  const rutaReporte = (id) => {
    return `/administrador/${id}`;
  };


  return (
    <>
      {listaReportes.map(({prioridad,fechaEmision,descripcionUsuario,id} , index ) => (
        <ListGroup border  key ={index} horizontal={"lg"} className="my-2 list-item-container"  >
          <ListGroup.Item  as={Link} to={rutaReporte(id)} className=" mt-2 mb-2 item" variant="warning" >
            Bug {index+1}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 mb-2 item"  variant="light"  >
            {descripcionUsuario}
          </ListGroup.Item>
          <ListGroup.Item className=" mt-2 mb-2 item" variant="light" >
            {fechaEmision.toDate().toLocaleString()}
          </ListGroup.Item>
          <ListGroup.Item className=" mt-2 mb-2 item" variant="light" >
            {prioridad}
          </ListGroup.Item>
        </ListGroup>


      ))}
    </>
  );
      };

      export default Lista;

