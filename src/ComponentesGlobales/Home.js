import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { BsFillBugFill, BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDebButtonClick = () => {
    navigate("/depurador");
  };

  const handleAdminButtonClick = () => {
    navigate("/administrador");
  };

  const handleUserButtonClick = () => {
    navigate("/usuario");
  };

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col md={8} className="d-flex flex-column columna111">
          <Row style={{ flex: "10%" }}>
            <Col className="barraSuperiorXD">
              <Stack direction="horizontal" gap={5}>
                <div className="Logo">
                  <BsFillBugFill className="bugIcon" />
                  <span className="bugTextXD">BugFixer</span>
                </div>
                <div className="textossS">Para equipos</div>
                <div className="textossS">Para personas</div>
              </Stack>
            </Col>
          </Row>
          <Row style={{ flex: "55%" }}>
            <Col className="headerColo">
              <motion.h1
                className="headerTexto"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                }}
              >
                Soluciona tus errores junto a BugFixer
              </motion.h1>
            </Col>
          </Row>
          <Row style={{ flex: "20%" }}>
            <Col className="textColo">
              <p className="parrafooo">
                BugFixer es la solución perfecta para tus proyectos.
                Colaboración de clientes, administradores y depuradores de forma
                ágil y sencilla. Optimiza tu proceso de desarrollo y garantiza
                la calidad de tu proyecto
              </p>
            </Col>
          </Row>
          <Row style={{ flex: "15%" }}>
            <Col className="contenedor-iconooo">
              <BsArrowDown className="iconooo" />
            </Col>
          </Row>
        </Col>

        <Col md={4} className="columna222">
          <Stack direction="horizontal" gap={5}>
            <Button
              variant="outline-primary"
              className="botones-home"
              onClick={handleDebButtonClick}
            >
              Depurador
            </Button>
            <Button
              variant="outline-danger"
              className="botones-home"
              onClick={handleAdminButtonClick}
            >
              Administrador
            </Button>
            <Button
              variant="outline-success"
              className="botones-home"
              onClick={handleUserButtonClick}
            >
              Usuario
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
