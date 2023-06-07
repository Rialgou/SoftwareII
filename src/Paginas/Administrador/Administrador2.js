import BarraSuperior from '../../ComponentesGlobales/BarraSuperior';

import DynamicCard from './Componentes/DynamicCard';
import PrioridadButton from './Componentes/PrioridadButton';
import Modales from './Componentes/Modales';

import { DatePicker } from '@material-ui/pickers';
import { Container,Row,Col,Badge,Stack,Button, ListGroup,Modal,Alert} from 'react-bootstrap';
import { obtenerDatosAdministrador } from '../../Funciones/consultas';
import {obtenerDatosReporte} from '../../Funciones/consultas';
import {obtenerInfoProyectoDesdeReporte} from '../../Funciones/consultas';
import {obtenerInformacionUsuario} from '../../Funciones/consultas';
import { obtenerDepuradoresDesdeProyecto } from '../../Funciones/consultas';
import { actualizarReporte } from '../../Funciones/consultas';
import { useParams } from 'react-router-dom';
import { useEffect, useState ,useRef } from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import "./Estilos/Administrador2.css";

const Reporte = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador
  const timerRef = useRef(null);


  const [reporte,setReporte] = useState(0);
  const [administrador, setAdministrador] = useState({});
  const [proyecto , setProyecto] = useState(0);
  const [depuradores,setDepuradores] = useState(0);
  const [usuario,setUsuario] = useState(0);

  const [depuradorSeleccionado, setDepuradorSeleccionado] = useState(null);
  const  [fechaSeleccionada, cambiarFechaSelecionada] = useState(null);
  const [prioridadSeleccionada, setPrioridadSeleccionada] = useState(null);
  const [descripcion, setDescripcion] = useState(null);

  const [showDepurador,setShowDepurador] = useState(false);
  const [showCalendario,setShowCalendario] = useState(false);
  const [showText,setShowText] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const handleCloseDepurador = () => setShowDepurador(false);
  const handleShowDepurador = () => setShowDepurador(true);
  const handleCloseCalendario = () => setShowCalendario(false);
  const handleShowCalendario = () => setShowCalendario(true);
  const handleCloseText = () => setShowText(false);
  const handleShowText = () => setShowText(true);
 
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
    timerRef.current = setTimeout(() => {
      setModalShow(false);
    }, 3000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [modalShow]);


 
  useEffect(() => {
    if (modalShow2 !== false) {
      timerRef.current = setTimeout(() => {
        setModalShow2(false);
        handleAdminButtonClick();
      }, 3000);
    }
  
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [modalShow2]);
  
  


  useEffect(() => {
    const fetchData = async () => {
      const datosAdministrador = await obtenerDatosAdministrador(administradorId);
      setAdministrador(datosAdministrador);
    };

    fetchData();
  }, [administradorId]);


  let reporteoId = reporte.id;

  useEffect(() => {
    const fetchData = async () => {
      const datosProyecto = await obtenerInfoProyectoDesdeReporte(reporteoId);
      setProyecto(datosProyecto);
    };

    fetchData();
  }, [reporteoId]);


  let proyectoid = proyecto.id;


  useEffect(() => {
    const fetchData = async () => {
      const listaDepuradores = await obtenerDepuradoresDesdeProyecto(proyectoid);
      setDepuradores(listaDepuradores);
    };

    fetchData();
  }, [proyectoid]);

  useEffect(() => {
    const fetchData = async () => {
      const usuario = await obtenerInformacionUsuario(proyectoid);
      setUsuario(usuario);
    };

    fetchData();
  }, [proyectoid]);

  
  const formatoFecha = (fecha) => {
    const fechaFormaterada = fecha.toDate();

    return fechaFormaterada.toLocaleString();
  }


  const handleAdminButtonClick = () => {
    navigate('/administrador');
  };


  const noCambios = () => {
    setDepuradorSeleccionado(null);
    handleCloseDepurador();

  };


  const convertirPrioridad = (prioridadSeleccionada) => {
    if (prioridadSeleccionada === 'Alta') {
      return 3;
    } else if (prioridadSeleccionada === 'Media') {
      return 2;
    } else if (prioridadSeleccionada === 'Baja') {
      return 1;
    } else {
      // Valor por defecto si no coincide con ninguna opción
      return 0;
    }
  };




const enviarReporte = async () => {

  if (
    depuradorSeleccionado !== null &&
    descripcion !== null &&
    fechaSeleccionada !== null &&
    prioridadSeleccionada !== null
  ) {
    // Llama a la función actualizarReporte y pasa los parámetros necesarios
    const actualizado = await actualizarReporte(
      reporteoId,
      depuradorSeleccionado.id,
      descripcion,
      fechaSeleccionada,
      convertirPrioridad(prioridadSeleccionada)
    );

    if (actualizado) {
      console.log('Reporte actualizado correctamente');
      
      setModalShow2(true);

    } else {
      console.log('Error al actualizar el reporte');
    }
  } else {
    
    setModalShow(true);

   
  }
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

      <Modales
        show={modalShow}
        Title={ "¡ Cuidado !"}
        h4 = {"Recordatorio"}
        p = {"No olvides rellenar todos los campos obligatorios en la carta de resumen , son vitales para poder enviar una correcta asignación"}

        onHide={() => setModalShow(false)}
      />

      <Modales
        show={modalShow2}
        Title={ "¡ Logrado !"}
        p = {"Su asigna miento se ha logrado de manera exitosa"}

        onHide={() => setModalShow2(false)}
      />


      <Container fluid className=' contenedor-prueba1   mt-5 mb-5'>
        
        <Row >

          <Col  xs={12} md={5} id='columna-1' className='d-flex flex-column justify-content-center align-items-center ' >
              <h2 className='sss'><strong className='margen'>Visualizador de </strong> <Badge pill bg='primary'> información </Badge></h2>

              <Container fluid className="mt-4 ms-5 me-3 contenedor-formulario">
  <ListGroup as="ul" id="listas">
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start lista-item"
      variant="dark"
    >
      <Col xs={12} md={2}>
        <h5>
          <strong>Proyecto</strong>
        </h5>
      </Col>
      <Col xs={12} md={10}>
        <p className="parrafo">{proyecto.nombre}</p>
      </Col>
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start lista-item"
      variant="dark"
    >
      <Col xs={12} md={2}>
        <p>
          <strong>Usuario</strong>
        </p>
      </Col>
      <Col xs={12} md={10}>
        <p className="parrafo">{usuario ? usuario.nombre : ""}</p>
      </Col>
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start lista-item"
      variant="dark"
    >
      <Col xs={12} md={2}>
        <p>
          <strong>Fecha emision</strong>
        </p>
      </Col>
      <Col xs={12} md={10}>
        <p className="parrafo">
          {proyecto.fechaInicio ? formatoFecha(proyecto.fechaInicio) : ""}
        </p>
      </Col>
    </ListGroup.Item>

    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start lista-item"
      variant="dark"
    >
      <Col xs={12} md={2}>
        <p>
          <strong>Descripción</strong>
        </p>
      </Col>
      <Col xs={12} md={10}>
        <p className="parrafo">{proyecto.descripcion}</p>
      </Col>
    </ListGroup.Item>
  </ListGroup>

                <hr style={{height:'2px', background: 'black' , margin: '20px 0'}}></hr>


                <ListGroup as="ul" id="listas">
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start lista-item"
    variant="dark"
  >
    <Col xs={12} md={12}>
      <h5>
        <strong>Nuevo Reporte</strong>
      </h5>
    </Col>
  </ListGroup.Item>

  

  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start lista-item"
    variant="dark"
  >
    <Col xs={12} md={2}>
      <p>
        <strong>Fecha emision</strong>
      </p>
    </Col>
    <Col xs={12} md={10}>
      <p className="parrafo">
        {reporte.fechaEmision ? formatoFecha(reporte.fechaEmision) : ""}
      </p>
    </Col>
  </ListGroup.Item>

  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start lista-item"
    variant="dark"
  >
    <Col xs={12} md={2}>
      <p>
        <strong>Descripción</strong>
      </p>
    </Col>
    <Col xs={12} md={10}>
      <div>
        <pre className="descripcion-bug">{reporte.descripcionUsuario}</pre>
      </div>
      {/* <p className="parrafo">{reporte.descripcionUsuario}</p> */}
    </Col>
  </ListGroup.Item>
</ListGroup>

              </Container>

          </Col>






          <Col className='botones-medio' id='columna-2'>
              <Stack gap={5} className="d-flex justify-content-center align-items-center">

                <Button variant="dark" onClick={handleShowDepurador} className='botones'>
                  Asignar Depurador
                </Button>

                <Modal show={showDepurador} onHide={handleCloseDepurador} animation={true} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>Seleccionar depurador</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Container className='cards-container'>
      <p>{console.log(depuradores)}</p>
      <DynamicCard
        listadeDepuradores={depuradores}
        depuradorSeleccionado={depuradorSeleccionado}
        setDepuradorSeleccionado={setDepuradorSeleccionado}
      />
    </Container>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={noCambios}>
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



              

              <PrioridadButton setPrioridadSeleccionada = {setPrioridadSeleccionada}></PrioridadButton>





              <Button variant="dark" onClick={handleShowText} className='botones'>
                  Agregar Descripción
                </Button>

                <Modal show={showText} onHide={handleCloseText} animation={true} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>Agregar descripción</Modal.Title>
  </Modal.Header>

  <Modal.Body className="d-flex justify-content-center align-items-center">
    <textarea
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      rows={3}
      className="form-control"
    />
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseText}>
      Salir
    </Button>
    <Button variant="primary" onClick={handleCloseText}>
      Guardar cambios
    </Button>
  </Modal.Footer>
</Modal>



              </Stack>
          </Col>











          <Col xs={12} md={4} >
            <h1 className='my-4 sss'><strong className='margen'> Carta de  </strong> <Badge pill bg='primary' className='margen'> resumen </Badge></h1>

            <Container fluid className="  contenedor-formulario">
    <ListGroup as="ul" id="listas">
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start lista-item" variant="dark">
        <Col md={12}>
          <h5><strong>Asignación</strong></h5>
        </Col>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start lista-item" variant="dark">
        <Col xs={12} md={1}>
          <p><strong>Depurador</strong></p>
        </Col>
        <Col xs={12} md={20}>
          <p className={`parrafo ${depuradorSeleccionado ? '' : 'parrafo-placeholder'}`}>
            {depuradorSeleccionado ? depuradorSeleccionado.nombre : "Escoger depurador"}
          </p>
        </Col>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start lista-item" variant="dark">
        <Col xs={12} md={1}>
          <p><strong>Plazo de entrega</strong></p>
        </Col>
        <Col xs={12} md={20}>
          <p className={`parrafo ${fechaSeleccionada ? '' : 'parrafo-placeholder'}`}>
            {fechaSeleccionada ? fechaSeleccionada.toString() : "Escoger fecha de entrega"}
          </p>
        </Col>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start lista-item" variant="dark">
        <Col xs={12} md={1}>
          <p><strong>Prioridad</strong></p>
        </Col>
        <Col xs={12} md={20}>
          <p className={`parrafo ${prioridadSeleccionada ? '' : 'parrafo-placeholder'}`}>
            {prioridadSeleccionada ? prioridadSeleccionada : "Escoger prioridad"}
          </p>
        </Col>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start lista-item" variant="dark">
        <Col xs={12} md={1}>
          <p><strong>Descripción</strong></p>
        </Col>
        <Col xs={12} md={20}>
          <p className={`parrafo ${descripcion ? '' : 'parrafo-placeholder'}`}>
            {descripcion ? descripcion : "Escoger descripción"}
          </p>
        </Col>
      </ListGroup.Item>
    </ListGroup>
</Container>
              <div>
              <Button variant = "danger" className=' botoness  mt-5 ms-5 '>Rechazar reporte</Button>
              <Button variant = "success" className=' botoness mt-5 ms-5 ' onClick={enviarReporte}>Enviar reporte</Button>
              </div>
          </Col>


        </Row>
      </Container>


      </motion.div>




    
  );
};

export default Reporte;
