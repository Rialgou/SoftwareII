import "../hojas-de-estilo/Filtrado.css";
import React from 'react';
import Form from 'react-bootstrap/Form';

function Filtrado() {
    return (
      <Form.Select aria-label="Filtrado-basico" size="sm" className="rounded-pill border border-dark shadow-sm filtrado" >
        <option value="1">Filtrado por fecha de asignación</option>
        <option value="2">Filtrado por nombre del depurador</option>
        <option value="3">Filtrado por prioridad </option>
      </Form.Select>
    );
  }
  
  export default Filtrado;
