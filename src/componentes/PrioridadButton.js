import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import "../hojas-de-estilo/PrioridadButton.css";

function PrioridadButton() {
  return (
    <Dropdown size="lg">
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="PrioridadButton"
      >
        Prioridad de Bug
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={function () {}} href="#/action-1">Alta</Dropdown.Item>
        <Dropdown.Item onClick={function () {}} href="#/action-2">Media</Dropdown.Item>
        <Dropdown.Item onClick={function () {}} href="#/action-3">Baja</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PrioridadButton;
