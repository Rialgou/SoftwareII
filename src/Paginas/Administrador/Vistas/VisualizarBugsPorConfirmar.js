import BarraSuperior from "../Componentes/BarraSuperiorAdministrador";
import ContextoAdministrador from "../Contextos/ContextoAdministrador";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import {
  Container,
  Row,
  Col,
  Badge,
  ListGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";


import "../Estilos/AsignarReporte.css";
import "../Estilos/VisualizarReportesParciales.css"
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const Parcial = () => {
  let { reporte, proyecto, depuradores, usuario, SetIDReporte } = useContext(
    ContextoAdministrador
  );

  const { id } = useParams();
  SetIDReporte(id);

  const formatoFecha = (fecha) => {
    const fechaFormaterada = fecha.toDate();

    return fechaFormaterada.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BarraSuperior />

      <Container fluid className=" mt-5 mb-5">
        <Row>
          <Col
            xs={12}
            md={5}
            id="columna-1"
            className="d-flex flex-column justify-content-start align-items-center "
          >
            <Container fluid className="mt-4 ms-5 me-3 contenedor-formulario">
              <ListGroup as="ul" id="listas">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={12}>
                    <h5>
                      <strong>Reporte usuario</strong>
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
                      <strong>Fecha emisión</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">
                      {reporte.fechaEmision
                        ? formatoFecha(reporte.fechaEmision)
                        : ""}
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
                  <Col xs={12} md={10} className="parrafo">
                    <div>
                      <pre className="descripcion-bug">
                        {reporte.descripcionUsuario}
                      </pre>
                    </div>
                  </Col>
                </ListGroup.Item>
              </ListGroup>

              <hr
                style={{ height: "2px", background: "black", margin: "20px 0" }}
              ></hr>

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
                    <p className="parrafo">&nbsp;&nbsp;&nbsp;{proyecto.nombre}</p>
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
                      <strong>Fecha emisión</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={10}>
                    <p className="parrafo">
                      {proyecto.fechaInicio
                        ? formatoFecha(proyecto.fechaInicio)
                        : ""}
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
            </Container>
          </Col>

          <Col xs={12} md={7} className="d-flex flex-column justify-content-start align-items-center">
            <h2 className="margen text-center">
              <strong>Asignación en espera de  </strong>
              <Badge pill bg="primary">
                confirmación
              </Badge>
            </h2>
            <Container fluid className="mt-4 ms-md-3 contenedor-historial">
              <ListGroup as="ul" id="listas">
               
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start lista-item"
                      variant="dark"
                    >
                      <Col xs={12} md={5}>
                        <h5>
                          <strong>Asignación</strong>
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
                          <strong>Depurador</strong>
                        </p>
                      </Col>
                      <Col xs={12} md={10}>
                        <p className="parrafo"> Nombre depurador </p>
                      </Col>
                    </ListGroup.Item>

                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start lista-item"
                      variant="dark"
                    >
                      <Col xs={12} md={2}>
                        <p>
                          <strong>Entrega</strong>
                        </p>
                      </Col>
                      <Col xs={12} md={10}>
                        <p className="parrafo">
                          Fecha plazo de entrega
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
                          <strong>Prioridad</strong>
                        </p>
                      </Col>
                      <Col xs={12} md={10}>
                        <p className="parrafo">
                          Prioridad
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
                    
                    <Col xs={12} md={10} className="parrafo">
                      <div>
                        <pre className="descripcion-bug">
                          Descripción
                        </pre>
                      </div>
                    </Col>
                  </ListGroup.Item>
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Parcial;

