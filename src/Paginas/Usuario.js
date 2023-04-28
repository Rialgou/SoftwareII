import BarraLateral from '../componentes/BarraLateral';
import { Container} from 'react-bootstrap';
import ReportesUsuarios from '../componentes/ReportesUsuarios';

function Usuario() {
  
    return (
        <main>
            <Container className="d-flex  my-5 justify-content-center align-items-center ">
                <ReportesUsuarios></ReportesUsuarios>
            </Container>
            
        </main>
        
    );
  }
  
  export default Usuario;
  
  