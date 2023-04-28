

import React from 'react';
import RadioButton from '../componentes/RadioButton'
import BarraLateral from '../componentes/BarraLateral';
import BugsPendientes from '../componentes/BugsPendientes';


import { Container, Row, Col , Badge } from 'react-bootstrap';

import { useState } from 'react';

import "../hojas-de-estilo/Administrador.css"

function Home() {

  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página


  return (

      <main>

        <div>
          <BarraLateral></BarraLateral>
        </div>
        
        <Container className="d-flex  my-5 justify-content-center align-items-center ">
          <Row className="mb-3 justify-content-center align-items-center">
            <Col className="">
                <RadioButton 
                  radioValue={radioValue}
                  setRadioValue={setRadioValue} 
                ></RadioButton>
            </Col>
            {showCol && radioValue === '1' && (
            <Col className="mx-5  columna-derecha">
              <BugsPendientes></BugsPendientes>
            </Col>
             )}
             {showCol && radioValue === '2' && (
              <Col className='mx-5  columna-derecha '>
                <h2>hola dasoijhdiuashuidhasuih </h2>
              </Col>
            )}
          </Row>
        </Container>
      </main>
  );
}

export default Home;


