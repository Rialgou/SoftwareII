import { useNavigate } from 'react-router-dom';
import BarraLateralUsuario from '../componentes/BarraLateralUsuario';
import ReportesUsuarios from '../componentes/ReportesUsuarios';
import { Row, Col,Button,Container } from 'react-bootstrap';


function Usuario() {
    const navigate = useNavigate();
    
    const handleNewReportClick = () => {
        navigate('/usuario/reporte');
    };
  
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
                            <Button className="botones-stack" variant='dark' onClick={handleNewReportClick}>Enviar Reporte +</Button>
                        </Row>
                    </Col>
                </Row>    
            </Container>
        </main>
        
    );
  }
  
  export default Usuario;
  
  