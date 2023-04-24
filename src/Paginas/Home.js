import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAdminButtonClick = () => {
    navigate('/administrador');
  };

  const handleUserButtonClick = () => {
    navigate('/usuario');
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1 className="text-center mb-4">BugFixer</h1>
          <p>
            Bienvenido a BugFixer, la plataforma que facilita la comunicación entre usuarios y
            administradores para reportar, gestionar y solucionar problemas en el software. Nuestro
            objetivo es mejorar la calidad y eficiencia en la detección y corrección de errores,
            permitiendo un proceso de desarrollo de software más ágil y efectivo.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <Button variant="primary" onClick={handleAdminButtonClick}>
            Administrador
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="secondary" onClick={handleUserButtonClick}>
            Usuario
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

