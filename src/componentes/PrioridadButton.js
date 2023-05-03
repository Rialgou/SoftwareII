import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import "../hojas-de-estilo/PrioridadButton.css";
import "../hojas-de-estilo/Reporte.css";

function PrioridadButton() {
  return (
    <Dropdown >
      <Dropdown.Toggle
        variant="dark"
        className="botones"
      >
        Asignar Prioridad
      </Dropdown.Toggle >

      <Dropdown.Menu variant="dark">
        <Dropdown.Item  className = "casa" onClick={function () {}} href="#/action-1">Alta</Dropdown.Item>
        <Dropdown.Item className = "casa" onClick={function () {}} href="#/action-2">Media</Dropdown.Item>
        <Dropdown.Item className = "casa" onClick={function () {}} href="#/action-3">Baja</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PrioridadButton;
