import { Container, Row, Col , Badge } from 'react-bootstrap';
import {motion} from 'framer-motion';
import { useState,useEffect } from 'react';
import RadioButtonDepurador from '../componentes/RadioButtonDepurador'
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import AcordeonBugsProceso from "../componentes/AcordeonBugsProceso";
import AcordeonBugsNuevos from "../componentes/AcordeonBugsNuevos";

import "../hojas-de-estilo/Depurador.css"

function Depurador() {
  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página

  return (
    
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}>

        <div><BarraSuperior/></div>
        <div><BarraLateral/></div>
        
        <Container  fluid className=" justify-content-center align-items-center mt-5">
          <Row  className="d-flex flex-row justify-content-center align-items-center">
            <Col md={3} className="d-flex justify-content-center align-items-end  mx-5 ">
                <RadioButtonDepurador 
                  radioValue={radioValue}
                  setRadioValue={setRadioValue} 
                ></RadioButtonDepurador>
            </Col>
            {showCol && radioValue === '1' && (
            <Col md={8}  className="d-flex ">
              <Container className="bugs-proceso-container">
                <h2 className="titulo-bugs-proceso"><strong>Bugs en</strong> <Badge bg='primary'>proceso</Badge></h2>
                <AcordeonBugsProceso />
              </Container>
            </Col>
             )}
             {showCol && radioValue === '2' && (
              <Col md={8}  className="d-flex">
                <Container fluid className=" justify-content-center align-items-center mt-5">
                <h2 className="titulo-bugs-proceso"><strong>Bugs </strong> <Badge bg='primary'>Nuevos</Badge></h2>
                <AcordeonBugsNuevos/>
                
                </Container>
              </Col>
            )}
     
          </Row>
        </Container>

        </motion.div>
  );
}

export default Depurador;