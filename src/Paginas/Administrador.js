

import { Container, Row, Col , Badge } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import { obtenerDatosAdministrador } from '../Funciones/consultas';

import RadioButton from '../componentes/RadioButton'
import BarraLateral from '../componentes/BarraLateral';
import BugsPendientes from '../componentes/BugsPendientes';
import BarraSuperior from '../componentes/BarraSuperior';
import BugsEnProceso from '../componentes/BugsEnProceso';
import "../hojas-de-estilo/Administrador.css"
import SolicitudReasignacion from '../componentes/SolicitudReasignacion';
import RevisarReporteFinal from '../componentes/RevisarReporteFinal';


function Home() {

  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página

  const [administrador, setAdministrador] = useState({});

  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador

  useEffect(() => {
    const fetchData = async () => {
      const datosAdministrador = await obtenerDatosAdministrador(administradorId);
      setAdministrador(datosAdministrador);
    };

    fetchData();
  }, [administradorId]);


  
  return (
    
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}>

        <div><BarraSuperior nombre={administrador.nombre} /></div>

        <div><BarraLateral/></div>
        
        <Container  fluid className=" justify-content-center align-items-center pene1 mt-5 ">
          <Row  className="d-flex flex-row justify-content-center align-items-center">
            <Col md={4} className="d-flex justify-content-center align-items-end  mx-5 ">
                <RadioButton 
                  radioValue={radioValue}
                  setRadioValue={setRadioValue} 
                ></RadioButton>
            </Col>
            {showCol && radioValue === '1' && (
            <Col md={7}  className="d-flex ">
              <BugsPendientes
                titulo1={"Bugs"}
                titulo2={"Pendientes"}


              ></BugsPendientes>
            </Col>
             )}
             {showCol && radioValue === '2' && (
              <Col  md={7}  className='d-flex  '>
                <BugsEnProceso
                titulo1={"Bugs en"}
                titulo2={"Proceso"}
                >
                </BugsEnProceso>
              </Col>
            )}
            {showCol && radioValue === '3' && (
            <Col md={7}  className="d-flex ">
              <SolicitudReasignacion
                titulo1={"Solicitudes de"}
                titulo2={"Reasignación"}


              ></SolicitudReasignacion>
            </Col>
             )}
             {showCol && radioValue === '4' && (
            <Col md={7}  className="d-flex ">
              <RevisarReporteFinal
                titulo1={"Reportes"}
                titulo2={"Finales"}


              ></RevisarReporteFinal>
            </Col>
             )}
     
          </Row>
        </Container>

        </motion.div>
  );
}

export default Home;



