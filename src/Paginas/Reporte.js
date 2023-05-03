

import React from 'react';
import BarraLateral from '../componentes/BarraLateral';
import DynamicCard from '../componentes/DynamicCard';
import { DatePicker } from '@material-ui/pickers';
import PrioridadButton from '../componentes/PrioridadButton';
import { useEffect, useState } from 'react';
import "../hojas-de-estilo/Reporte.css";

import { Container,Row,Col,Badge,Stack,Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import {motion} from 'framer-motion';

import {obtenerDatosReporte} from '../Funciones/consultas';

const Reporte = () => {

  const {id} = useParams();

  const  [fechaSeleccionada, cambiarFechaSelecionada] = useState(new Date());

  const [reporte,setReporte] = useState(0);


 
  const getReportesAdministrador = async (id) => {
    try {
      const reporte = await obtenerDatosReporte(id);
      setReporte(reporte);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log({id})
    getReportesAdministrador(id);
  }, []);
  
 
  
  return (

    <motion.div
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>

      <div>
        <BarraLateral></BarraLateral>
      </div>

      <Container  className="d-flex flex-column contenedorReporte justify-content-center align-items-center" > 
        <Row  className='d-flex filaReporte h-100 w-100 '>

          <Col  xs={6} className="d-flex   columnasReportes1 h-100 w-50 " >
            <Container className=' contenedor-isquierdo mx-3 mt-4 mb-4 '>
              <Row>
                <Col className='justify-content-center align-items-center mt-4 mx-2 mb-5'>
                  <h1> <Badge bg='dark'> Reporte {id} </Badge></h1>
                </Col>
              </Row>

              <Row>
                <Col className='mb-4 mx-5'>
                  <h2> <strong>Informacion del reporte  </strong></h2>
                </Col>
              </Row>

              <Row>
                <Col className=''>
                  <Container className='d-flex probar-contenedor h-100 w-50  '>
                    <Row>
                      <Col>
                        <h1>{reporte.estado}</h1>
                        <h2>{reporte.descripcionUsuario}          </h2>
                        <h3>  {reporte.prioridad}        </h3>
                        <h4>          </h4>
                        <h5>          </h5>

                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>     
          </Col>

          <Col xs={6} className="d-flex  columnasReportes2 h-100 w-50" >
            <Container className='d-flex flex-column contenedor-isquierdo mx-3 mt-4 mb-4'>

              <Row className='fila-botones '>
                <Col className='d-flex justify-content-center align-items-center mt-5 '>
                  <Stack direction='horizontal' gap={5}>
                    <div className = 'contiene'>
                    <div className = 'grupo'>
                    <label>Fecha de entrega</label>
                    <DatePicker value = {fechaSeleccionada} onChange = {cambiarFechaSelecionada}></DatePicker>  
                    </div>
                    </div>
                    <PrioridadButton></PrioridadButton>
                  </Stack>
                </Col>
              </Row>

              <Row>
                <Col>
                <Container className='d-flex justify-content-center mt-5 mb-3 contenedor-formulario' style={{ overflowY: 'auto', maxHeight: '50vh' }}>
                    <div className="cards-container">
                      <DynamicCard />
                    </div>
                  </Container>
                </Col>
              </Row>

              <Col className='' >
                <Row className='mt-5 d-flex justify-content-end align-items-end mx-1'>
                      <Button className="botones-stack" variant='dark' > Seleccionar Depurador </Button>
                </Row>
                <Row className='mt-5 d-flex justify-content-end align-items-end mx-1'>
                  <Button className="botones-stack" variant='success' > Enviar Bug </Button>
                </Row>
              </Col>

            </Container>
          </Col>
        </Row>
      </Container>


      </motion.div>

    
  );
};

export default Reporte;
