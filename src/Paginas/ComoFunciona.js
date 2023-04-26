import React, { useState } from 'react';
import { Container, Row, Col ,Badge } from 'react-bootstrap';
import Carrusel from '../componentes/Carrusel';

import '../hojas-de-estilo/Home.css'

const ComoFunciona = () => {

  const [index, setIndex] = useState(0);

  let contenido;

  switch (index) {
    case 0:
      contenido = <Container className='informacion'>
                    <Row>
                      <Col>
                        <h3>duhasduhas </h3>
                        <h4>dasidjhasiodsaidas</h4>
                        <h5>dioashdioashduiahudahsuiads</h5>
                        <h6>daioshduiashdiuashuidashiudhasiudhas</h6>
                      </Col>
                    </Row>
                  </Container>
          break;

    case 1:
      contenido = <Container className='informacion'>
                    <Row>
                      <Col>
                        <h3>uhdsauds </h3>
                        <h4>dasiohjdiouashduiashuidsa</h4>
                        <h5>dioashdiusahduiashduiahsuidhasdas</h5>
                        <h6>dioasjdioasjdioasjdioasjiodjasoidjoiasjdioas</h6>
                      </Col>
                    </Row>
                  </Container>
          break;

     case 2:
      contenido = <Container className='informacion'>
                    <Row>
                      <Col>
                        <h3>diuashdu </h3>
                        <h4>dioadioashdiuoashduiashuidhasuidas</h4>
                        <h5>dioashdiuashduiashiudashuidhasuihduiashiudas</h5>
                        <h6>dioashjdioashiuodhasiudhasiuhduiashiudhasiudhiuashd</h6>
                      </Col>
                    </Row>
                  </Container>

      default:
        {/* implementar alerta */}
  }


  return (
    <>
      <Container>
      <Col>

      {/*mt-5 mb-3 */}

      <Row className='mt-5 mb-4 '>
        <div>
          <h1> Aprende a utilizar <Badge bg='dark'> BugFixer </Badge>  </h1>
        </div>
      </Row>


      <Row>  
      <Container>
        <Row>
          <Col className='casa mx-3"'>
            <Carrusel index={index} setIndex={setIndex} />
           </Col>
            <Col className='casa mx-5'>
              {contenido}
            </Col>
          </Row>
        </Container>
      </Row>
      </Col>
      </Container>
    </>
  );
};

export default ComoFunciona;

