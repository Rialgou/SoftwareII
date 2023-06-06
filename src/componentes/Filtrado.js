import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Filtrado({ onSelectChange }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelectChange(value);
  };

  return (
    <Form.Select
      aria-label="Filtrado-basico"
      size="md"
      className="border border-dark shadow-sm filtrado"
      as="select"
      onChange={handleSelectChange}
    >
      <option value="1">Filtrado por fecha de asignación</option>
      <option value="2">Filtrado por nombre del depurador</option>
      <option value="3">Filtrado por prioridad</option>
    </Form.Select>
  );
}

export default Filtrado;
