
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

import { Container, Row, Col , Badge } from 'react-bootstrap';

import { useState,useEffect } from 'react';

import RadioButton from '../componentes/RadioButton'
import BarraLateral from '../componentes/BarraLateral';
import BugsPendientes from '../componentes/BugsPendientes';


import "../hojas-de-estilo/Administrador.css"





function Home() {

  const [radioValue, setRadioValue] = useState('1');
  const [showCol, setShowCol] = useState(true); // Mostrar por defecto cuando se carga la página




  
  return (

      <main>

        <div><BarraLateral/></div>
        
        <Container className="d-flex  my-5 justify-content-center align-items-center contenedorss">
          <Row className="mb-3 justify-content-center align-items-center">
            <Col md={4} className="columna-isquierda mx-5">
                <RadioButton 
                  radioValue={radioValue}
                  setRadioValue={setRadioValue} 
                ></RadioButton>
            </Col>
            {showCol && radioValue === '1' && (
            <Col className="mx-5  columna-derecha">
              <BugsPendientes
                titulo1={"Nuevos"}
                titulo2={"Bugs"}


              ></BugsPendientes>
            </Col>
             )}
             {showCol && radioValue === '2' && (
              <Col className='mx-5 columna-derecha'>
                <BugsPendientes
                titulo1={"Bugs"}
                titulo2={"Activos"}
                >
                </BugsPendientes>
              </Col>
            )}
          </Row>
        </Container>
      </main>
  );
}

export default Home;



