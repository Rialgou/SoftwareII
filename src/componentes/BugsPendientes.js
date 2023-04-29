
import Filtrado from "./Filtrado";
import Lista from "./Lista"

import { Badge,Container,Row,Col } from "react-bootstrap";

import '../hojas-de-estilo/BugsPendientes.css';


const BugsPendientes = ({titulo1,titulo2,listaReportesAdministrador}) => {

  return (
    <>
    
      <Container className="d-flex  flex-column justify-content-start align-items-start contenedor-reportes">
        <Row className="w-100">
          <Col className="mb-3 w-100" >
          <h2 className="titulo" ><strong>{titulo1}</strong> <Badge bg='primary'>{titulo2}</Badge></h2>   
          </Col>
        </Row>
        <Row className="w-100">
          <Col className="mb-5  w-100 " >
          <Filtrado></Filtrado>
          </Col>
        </Row>
        <Row className="w-100">
          <Col  className="col-Lista w-100">
          <Lista listaReportesAdministrador={listaReportesAdministrador}></Lista>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default BugsPendientes ;

