

import React from 'react';
import BarraLateral from '../componentes/BarraLateral';
import DynamicCard from '../componentes/DynamicCard';
import BarraSuperior from '../componentes/BarraSuperior';

import { DatePicker } from '@material-ui/pickers';
import { Container,Row,Col,Badge,Stack,Button, ListGroup,Modal} from 'react-bootstrap';
import { obtenerDatosAdministrador } from '../Funciones/consultas';
import {obtenerDatosReporte} from '../Funciones/consultas';
import {obtenerInfoProyectoDesdeReporte} from '../Funciones/consultas';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import "../hojas-de-estilo/Reporte.css";
import PrioridadButton from '../componentes/PrioridadButton';

const Reporte = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador

  const  [fechaSeleccionada, cambiarFechaSelecionada] = useState(new Date());

  const [reporte,setReporte] = useState(0);
  const [administrador, setAdministrador] = useState({});
  const [proyecto , setProyecto] = useState(0);

  const [showDepurador,setShowDepurador] = useState(false);
  const [showCalendario,setShowCalendario] = useState(false);

  const handleCloseDepurador = () => setShowDepurador(false);
  const handleShowDepurador = () => setShowDepurador(true);
  const handleCloseCalendario = () => setShowCalendario(false);
  const handleShowCalendario = () => setShowCalendario(true);
 
  const getReportesAdministrador = async (id) => {
    try {
      const reporte = await obtenerDatosReporte(id);
      setReporte(reporte);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getReportesAdministrador(id);
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      const datosAdministrador = await obtenerDatosAdministrador(administradorId);
      setAdministrador(datosAdministrador);
    };

    fetchData();
  }, [administradorId]);


  const proyectoId = reporte.id;

  useEffect(() => {
    const fetchData = async () => {
      const datosProyecto = await obtenerInfoProyectoDesdeReporte(proyectoId);
      setProyecto(datosProyecto);
    };

    fetchData();
  }, [proyectoId]);

  
  const formatoFecha = (fecha) => {
    const fechaFormaterada = fecha.toDate();

    return fechaFormaterada.toLocaleString();
  }


  const handleAdminButtonClick = () => {
    navigate('/administrador');
  };



  
  return (

    <motion.div
     initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>


      <div>
        <BarraSuperior nombre={administrador.nombre} />
      </div>
      <div>
        <BarraLateral></BarraLateral>
      </div>


      <Container fluid className=' contenedor-prueba1   mt-5 mb-5'>
        <Row>

          <Col  xs={12} md={5} id='columna-1' className='d-flex flex-column justify-content-center align-items-center ' >
              <h2 className=''><strong>Visualizador de </strong> <Badge pill bg='primary'> información </Badge></h2>

              <Container fluid className='mt-4 ms-3 me-3' >
                <ListGroup as="ul" id='listas'>
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><h5><strong>Proyecto</strong> </h5></Col>
                    <Col xs={12} md={10}><p className='parrafo'>{proyecto.nombre}</p></Col>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><p><strong>Usuario</strong> </p></Col>
                    <Col xs={12} md={10}><p className='parrafo'></p></Col>
                  </ListGroup.Item>
                    
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><p><strong>Fecha emision</strong> </p></Col>
                    <Col xs={12} md={10}><p className='parrafo'>{proyecto.fechaInicio ? formatoFecha(proyecto.fechaInicio) :  ""} </p></Col>
                  </ListGroup.Item>
                   
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><p><strong>Descripción</strong> </p></Col>
                    <Col xs={12} md={10}><p className='parrafo'>{proyecto.descripcion}</p></Col>
                  </ListGroup.Item>
                </ListGroup>

                <hr style={{height:'2px', background: 'black' , margin: '20px 0'}}></hr>


                <ListGroup as="ul" id='listas'>
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={12} ><h5><strong>Nuevo Reporte</strong> </h5></Col>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><p><strong>Prioridad</strong> </p></Col>
                    <Col xs={12} md={10}><p className='parrafo'>{reporte.prioridad}</p></Col>
                  </ListGroup.Item>
                    
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><p><strong>Fecha emision</strong> </p></Col>
                    <Col xs={12} md={10}><p className='parrafo'> {reporte.fechaEmision ? formatoFecha(reporte.fechaEmision) :  ""}</p></Col>
                  </ListGroup.Item>
                   
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={2} ><p><strong>Descripción</strong> </p></Col>
                    <Col xs={12} md={10}><p className='parrafo'>{reporte.descripcionUsuario}</p></Col>
                  </ListGroup.Item>
                </ListGroup>
              </Container>

          </Col>






          <Col xs={12} md={3}  id='columna-2' className='d-flex flex-column justify-content-center align-items-center '>
              <Stack gap={5} className="d-flex justify-content-center align-items-center">

                <Button variant="dark" onClick={handleShowDepurador} className='botones'>
                  Asignar Depurador
                </Button>

                <Modal show={showDepurador} onHide={handleCloseDepurador} animation={true} size= 'lg' centered>

                  <Modal.Header closeButton>
                    <Modal.Title>Seleccionar depurador</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Container className='cards-container'>
                        <DynamicCard />
                  </Container>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDepurador}>
                      Salir
                    </Button>
                    <Button variant="primary" onClick={handleCloseDepurador}>
                      Guardar cambios
                    </Button>
                </Modal.Footer>
              </Modal>


              

              <Button variant="dark" onClick={handleShowCalendario} className='botones'>
                  Asignar Fecha
                </Button>

                <Modal show={showCalendario} onHide={handleCloseCalendario} animation={true} size= 'lg' centered>

                  <Modal.Header closeButton>
                    <Modal.Title>Seleccionar calendario</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className='d-flex justify-content-center align-items-center'>
                    <DatePicker value = {fechaSeleccionada} onChange = {cambiarFechaSelecionada}></DatePicker>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCalendario}>
                      Salir
                    </Button>
                    <Button variant="primary" onClick={handleCloseCalendario}>
                      Guardar cambios
                    </Button>
                </Modal.Footer>
              </Modal>

               <PrioridadButton></PrioridadButton>

              </Stack>
          </Col>











          <Col xs={12} md={4} id='columna-3' className='d-flex flex-column justify-content-center  align-items-center;' >
            <h1 className='ss'><strong> Carta de  </strong> <Badge  bg='primary'> resumen </Badge></h1>

            <Container  fluid className='mt-4 '>
               <ListGroup as="ul" id='listas'>
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col  md={12} ><h5><strong>Asignación</strong> </h5></Col>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={3} ><p><strong>Depurador</strong> </p></Col>
                    <Col xs={12} md={9}><p className='parrafo'>.............</p></Col>
                  </ListGroup.Item>
                    
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={3} ><p><strong>Plazo de entrega</strong> </p></Col>
                    <Col xs={12} md={9}><p className='parrafo'>..........................</p></Col>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={3} ><p><strong>Prioridad</strong> </p></Col>
                    <Col xs={12} md={9}><p className='parrafo'>.................................</p></Col>
                  </ListGroup.Item>
                   
                  <ListGroup.Item as="li" className='d-flex justify-content-between  align-items-start' variant='dark'> 
                    <Col xs={12} md={3} ><p><strong>Descripción</strong> </p></Col>
                    <Col xs={12} md={9}><p className='parrafo'>.....................................................................................................</p></Col>
                  </ListGroup.Item>
                </ListGroup>
            </Container>

              <Button variant = "success" className=' botoness mt-4 ms-3 me-3 ' onClick={handleAdminButtonClick}>Enviar reporte</Button>
            
            
          </Col>


        </Row>
      </Container>

      


      </motion.div>

    
  );
};

export default Reporte;
