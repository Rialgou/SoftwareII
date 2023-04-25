

import '../App.css';

import Lista from '../componentes/Lista';
import RadioButton from '../componentes/RadioButton'
import Filtrado  from '../componentes/Filtrado';
import BarraLateral from '../componentes/BarraLateral';


import { Container, Row, Col , Badge } from 'react-bootstrap';

import { useState } from 'react';

function Home() {

  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página


  return (

      <main>
        <div>
          <BarraLateral></BarraLateral>
        </div>
        
        <Container>
          <Row className="fila-principal">
            <Col className="columna-1">
              <div className="contenedor-centered">
                <RadioButton 
                  radioValue={radioValue}
                  setRadioValue={setRadioValue} 
                ></RadioButton>
              </div>
            </Col>
            {showCol && radioValue === '1' && (
            <Col className="columna-2">
              <div className='contenedor-columna-2'>
                <h2 className="titulo" >Nuevos <Badge bg='primary'>bugs</Badge></h2>
                <br></br>
                <div className="contenedor-boton">
                 <Filtrado></Filtrado>
                </div>
                <br></br>
                  <div className="contenedor-lista">
                    <Lista></Lista>
                  </div>
              </div>
            </Col>
             )}
          </Row>
        </Container>
      </main>
  );
}

export default Home;


