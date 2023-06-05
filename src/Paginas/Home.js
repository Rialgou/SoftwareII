import React from 'react';
import { Container, Row, Col, Button, Badge, Image, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Imagen from '../Imagenes/home.png';
import '../hojas-de-estilo/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleDebButtonClick = () => {
    navigate('/depurador');
  };

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
      <Container className='d-flex flex-column justify-content-center align-items-center home'>
        <Row className='flex-column justify-content-center align-items-center'>
          <Col md='auto' className='mt-5 mb-5'>
            <motion.h1
              className='text-center mb-5'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge bg='dark'>BugFixer</Badge>
            </motion.h1>
            <motion.p
              className='parrafo'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Bienvenido a <strong>BugFixer</strong>, la plataforma que facilita la comunicación entre usuarios y
              administradores para reportar, gestionar y solucionar problemas en el software. Nuestro objetivo es mejorar
              la calidad y eficiencia en la detección y corrección de errores, permitiendo un proceso de desarrollo de
              software más ágil y efectivo.
            </motion.p>
          </Col>

          <Col md='auto' xs={12} className='prubea mb-5'>
            <Stack direction='horizontal' gap={5}>
              <Button variant='danger' className='botones-home' onClick={handleDebButtonClick}>
                Depurador
              </Button>
              <Button variant='primary' className='botones-home' onClick={handleAdminButtonClick}>
                Administrador
              </Button>
              <Button variant='success' className='botones-home' onClick={handleUserButtonClick}>
                Usuario
              </Button>
            </Stack>
          </Col>

          <Col md='auto' xs={12} className='mt-3'>
            <motion.div
              className='imagen-container'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Image src={Imagen} alt='Imagen-Home' className='imagen' />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
