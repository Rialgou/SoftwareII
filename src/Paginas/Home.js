import React from 'react';
import { Container, Row, Col, Button ,Badge,Image, Stack} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Imagen from '../Imagenes/home.png'

import '../hojas-de-estilo/Home.css'



import {motion} from 'framer-motion';


const Home = () => {
  const navigate = useNavigate();

  const handleAdminButtonClick = () => {
    navigate('/administrador');
  };

  const handleUserButtonClick = () => {
    navigate('/usuario');
  };

  return (

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    >

    <Container  className='d-flex flex-column justify-content-center align-items-center home'>
      < Row className="flex-column justify-content-center align-items-center">

        <Col md="auto" className='mt-5 mb-5'>
          <h1 className="text-center mb-5 "><Badge bg="dark">BugFixer</Badge></h1>
          <p className='parrafo'>
            Bienvenido a <strong> BugFixer </strong>, la plataforma que facilita la comunicación entre usuarios y
            administradores para reportar, gestionar y solucionar problemas en el software. Nuestro
            objetivo es mejorar la calidad y eficiencia en la detección y corrección de errores,
            permitiendo un proceso de desarrollo de software más ágil y efectivo.
          </p>
        </Col>"
        
        <Col md="auto " xs={12} className='prubea mb-5'  >
          <Stack direction='horizontal' gap={5}>
          <Button variant= "primary"  className='botones-home' onClick={handleAdminButtonClick}>
            Administrador
          </Button>
          <Button variant="success"  className='botones-home' onClick={handleUserButtonClick}>
            Usuario
          </Button>
          </Stack>
        </Col>



        <Col md="auto" xs={12} className= 'mt-3'>
          <Image src={Imagen} alt='Imagen-Home' className='imagen' />
        </Col>

      </Row>
    </Container>

    </motion.div>
  );
};

export default Home;

