import React from 'react';
import { Container, Row, Col, Button ,Badge,Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Imagen from '../Imagenes/home.png'

import '../hojas-de-estilo/Home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleAdminButtonClick = () => {
    navigate('/administrador');
  };

  const handleUserButtonClick = () => {
    navigate('/usuario');
  };

  return (
    <Container className="home">
      <Row className="justify-content-md-center mt-5 ">
        <Col md="auto">
          <br></br>
          <h1 className="text-center mb-4 "><Badge bg="dark">BugFixer</Badge></h1>
          <p>
            Bienvenido a <strong> BugFixer </strong>, la plataforma que facilita la comunicación entre usuarios y
            administradores para reportar, gestionar y solucionar problemas en el software. Nuestro
            objetivo es mejorar la calidad y eficiencia en la detección y corrección de errores,
            permitiendo un proceso de desarrollo de software más ágil y efectivo.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5 ">
        <Col md="auto">
          <Button variant= "light" className='botones-0' onClick={handleAdminButtonClick}>
            Administrador
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="secondary" className='botones-0' onClick={handleUserButtonClick}>
            Usuario
          </Button>
        </Col>
      </Row>
      <br></br>
      <Row >
        <Col className="d-flex justify-content-center columna">
          <Image thumbnail  src={Imagen} className='imagen' />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

