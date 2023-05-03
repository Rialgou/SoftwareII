import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap'

import '../hojas-de-estilo/DynamicCard.css'

function DynamicCard() {
  const data = [
    {
      border: 'primary',
      header: 'depurador 1',
      title: 'Jose Toledo',
      content: "Informacion relevante del depurador"
    },
    {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },
      {
        border: 'primary',
        header: 'depurador x',
        title: 'Nombre',
        content: "Informacion relevante del depurador"
      },

  ];

  return (
    <>
      {data.map((cardData, index) => (
        <Card key={index} border={cardData.border} style={{ width: '16rem' }} className="custom-card" >
          <Card.Header>{cardData.header}</Card.Header>
          <Card.Body>
            <Card.Title>{cardData.title}</Card.Title>
            <Card.Text>{cardData.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default DynamicCard;
