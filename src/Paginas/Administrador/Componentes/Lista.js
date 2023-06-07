

import ListGroup from 'react-bootstrap/ListGroup';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerReportesAdministrador } from '../../../Funciones/consultas';
import { VscDebugStart } from 'react-icons/vsc';

import '../Estilos/Lista.css';

function Lista({ estado, reasignacion, selectedItem}) {

  const [listaReportes, setListaReportes] = useState([]);
  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador


  const getReportesAdministrador = async () => {
    try {
      const reportes = await obtenerReportesAdministrador(administradorId, estado,selectedItem);
      setListaReportes(reportes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReportesAdministrador();
  }, [administradorId,selectedItem]);

  const rutaReporte = (id) => {
    return `/administrador/${id}`;
  };

  return (
    <div className="lista-container">
      <div className="encabezado">
        <ListGroup horizontal={"lg"} className="my-2">
          <ListGroup.Item className="mt-2 mb-2 item encabezado-item" style={{ flexBasis: '10.0%' }}>
            Ingresar
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 mb-2 item encabezado-item" style={{ flexBasis: '60.0%' }}>
            Asunto
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 mb-2 item encabezado-item" style={{ flexBasis: '30.0%' }}>
            Fecha de emisión
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="contenido">

      {estado === 4  && (
          listaReportes
            .filter((list) => list.reasignacion === false)
            .map((reporte, index) => (
              <ListGroup key={index} horizontal={"lg"} className="my-2">
                <ListGroup.Item
                  as={Link}
                  to={rutaReporte(reporte.id)}
                  className="mt-2 mb-2 item ingresar"
                  id="probar"
                  variant="dark"
                  style={{
                    flexBasis: '10.0%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <VscDebugStart size={24} />
                </ListGroup.Item>
                <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '70.0%' }}>
                  <pre className='descripcion-bug'>{reporte.comentarioFinal}</pre>
                </ListGroup.Item>
                <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '20.0%' }}>
                  {reporte.fechaEmision.toDate().toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            ))
        )}

        {estado === 2 && reasignacion === false && (
          listaReportes
            .filter((list) => list.reasignacion === false)
            .map((reporte, index) => (
              <ListGroup key={index} horizontal={"lg"} className="my-2">
                <ListGroup.Item
                  as={Link}
                  to={rutaReporte(reporte.id)}
                  className="mt-2 mb-2 item ingresar"
                  id="probar"
                  variant="dark"
                  style={{
                    flexBasis: '10.0%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <VscDebugStart size={24} />
                </ListGroup.Item>
                <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '70.0%' }}>
                  {reporte.asunto}
                </ListGroup.Item>
                <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '20.0%' }}>
                  {reporte.fechaEmision.toDate().toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            ))
        )}

        {estado === 2 && reasignacion === true && (
          listaReportes
            .filter((list) => list.reasignacion === true)
            .map((reporte, index) => (
              <ListGroup key={index} horizontal={"lg"} className="my-2">
                <ListGroup.Item
                  as={Link}
                  to={rutaReporte(reporte.id)}
                  className="mt-2 mb-2 item ingresar"
                  id="probar"
                  variant="dark"
                  style={{
                    flexBasis: '10.0%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <VscDebugStart size={24} />
                </ListGroup.Item>
                <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '70.0%' }}>
                  <pre className='descripcion-bug'>{reporte.mensaje}</pre>
                </ListGroup.Item>
                <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '20.0%' }}>
                  {reporte.fechaEmision.toDate().toLocaleString()}
                </ListGroup.Item>
              </ListGroup>
            ))
        )}

        {estado !== 2 && estado !== 4 &&
          listaReportes.map((reporte, index) => (
            <ListGroup key={index} horizontal={"lg"} className="my-2">
              <ListGroup.Item
                as={Link}
                to={rutaReporte(reporte.id)}
                className="mt-2 mb-2 item ingresar"
                id="probar"
                variant="dark"
                style={{
                  flexBasis: '10.0%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <VscDebugStart size={24} />
              </ListGroup.Item>
              <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '60.0%' }}>
                {reporte.asunto}
              </ListGroup.Item>
              <ListGroup.Item className="mt-2 mb-2 item" variant="dark" style={{ flexBasis: '30.0%' }}>
                {reporte.fechaEmision.toDate().toLocaleString()}
              </ListGroup.Item>
            </ListGroup>
          ))}
      </div>
    </div>
  );
}

export default Lista;
