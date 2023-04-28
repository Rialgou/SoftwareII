import BotonesProyectos from "./BotonesProyectos";
import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import '../hojas-de-estilo/Acordeon.css'

function Acordeon({ proyectoId, prioridadProyecto, descripcionProyecto }) {
    const [descripcionBug, setDescripcionBug] = useState("");
    const [prioridad, setPrioridad] = useState("");
  
    const handleDescripcionBug = (event) => {
      setDescripcionBug(event.target.value);
      descripcionProyecto(event.target.value);
    };

    const handlePriority = (value) => {
      setPrioridad(value);
      prioridadProyecto(value);
    };

    const handleProyectSelect = (value) => {
      proyectoId(value);
    };
  
    return (
        <Accordion defaultActiveKey={['-1']} alwaysOpen>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Seleccionar proyecto</Accordion.Header>
          <Accordion.Body>
            <BotonesProyectos proyectoSeleccionado={handleProyectSelect}/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Prioridad del proyecto</Accordion.Header>
          <Accordion.Body>
            <ButtonGroup>
              <Button variant={prioridad === "Baja" ? "success" : "outline-success"} onClick={() =>  handlePriority("Baja")}>Baja</Button>
              <Button variant={prioridad === "Media" ? "warning" : "outline-warning"} onClick={() =>  handlePriority("Media")}>Media</Button>
              <Button variant={prioridad === "Alta" ? "danger" : "outline-danger"} onClick={() =>  handlePriority("Alta")}>Alta</Button>
            </ButtonGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Descripción del bug</Accordion.Header>
          <Accordion.Body>
            <textarea className="caja-texto"
              value={descripcionBug}
              onChange={handleDescripcionBug}
              placeholder=" Ingrese descripción del bug"
            />
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    );
}

export default Acordeon;