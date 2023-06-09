import Filtrado from "./Filtrado";
import Lista from "./Lista"

import { Badge,Container,Row,Col } from "react-bootstrap";

import React, { useState } from 'react';

import '../Estilos/Opciones.css';


const Opciones = ({titulo1,titulo2,estado,reasignacion}) => {

  const [selectedItem, setSelectedItem] = useState(1); // Estado para almacenar el elemento seleccionado



  return (
    <>
    
      <Container flex className="d-flex  flex-column justify-content-start align-items-start ">
        <Row >
          <Col className="mb-4 " >
          <h1 className="titulo" ><strong>{titulo1}</strong> <Badge bg='primary'>{titulo2}</Badge></h1>   
          </Col>
        </Row>
        <Row>
          <Col className="mb-5">
            <Filtrado 
            setSelectedItem={setSelectedItem}
            ></Filtrado>
          </Col>
        </Row>
        <Row className="w-100">
          <Col  className="col-Lista ">
            <Lista estado={estado} selectedItem={selectedItem} setSelectedItem={setSelectedItem} reasignacion={reasignacion !== undefined ? reasignacion : undefined} />
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default Opciones ;

