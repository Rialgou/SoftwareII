// BarraOpciones component
import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import RadioButton from '../componentes/RadioButton';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FcLock } from 'react-icons/fc';
import '../hojas-de-estilo/BarraOpciones.css';

function BarraOpciones({ radioValue, setRadioValue, toggleOffcanvas, showCol }) {
  const handleClose = () => {
    toggleOffcanvas(); // Call the toggleOffcanvas function to update showCol
  };

  const handleShow = () => {
    toggleOffcanvas(); // Call the toggleOffcanvas function to update showCol
  };

  return (
    <>
      <div className="position-fixed top-0 start-0">
        <Button variant="dark" onClick={handleShow} autoFocus={false} className="boton">
          <AiOutlineAlignLeft />
        </Button>

        <Offcanvas show={showCol} onHide={handleClose} backdrop={false} autoFocus={false} className="offcanvas-custom">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <FcLock />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <RadioButton radioValue={radioValue} setRadioValue={setRadioValue} />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default BarraOpciones;

