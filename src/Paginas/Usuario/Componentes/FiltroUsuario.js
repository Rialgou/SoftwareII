import React, { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "../Estilos/FiltradoUsuario.css";

function FiltroUsuario() {
  const [selectedItem, setSelectedItem] = useState(1); // Estado para almacenar el elemento seleccionado
  const [toggleText, setToggleText] = useState("Ordenar por");
  const handleItemClick = (value) => {
    setSelectedItem(value);
    switch (value) {
      case 1:
        setToggleText("Todos");
      break;
      case 2:
        setToggleText("Pendiente");
        break;
      case 3:
        setToggleText("En proceso");
        break;
      case 4:
        setToggleText("Completado");
        break;
      case 5:
        setToggleText("Rechazado");
        break;
      default:
        setToggleText("Ordenar por");
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        className="Filtro"
        variant="light"
        size="md"
        id="dropdown-basic"
      >
        {toggleText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleItemClick(1)}>
          Todos
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(2)}>
          Pendiente
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(3)}>
          En proceso
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(4)}>
          Completado
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick(5)}>
          Rechazado
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FiltroUsuario;