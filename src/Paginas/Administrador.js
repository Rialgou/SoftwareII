import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { obtenerDatosAdministrador } from '../Funciones/consultas';

import BarraOpciones from '../componentes/BarraOpciones';
import BugsPendientes from '../componentes/BugsPendientes';
import BugsPorConfirmar from '../componentes/BugsPorConfirmar';
import BarraSuperior from '../componentes/BarraSuperior';
import BugsEnProceso from '../componentes/BugsEnProceso';
import SolicitudReasignacion from '../componentes/SolicitudReasignacion';
import RevisarReporteFinal from '../componentes/RevisarReporteFinal';

import "../hojas-de-estilo/Administrador.css"

function Home() {
  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página
  const [showCol2, setShowCol2] = useState(true); // Mostrar por defecto cuando se carga la página

  const [administrador, setAdministrador] = useState({});

  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador

  useEffect(() => {
    const fetchData = async () => {
      const datosAdministrador = await obtenerDatosAdministrador(administradorId);
      setAdministrador(datosAdministrador);
    };

    fetchData();
  }, [administradorId]);

  const toggleOffcanvas = () => {
    setShowCol2(!showCol2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div><BarraSuperior nombre={administrador.nombre} /></div>

      <Container fluid className="justify-content-center align-items-start pene1 mt-5">
        <Row className="d-flex flex-row justify-content-center align-items-start">
          <Col md={2} className={`d-flex justify-content-start align-items-start mx-3 ${showCol ? '' : 'd-none'}`}>
            <BarraOpciones
              radioValue={radioValue}
              setRadioValue={setRadioValue}
              toggleOffcanvas={toggleOffcanvas}
              showCol={showCol2} // Pass showCol2 as a prop
            />
          </Col>
          {showCol && radioValue === '1' && (
            <Col md={showCol2 ? 9 : 12} className="d-flex ms-3">
              <BugsPendientes titulo1={"Bugs"} titulo2={"Pendientes"} />
            </Col>
          )}
          {showCol && radioValue === '2' && (
            <Col md={9} className='d-flex'>
              <BugsPorConfirmar titulo1={"Bugs por"} titulo2={"Confirmar"} />
            </Col>
          )}
          {showCol && radioValue === '3' && (
            <Col md={9} className='d-flex'>
              <BugsEnProceso titulo1={"Bugs en"} titulo2={"Proceso"} />
            </Col>
          )}
          {showCol && radioValue === '4' && (
            <Col md={9} className="d-flex">
              <SolicitudReasignacion titulo1={"Solicitudes de"} titulo2={"Reasignación"} />
            </Col>
          )}
          {showCol && radioValue === '5' && (
            <Col md={9} className="d-flex">
              <RevisarReporteFinal titulo1={"Reportes"} titulo2={"Finales"} />
            </Col>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;




