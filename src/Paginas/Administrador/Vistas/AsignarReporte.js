import BarraSuperior from "../Componentes/BarraSuperiorAdministrador";
import DynamicCard from "../Componentes/DynamicCard";
import PrioridadButton from "../Componentes/PrioridadButton";
import Modales from "../Componentes/Modales";
import ContextoAdministrador from "../Contextos/ContextoAdministrador";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import {
  Container,
  Row,
  Col,
  Badge,
  Stack,
  Button,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { actualizarReporte } from "../../../Funciones/consultas";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../Estilos/AsignarReporte.css";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const Reporte = () => {
  let { reporte, proyecto, depuradores, usuario, SetIDReporte } = useContext(
    ContextoAdministrador
  );

  const navigate = useNavigate();

  const { id } = useParams();
  SetIDReporte(id);

  const timerRef = useRef(null);

  const [depuradorSeleccionado, setDepuradorSeleccionado] = useState(null);
  const [fechaSeleccionada, cambiarFechaSelecionada] = useState(null);
  const [prioridadSeleccionada, setPrioridadSeleccionada] = useState(null);
  const [descripcion, setDescripcion] = useState(null);

  const [showDepurador, setShowDepurador] = useState(false);
  const [showCalendario, setShowCalendario] = useState(false);
  const [showText, setShowText] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const handleCloseDepurador = () => setShowDepurador(false);
  const handleShowDepurador = () => setShowDepurador(true);
  const handleCloseCalendario = () => setShowCalendario(false);
  const handleShowCalendario = () => setShowCalendario(true);
  const handleCloseText = () => setShowText(false);
  const handleShowText = () => setShowText(true);

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

  const formatoFecha = (fecha) => {
    const fechaFormaterada = fecha.toDate();

    return fechaFormaterada.toLocaleString();
  };

  const handleAdminButtonClick = () => {
    navigate("/administrador");
  };

  const noCambios = () => {
    setDepuradorSeleccionado(null);
    handleCloseDepurador();
  };

  const convertirPrioridad = (prioridadSeleccionada) => {
    if (prioridadSeleccionada === "Alta") {
      return 3;
    } else if (prioridadSeleccionada === "Media") {
      return 2;
    } else if (prioridadSeleccionada === "Baja") {
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
        reporte.id,
        depuradorSeleccionado.id,
        descripcion,
        fechaSeleccionada,
        convertirPrioridad(prioridadSeleccionada)
      );

      if (actualizado) {
        console.log("Reporte actualizado correctamente");

        setModalShow2(true);
      } else {
        console.log("Error al actualizar el reporte");
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
      transition={{ duration: 0.3 }}
    >
      <BarraSuperior />

      <Modales
        show={modalShow}
        Title={"¡ Cuidado !"}
        h4={"Recordatorio"}
        p={
          "No olvides rellenar todos los campos obligatorios en la carta de resumen , son vitales para una correcta asignación."
        }
        onHide={() => setModalShow(false)}
      />

      <Modales
        show={modalShow2}
        Title={"¡ Logrado !"}
        p={"Se ha asignado el depurador de manera exitosa."}
        onHide={() => setModalShow2(false)}
      />

      <Container fluid className=" mt-5 mb-5">
        <Row>
          <Col
            xs={12}
            md={5}
            id="columna-1"
            className="d-flex flex-column justify-content-start align-items-center "
          >
            <h2 className="margen">
              <strong>Visualizador de </strong>{" "}
              <Badge pill bg="primary">
                información
              </Badge>
            </h2>

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

              <hr
                style={{ height: "2px", background: "black", margin: "20px 0" }}
              ></hr>

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
            </Container>
          </Col>

          <Col className="botones-medio" id="columna-2">
            <Stack
              gap={5}
              className="d-flex justify-content-center align-items-center"
            >
              <Button
                variant="dark"
                onClick={handleShowDepurador}
                className="botones"
              >
                Asignar Depurador
              </Button>

              <Modal
                show={showDepurador}
                onHide={handleCloseDepurador}
                animation={true}
                size="lg"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Seleccionar depurador</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container className="cards-container">
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

              <Button
                variant="dark"
                onClick={handleShowCalendario}
                className="botones"
              >
                Asignar Fecha
              </Button>

              <Modal
                show={showCalendario}
                onHide={handleCloseCalendario}
                animation={true}
                size="lg"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Seleccionar calendario</Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex justify-content-center align-items-center">
                  <div>
                    <DatePicker
                      className="pickers"
                      dateFormat="dd 'de' MMMM 'de' yyyy"
                      selected={fechaSeleccionada}
                      onChange={cambiarFechaSelecionada}
                      locale={es}
                    ></DatePicker>
                  </div>
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

              <PrioridadButton
                setPrioridadSeleccionada={setPrioridadSeleccionada}
              ></PrioridadButton>

              <Button
                variant="dark"
                onClick={handleShowText}
                className="botones"
              >
                Agregar Descripción
              </Button>

              <Modal
                show={showText}
                onHide={handleCloseText}
                animation={true}
                size="lg"
                centered
              >
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

          <Col xs={12} md={4}>
            <h1 className="my-4 sss">
              <strong className="margen"> Carta de </strong>{" "}
              <Badge pill bg="primary" className="margen">
                {" "}
                resumen{" "}
              </Badge>
            </h1>

            <Container fluid className="  contenedor-formulario">
              <ListGroup as="ul" id="listas">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col md={12}>
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
                  <Col xs={12} md={3}>
                    <p>
                      <strong>Depurador</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={9}>
                    <p
                      className={`parrafo ${
                        depuradorSeleccionado ? "" : "parrafo-placeholder"
                      }`}
                    >
                      {depuradorSeleccionado
                        ? depuradorSeleccionado.nombre
                        : "Escoger depurador"}
                    </p>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={2} md={3}>
                    <p>
                      <strong>Plazo de entrega</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={9}>
                    <p
                      className={`parrafo ${
                        fechaSeleccionada ? "" : "parrafo-placeholder"
                      }`}
                    >
                      {fechaSeleccionada
                        ? fechaSeleccionada.toString()
                        : "Escoger fecha de entrega"}
                    </p>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={3}>
                    <p>
                      <strong>Prioridad</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={9}>
                    <p
                      className={`parrafo ${
                        prioridadSeleccionada ? "" : "parrafo-placeholder"
                      }`}
                    >
                      {prioridadSeleccionada
                        ? prioridadSeleccionada
                        : "Escoger prioridad"}
                    </p>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start lista-item"
                  variant="dark"
                >
                  <Col xs={12} md={3}>
                    <p>
                      <strong>Descripción</strong>
                    </p>
                  </Col>
                  <Col xs={12} md={9}>
                    <p
                      className={`parrafo ${
                        descripcion ? "" : "parrafo-placeholder"
                      }`}
                    >
                      <pre className="descripcion-bug">
                        {descripcion ? descripcion : "Escoger descripción"}
                      </pre>
                    </p>
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            </Container>
            <div>
              <Button
                variant="danger"
                className=" botoness  mt-5 ms-5 "
                onClick={handleAdminButtonClick}
              >
                Rechazar reporte
              </Button>
              <Button
                variant="success"
                className=" botoness mt-5 ms-5 "
                onClick={enviarReporte}
              >
                Enviar reporte
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Reporte;
