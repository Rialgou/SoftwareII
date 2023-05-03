import { useNavigate } from 'react-router-dom';
import { Row, Col,Button,Container } from 'react-bootstrap';
import {motion} from 'framer-motion';

import BarraLateralUsuario from '../componentes/BarraLateralUsuario';
import ReportesUsuarios from '../componentes/ReportesUsuarios';


function Usuario() {
    const navigate = useNavigate();
    
    const handleNewReportClick = () => {
        navigate('/usuario/reporte');
    };
  
    return (
        <motion.div initial={{ opacity: 0 }}  animate={{ opacity: 1 }}exit={{ opacity: 0 }}transition={{ duration: 0.3 }}>
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
         </motion.div>
        
    );
  }
  
  export default Usuario;
  
  