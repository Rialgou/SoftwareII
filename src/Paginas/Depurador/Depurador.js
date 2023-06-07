import { Container, Row, Col , Badge } from 'react-bootstrap';
import {motion} from 'framer-motion';
import { useState,useEffect } from 'react';

import RadioButtonDepurador from './Componentes/RadioButtonDepurador';
import BarraSuperior from '../../ComponentesGlobales/BarraSuperior';

import AcordeonBugsProceso from "./Componentes/AcordeonBugsProceso";
import AcordeonBugsNuevos from "./Componentes/AcordeonBugsNuevos";
import EsperaReasignacion from "./Componentes/EsperaReasignacion";

import './Estilos/Depurador.css';
import { obtenerDepurador } from '../../Funciones/consultas';

function Depurador() {
  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página
  const [depurador, setDepurador] = useState({});
  
  const depuradorId = "qjM7ExaUwt7Zv7ApAVHL";

  useEffect(() => {
    const fetchData = async () => {
    const datosDepurador = await obtenerDepurador(depuradorId);
    setDepurador(datosDepurador);
  };

  fetchData();
  }, [depuradorId]);

  return (
    
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}>

        <div><BarraSuperior nombre={depurador.nombre}/></div>
        
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
                <h2 className="titulo-bugs-proceso"><strong>Bugs en</strong> <Badge bg='primary'>Proceso</Badge></h2>
                <AcordeonBugsProceso/>
              </Container>
            </Col>
             )}
             {showCol && radioValue === '2' && (
              <Col md={8}  className="d-flex">
                <Container className='bugs-nuevos-container'>
                <h2 className="titulo-bugs-nuevos"><strong>Bugs </strong> <Badge bg='primary'>Nuevos</Badge></h2>
                <AcordeonBugsNuevos/>
                </Container>
              </Col>
            )}
            {showCol && radioValue === '3' && (
              <Col md={8}  className="d-flex">
                <Container className='bugs-nuevos-container'>
                <h2 className="titulo-bugs-nuevos"><strong>Espera </strong> <Badge bg='primary'>Reasignación</Badge></h2>
                <EsperaReasignacion/>
                </Container>
              </Col>
            )}
     
          </Row>
        </Container>

        </motion.div>
  );
}

export default Depurador;