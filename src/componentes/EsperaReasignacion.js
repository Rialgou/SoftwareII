import React, { useState,useEffect } from 'react';
import { aceptarBug, getReportesDepurador } from '../Funciones/consultas';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import "../hojas-de-estilo/AcordeonBugsNuevos.css";
import Rechazar from '../componentes/Rechazar';
import { Navigate, useNavigate } from 'react-router-dom';

function EsperaReasignacion() {
  const [listaReportes, setListaReportes] = useState([]);
  const depuradorId = "qjM7ExaUwt7Zv7ApAVHL";

  const ReportesDepurador = async()=>{
      const reportes = await getReportesDepurador(depuradorId,2);
      setListaReportes(reportes);
      console.log(listaReportes);
  }
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

 
  useEffect( () => {
    ReportesDepurador();
  },[]);
  return (
    <>
      <Accordion className="acordeon-bugs-nuevos" activeKey={activeItem} onSelect={handleItemClick}>
          {listaReportes.filter((list)=> (list.reasignacion === true))
          .map((list, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Card>
              <Accordion.Header>
                <div>
                  <span className="bug-info">
                    <span> Bug {index + 1}</span>
                    <span>Proyecto: {list.nombreProyecto}</span>
                    <span>{list.fechaEmision.toDate().toLocaleString()}-{list.fechaEstimadaTermino ? <span>{list.fechaEstimadaTermino.toDate().toLocaleString()}</span> : <span>Por determinar</span>}</span>
                    <span>
                      {list.prioridad === 1 && <span>Prioridad: Baja</span>}
                      {list.prioridad === 2 && <span>Prioridad: Media</span>}
                      {list.prioridad === 3 && <span>Prioridad: Alta</span>}
                    </span>
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <strong className="descripcion-titulo">Descripción del Bug</strong> <br /> {list.descripcionAdministrador}
                <br/>
              </Accordion.Body>
              
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}

export default EsperaReasignacion;