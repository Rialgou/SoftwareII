import ListGroup from 'react-bootstrap/ListGroup';
import '../hojas-de-estilo/Lista.css'

import { useState,useEffect } from 'react';

import {Link} from 'react-router-dom';

import { obtenerReportesAdministrador } from '../Funciones/consultas';

function Lista({estado}) {


 /* Ejemplo al consmir api de informacion reporte bug para rellnar lista  path??? */


  // Configuración hooks
  const [listaReportes, setListaReportes] = useState([]);

  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador

  const getReportesAdministrador = async (administradorId,estado) => {
    try {
      const reportes = await obtenerReportesAdministrador(administradorId,estado);
      setListaReportes(reportes);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getReportesAdministrador(administradorId, estado);
  }, []);
  

 

  const rutaReporte = (id) => {
    return `/administrador/${id}`;
  };


  return (
    <>
      {listaReportes.map(({prioridad,fechaEmision,descripcionUsuario,id} , index ) => (
        <ListGroup   key ={index} horizontal={"lg"} className="my-2 " id='contenedor-lista-reportes' >
          <ListGroup.Item  as={Link} to={rutaReporte(id)} className=" mt-2 mb-2 item" variant="warning" >
            Bug {index+1}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 mb-2 item"  variant="dark"  >
            {descripcionUsuario}
          </ListGroup.Item>
          <ListGroup.Item className=" mt-2 mb-2 item" variant="dark" >
            {fechaEmision.toDate().toLocaleString()}
          </ListGroup.Item>
          <ListGroup.Item className=" mt-2 mb-2 item" variant="dark" >
            {prioridad}
          </ListGroup.Item>
        </ListGroup>


      ))}
    </>
  );
      };

      export default Lista;

