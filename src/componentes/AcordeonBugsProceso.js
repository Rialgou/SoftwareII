import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { ButtonToolbar, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "../hojas-de-estilo/AcordeonBugsProceso.css";

function AcordeonBugsProceso() {
  const datos = [
    { nombre: 'proyecto 1', fecha1: 'fecha 1', fecha2: 'fecha 11', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 2', fecha1: 'fecha 2', fecha2: 'fecha 22', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 3', fecha1: 'fecha 3', fecha2: 'fecha 33', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 4', fecha1: 'fecha 4', fecha2: 'fecha 44', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 5', fecha1: 'fecha 5', fecha2: 'fecha 55', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const [descripcionReporte, setdescripcionReporte] = useState("");
  const [showAlertParcial, setShowAlertParcial] = useState(false);
  const [showAlertFinal, setShowAlertFinal] = useState(false);
  const [showAlertSinContenido, setShowAlertSinContenido] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const handleDescripcionReporte = (event) => {
    setdescripcionReporte(event.target.value);
  };

  const handleClickButtonParcial = () => {
    if (descripcionReporte.trim().length === 0) 
      setShowAlertSinContenido(true);
    else 
      setShowAlertParcial(true);
  };

  const handleClickButtonFinal = () => {
    if (descripcionReporte.trim().length === 0) 
      setShowAlertSinContenido(true);
    else 
      setShowAlertFinal(true);
  };

  const handleCloseAlertParcial = () => {
    setShowAlertParcial(false);
    setActiveItem(null);
    setdescripcionReporte('');
  };

  const handleCloseAlertFinal = () => {
    setShowAlertFinal(false);
    setActiveItem(null);
    setdescripcionReporte('');
  };

  const handleCloseAlertSinContenido = () => {
    setShowAlertSinContenido(false);
  };

  return (
    <>
      <Accordion className="acordeon-bugs-proceso" activeKey={activeItem} onSelect={handleItemClick}>
        {datos.map((item, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Card>
              <Accordion.Header>
                <div>
                  <span className="bug-info">
                    <span> Bug {index + 1}</span>
                    <span>Proyecto: {item.nombre}</span>
                    <span>{item.fecha1}-{item.fecha2}</span>
                    <span>Prioridad: {item.prioridad}</span>
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <strong className="descripcion-titulo">Descripción del Bug</strong> <br /> {item.descripcion}
                <textarea className="textarea-custom textarea-basic"
                  value={descripcionReporte}
                  onChange={handleDescripcionReporte}
                  placeholder="Ingrese los detalles del avance a enviar" />
                <ButtonToolbar className="botones-container">
                  <Button variant="secondary" className="boton-parcial" onClick={handleClickButtonParcial}>
                    Enviar reporte parcial
                  </Button>
                  <Button variant="primary" className="boton-final" onClick={handleClickButtonFinal}>
                    Enviar reporte final
                  </Button>
                </ButtonToolbar>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
      
      <Modal show={showAlertParcial} onHide={handleCloseAlertParcial} className="modal-basic">
          <Modal.Header closeButton>
            <Modal.Title>Reporte parcial enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¡El avance ha sido enviado con éxito!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAlertParcial}>
              Cerrar
            </Button>
          </Modal.Footer>
      </Modal>
      
      <Modal show={showAlertFinal} onHide={handleCloseAlertFinal} className="modal-basic">
          <Modal.Header closeButton>
            <Modal.Title>Reporte final enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¡El reporte final ha sido enviado con éxito!<br /> Ahora el administrador debe aprobarlo.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAlertFinal}>
              Cerrar
            </Button>
          </Modal.Footer>
      </Modal>

      <Modal show={showAlertSinContenido} onHide={handleCloseAlertSinContenido} className="modal-campo">
        <Modal.Header closeButton>
          <Modal.Title>Reporte no enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Por favor, ingrese los detalles del avance antes de continuar.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlertSinContenido}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
     </>
  );
}

export default AcordeonBugsProceso;