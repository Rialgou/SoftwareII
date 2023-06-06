import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../Estilos/Filtrado.css';

function Filtrado({ setSelectedItem }) {
  const [toggleText, setToggleText] = useState("Ordenar por");

  const handleItemClick = (value) => {
    setSelectedItem(value);
    switch (value) {
      case 1:
        setToggleText("Fecha de emisión");
        break;
      case 2:
        setToggleText("Prioridad");
        break;
      case 3:
        setToggleText("Fecha estimada de término");
        break;
      default:
        setToggleText("Ordenar por");
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className='Filtro' variant="light" size='md' id="dropdown-basic">
        {toggleText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleItemClick(1)}>Fecha de emisión</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(2)}>Prioridad</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(3)}>Fecha estimada de término</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filtrado;
