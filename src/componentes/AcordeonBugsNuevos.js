 import React, { useState,useEffect } from 'react';
import { getReportesDepurador } from '../Funciones/consultas';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import "../hojas-de-estilo/AcordeonBugsNuevos.css";
import Rechazar from '../componentes/Rechazar';

function AcordeonBugsNuevos() {

  const [listaReportes, setListaReportes] = useState([]);
  const depuradorId = "qjM7ExaUwt7Zv7ApAVHL";

  const ReportesDepurador = async()=>{
      const reportes = await getReportesDepurador(depuradorId,1);
      setListaReportes(reportes);
      console.log(listaReportes);
  }

  useEffect( () => {
    ReportesDepurador();
  },[]);

  const [activeItem, setActiveItem] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const handleAceptarBug = () => {
    setShowModal(true);
  };  

  return (
    <>
      <Accordion className="acordeon-bugs-nuevos" activeKey={activeItem} onSelect={handleItemClick}>
        {listaReportes.map((list, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Card>
              <Accordion.Header>
                <div>
                  <span className="bug-info">
                    <span> Bug {index + 1}</span>
                    <span>Proyecto: {list.nombreProyecto}</span>
                    <span>{list.fechaEmision.toDate().toLocaleString()}-{list.fechaEstimadaTermino ? <span>{list.fechaEstimadaTermino.toDate().toLocaleString()}</span> : <span>Por determinar</span>}</span>
                    <span>Prioridad: {list.prioridad}</span>
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <strong className="descripcion-titulo">Descripción del Bug</strong> <br /> {list.descripcionAdministrador}
                <br/>
                <div>
                  <Button variant="success" className="boton-aceptar" onClick={handleAceptarBug}>
                    Aceptar Bug
                  </Button>
                <Rechazar className="rechazo-lugar"></Rechazar>
                </div>
              </Accordion.Body>
              
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal centered className="modal-basic" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Bug aceptado
            <span role="img" aria-label="Emoticono Sonriente"> 😊</span>
            <span role="img" aria-label="Emoticono Pulgar Arriba">👍</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        ¡Es tu momento para brillar! Registra tus avances parciales y demuestra tu habilidad resolviendo este desafío. ¡Cada paso cuenta! ¡No te rindas y mantén la motivación alta! ¡Tú puedes lograrlo!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default AcordeonBugsNuevos;