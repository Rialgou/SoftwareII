import Filtrado from "./Filtrado";
import Lista from "./Lista"

import { Badge,Container,Row,Col } from "react-bootstrap";



import '../Estilos/BugsPendientes.css';




const BugsPendientes = ({titulo1,titulo2}) => {

  return (
    <>
    
      <Container flex className="d-flex  flex-column justify-content-start align-items-start ">
        <Row >
          <Col className="mb-4" >
          <h1 className="titulo" ><strong>{titulo1}</strong> <Badge bg='primary'>{titulo2}</Badge></h1>   
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
            <Filtrado ></Filtrado>
          </Col>
        </Row>
        <Row className="w-100">
          <Col  className="col-Lista ">
          <Lista estado = {1} ></Lista>
          </Col>
        </Row>
      </Container>

    </>
  )
};

export default BugsPendientes ;

