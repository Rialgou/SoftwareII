import { Container, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { motion } from "framer-motion";

import BarraOpciones from "../Componentes/BarraOpciones";
import Opciones from "../Componentes/Opciones";
import BarraSuperiorAdministrador from "../Componentes/BarraSuperiorAdministrador";
import ContextoOpciones from "../Contextos/ContextoOpciones";

import "../Estilos/VistaPrincipal.css";

function Home() {
  const { showCol } = useContext(ContextoOpciones);

  const [radioValue, setRadioValue] = useState("1");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BarraSuperiorAdministrador VistaPrincipal={true} />

      <Container
        fluid
        className="justify-content-center align-items-start pene1 mt-5"
      >
        <Row className="d-flex flex-row justify-content-center align-items-start">
          <Col
            md={2}
            className="d-flex justify-content-start align-items-start mx-3"
          >
            <BarraOpciones
              radioValue={radioValue}
              setRadioValue={setRadioValue}
            />
          </Col>
          {radioValue === "1" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Bugs"} titulo2={"Pendientes"} estado={1} />
            </Col>
          )}
          {radioValue === "2" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Opciones
                titulo1={"Bugs por"}
                titulo2={"Confirmar"}
                estado={2}
                reasignacion={false}
              />
            </Col>
          )}
          {radioValue === "3" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Bugs en"} titulo2={"Proceso"} estado={3} />
            </Col>
          )}
          {radioValue === "4" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Opciones
                titulo1={"Solicitudes de"}
                titulo2={"Reasignación"}
                estado={2}
                reasignacion={true}
              />
            </Col>
          )}
          {radioValue === "5" && (
            <Col md={showCol ? 9 : 12} className="d-flex ms-3">
              <Opciones titulo1={"Reportes"} titulo2={"Finales"} estado={4} />
            </Col>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
