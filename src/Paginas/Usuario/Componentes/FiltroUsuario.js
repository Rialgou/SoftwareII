import React, { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "../Estilos/FiltradoUsuario.css";

function FiltroUsuario() {


  return (
    <Dropdown>
      <Dropdown.Toggle
        className="Filtro"
        variant="light"
        size="md"
        id="dropdown-basic"
      >
        filtro de busqueda
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >
          Bugs Resueltos
        </Dropdown.Item>
        <Dropdown.Item >
          Bugs en Progreso
        </Dropdown.Item>
        <Dropdown.Item >
          Bugs Rechazados
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FiltroUsuario;