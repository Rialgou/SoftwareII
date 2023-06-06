import Filtrado from "./Filtrado";
import Lista from "./Lista"

import { Badge,Container,Row,Col } from "react-bootstrap";

import '../Estilos/BugsPendientes.css'


const RevisarReporteFinal = ({titulo1,titulo2}) => {

  return (
    <>
    
      <Container flex className="d-flex  flex-column justify-content-start align-items-start ">
        <Row className="">
          <Col className="mb-3 " >
          <h1 className="titulo" ><strong>{titulo1}</strong> <Badge bg='primary'>{titulo2}</Badge></h1>   
          </Col>
        </Row>
        <Row className="">
          <Col className="mb-5  w-100 " >
          {/*<Filtrado></Filtrado>*/}
          </Col>
        </Row>
        <Row className="w-100">
          <Col  className="col-Lista ">
          <Lista estado = {4} ></Lista>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default RevisarReporteFinal ;