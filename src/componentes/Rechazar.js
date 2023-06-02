import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../hojas-de-estilo/RechazoAcordeon.css";

function Rechazar() {
  const [show, setShow] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  
  const handleClose = () => {
    setShow(false);
    setTextareaValue(''); 
  };
  
  const handleShow = () => setShow(true);
  
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  
  const handleEnviarClick = () => {
    if (textareaValue.trim() !== '') 
      handleClose();
  };

  return (
    <>
      <Button variant="danger" className="boton-rechazo" onClick={handleShow}>
        Solicitar reasignación 
      </Button>

      <Modal centered show={show} onHide={handleClose} dialogClassName="modal-basic" contentClassName="modal-reasignacion">
        <Modal.Header closeButton>
          <Modal.Title>
            ¿Por qué estas solicitando una reasignación?
            <span role="img" aria-label="Emoticono Cara Pensativa"> 🤔</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="textarea-custom textarea-basic"
            placeholder="Ingrese las razones por las cuales está solicitando una reasignación del Bug"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleEnviarClick}
            disabled={textareaValue.trim() === ''}
          >
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Rechazar;
