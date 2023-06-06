import Filtrado from "./Filtrado";
import Lista from "./Lista"
import { useState } from 'react';

import { Badge,Container,Row,Col } from "react-bootstrap";

import '../Estilos/BugsPendientes.css';


const BugsEnProceso = ({titulo1,titulo2}) => {

  const [filtroValue, setFiltroValue] = useState("");



  const handleFilterChange = (value) => {
    // Haz lo que necesites con el valor seleccionado
    //console.log('value en bugs:', value);
    if(value<0 || value>3) value=1;
    
    setFiltroValue(value);
  };
  return (
    <>
    
      <Container flex className="d-flex  flex-column justify-content-start align-items-start ">
        <Row className="">
          <Col className="mb-3 " >
            <h1 className="titulo" >
              <strong>{titulo1}</strong> <Badge bg='primary'>{titulo2}</Badge>
            </h1>   
          </Col>
        </Row>
        <Row className="">
          <Col className="mb-5  w-100 " >
            <Filtrado onSelectChange={handleFilterChange}></Filtrado>
          </Col>
        </Row>
        <Row className="w-100">
          <Col  className="col-Lista ">
          <Lista estado = {3} filtroValue={filtroValue}></Lista>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default BugsEnProceso ;

