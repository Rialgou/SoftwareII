import {ButtonGroup, Container, Row, Col,ToggleButton } from 'react-bootstrap';
import '../hojas-de-estilo/RadioButton.css';


function RadioButton({radioValue,setRadioValue}) {


  const radios = [
    { name: 'Bugs pendientes', value: '1' },
    { name: 'Bugs por confirmar',value: '2' },
    { name: 'Bugs en proceso', value: '3' },
    { name: 'Solicitudes de reasignación', value: '4' },
    { name: 'Reportes finales', value: '5' },
    { name: 'Lista depuradores', value: '6' },
    { name: 'Lista de clientes', value: '7' },
    { name: 'Lista proyectos', value: '8' },
  ];

  return (
    <Container  className="d-flex justify-content-center align-items-center contenedor-botones">
      <Row className="justify-content-center">
        <Col> 
          <ButtonGroup vertical>
          {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-dark"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value)}
            }
            className="botones my-4"
            style={{ flex: 1}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      
          </ButtonGroup>

        </Col>
      </Row>
    </Container>
  );
}

export default RadioButton;