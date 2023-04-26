
import Filtrado from "./Filtrado";
import Lista from "./Lista"

import { Badge,Container,Row,Col } from "react-bootstrap";

import '../hojas-de-estilo/BugsPendientes.css';


const BugsPendientes = () => {

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" >
        <Col>
        <Col className="mb-3  ">
          <h2 className="titulo" ><strong>Nuevos</strong> <Badge bg='primary'>bugs</Badge></h2>   
        </Col>
        <Col className="mb-5 ">
          <Filtrado></Filtrado>
        </Col >
        <Col className="">
          <Lista></Lista>
        </Col>
        </Col>
      </Container>

    </>
  )
};

export default BugsPendientes ;