import Filtrado from "./Filtrado";
import Lista from "./Lista"

import { Badge,Container,Row,Col } from "react-bootstrap";

import React, { useState } from 'react';

import '../Estilos/BugsPendientes.css'


const SolicitudReasignacion = ({titulo1,titulo2}) => {

  const [selectedItem, setSelectedItem] = useState(1); // Estado para almacenar el elemento seleccionado

  return (
    <>
    
      <Container flex className="d-flex  flex-column justify-content-start align-items-start ">
        <Row className="">
          <Col className="mb-4 " >
          <h1 className="titulo" ><strong>{titulo1}</strong> <Badge bg='primary'>{titulo2}</Badge></h1>   
          </Col>
        </Row>
        <Row className="">
          <Col className="mb-5 " >
            <Filtrado 
            setSelectedItem={setSelectedItem}
            ></Filtrado>
          </Col>
        </Row>
        <Row className="w-100">
          <Col  className="col-Lista ">
          <Lista estado = {2} reasignacion = {true}  selectedItem={selectedItem} setSelectedItem={setSelectedItem}></Lista>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default SolicitudReasignacion ;