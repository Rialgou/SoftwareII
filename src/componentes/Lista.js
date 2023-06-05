import ListGroup from 'react-bootstrap/ListGroup';
import '../hojas-de-estilo/Lista.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerReportesAdministrador } from '../Funciones/consultas';

function Lista({ estado, reasignacion }) {
  const [listaReportes, setListaReportes] = useState([]);
  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador

  const getReportesAdministrador = async (administradorId) => {
    try {
      const reportes = await obtenerReportesAdministrador(administradorId, estado);
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
      {estado === 2 && reasignacion === false && (
      listaReportes.filter((list)=> list.reasignacion === false )
      .map((reporte,index) => (
        <ListGroup key={index} horizontal={"lg"} className="my-1" id='contenedor-lista-reportes'>
          <ListGroup.Item as={Link} to={rutaReporte(reporte.id)} className="mt-2 mb-2 item" variant="warning" style={{ flexBasis: '10.0%' }}>
            Bug {index + 1}
          </ListGroup.Item>
          <ListGroup.Item  className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '70.0%' }}>
           {reporte.asunto}
        </ListGroup.Item>
              <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '20.0%' }}>
            {reporte.fechaEmision.toDate().toLocaleString()}
          </ListGroup.Item>
        </ListGroup>
      )
      ))}
      {estado === 2 && reasignacion === true && (
      listaReportes.filter((list)=> list.reasignacion === true )
      .map((reporte,index) => (
        <ListGroup key={index} horizontal={"lg"} className="my-1" id='contenedor-lista-reportes'>
          <ListGroup.Item as={Link} to={rutaReporte(reporte.id)} className="mt-2 mb-2 item" variant="warning" style={{ flexBasis: '10.0%' }}>
            Bug {index + 1}
          </ListGroup.Item>
          <ListGroup.Item  className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '70.0%' }}>
           {reporte.asunto}
        </ListGroup.Item>
              <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '20.0%' }}>
            {reporte.fechaEmision.toDate().toLocaleString()}
          </ListGroup.Item>
        </ListGroup>
      )
      ))}   
      {estado !== 2 && (
        listaReportes.map((reporte, index) => (
        <ListGroup key={index} horizontal={"lg"} className="my-1" id='contenedor-lista-reportes'>
          <ListGroup.Item as={Link} to={rutaReporte(reporte.id)} className="mt-2 mb-2 item" variant="warning" style={{ flexBasis: '10.0%' }}>
            Bug {index + 1}
          </ListGroup.Item>
          <ListGroup.Item  className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '70.0%' }}>
           {reporte.asunto}
        </ListGroup.Item>
              <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '20.0%' }}>
            {reporte.fechaEmision.toDate().toLocaleString()}
          </ListGroup.Item>
        </ListGroup>
      )
      ))}
    </>
  );
}

export default Lista;


