import React, {useState,useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import {getReportesUsuario} from '../Funciones/consultas';
import "../hojas-de-estilo/ReportesUsuarios.css"

const ReportesUsuarios = () => {

  // id del usuario estandar
  const usuarioId = "umlvgp6OkqUwNtDeh1aA";

  // configuracion hooks
  const [listaReportesUsuario, setListaReportesUsuario] =  useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const reportesUsuario = await getReportesUsuario(usuarioId);
      setListaReportesUsuario(reportesUsuario);
    };

    fetchData();
  }, []);

  return (
    <>
      <Accordion alwaysOpen>
        {listaReportesUsuario.map((list, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Card>
              <Accordion.Header>
                <div>
                  <span className="bug-info">
                    <span> Bug {index + 1} </span>
                    <span> Título: {list.asunto}</span>
                  </span>
                </div>
              </Accordion.Header>

              <Accordion.Body>
                <strong className="descripcion-titulo">Proyecto: </strong><span>{"Proyecto"}</span>
                <br/>
                <strong className="descripcion-titulo">Estado del reporte: </strong>
                {list.estado === -1 && <span>Rechazado</span>}
                {list.estado === 1 && <span>Pendiente</span>}
                {list.estado === 2 && <span>En proceso</span>}
                {list.estado === 3 && <span>Terminado</span>}

                <div>
                  <strong className="descripcion-titulo">Fecha de emisión del reporte: </strong>
                  <span>{list.fechaEmision.toDate().toLocaleString()}</span>
                  <br/>
                  <strong className="descripcion-titulo">Fecha estimada  de termino: </strong>
                  {list.fechaEstimadaTermino ? <span>{list.fechaEstimadaTermino.toDate().toLocaleString()}</span> : <span>Por determinar</span>}
                  <br/>
                  <br/>
                  <strong className="descripcion-titulo">Descripción del Bug: </strong>
                  <span>{list.descripcionUsuario}</span>
                </div>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion> 
    </> 
  )
}

export default ReportesUsuarios;