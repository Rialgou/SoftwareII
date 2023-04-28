import BarraLateralUsuario from '../componentes/BarraLateralUsuario';
import {Button, Container} from 'react-bootstrap';
import ReportesUsuarios from '../componentes/ReportesUsuarios';
import React from 'react';
import { Row, Col } from 'react-bootstrap';


function Usuario() {
  
    return (
        <main>
            <div>
                <BarraLateralUsuario></BarraLateralUsuario>
            </div>
            <Container className="d-flex  my-5 justify-content-center align-items-center ">
                <Row className="mb-3 justify-content-center align-items-center">
                    <ReportesUsuarios></ReportesUsuarios>
                    <Col className='' >
                        <Row className='mt-5 d-flex justify-content-end align-items-end mx-1'>
                            <Button className="botones-stack" variant='dark'>Enviar Reporte +</Button>
                        </Row>
                    </Col>
                </Row>    
            </Container>
        </main>
        
    );
  }
  
  export default Usuario;
  
  