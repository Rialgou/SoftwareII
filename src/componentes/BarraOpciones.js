import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import RadioButton from '../componentes/RadioButton';

import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FcLock } from 'react-icons/fc';



import '../hojas-de-estilo/BarraOpciones.css';

function BarraOpciones({ radioValue, setRadioValue }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} autoFocus={false} className='boton'>
        <AiOutlineAlignLeft></AiOutlineAlignLeft>
      </Button>

      <Offcanvas show={show} onHide={handleClose}  backdrop={false} autoFocus={false} className="offcanvas-custom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
              <FcLock></FcLock> 
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <RadioButton radioValue={radioValue} setRadioValue={setRadioValue} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarraOpciones;

