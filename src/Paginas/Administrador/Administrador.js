import { Container, Row, Col } from 'react-bootstrap';
import { useState} from 'react';
import { motion } from 'framer-motion';

import { AdministradorProvider } from './Contextos/ContextoAdministrador';

import BarraOpciones from './Componentes/BarraOpciones';
import Opciones from './Componentes/Opciones';
import BarraSuperior from '..//../ComponentesGlobales/BarraSuperior';


import "./Estilos/Administrador.css";

function Home() {

  const [radioValue, setRadioValue] = useState('1');
  const [showCol2, setShowCol2] = useState(true); // Mostrar por defecto cuando se carga la página


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

      <AdministradorProvider>
        <BarraSuperior/>
      </AdministradorProvider>

      <Container fluid className="justify-content-center align-items-start pene1 mt-5">
        <Row className="d-flex flex-row justify-content-center align-items-start">
          <Col md={2} className="d-flex justify-content-start align-items-start mx-3">
            <BarraOpciones
              radioValue={radioValue}
              setRadioValue={setRadioValue}
              toggleOffcanvas={toggleOffcanvas}
              showCol={showCol2} 
            />
          </Col>
          {radioValue === '1' && (
            <Col md={showCol2 ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Bugs"} titulo2={"Pendientes"} estado={1} />
            </Col>
          )}
          {radioValue === '2' && (
           <Col md={showCol2 ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Bugs por"} titulo2={"Confirmar"} estado={2} reasignacion={false} />
            </Col>
          )}
          {radioValue === '3' && (
            <Col md={showCol2 ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Bugs en"} titulo2={"Proceso"} estado={3} />
            </Col>
          )}
          {radioValue === '4' && (
            <Col md={showCol2 ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Solicitudes de"} titulo2={"Reasignación"} estado={2} reasignacion={true}/>
            </Col>
          )}
          {radioValue === '5' && (
            <Col md={showCol2 ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Reportes"} titulo2={"Finales"} estado={4} />
            </Col>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;




