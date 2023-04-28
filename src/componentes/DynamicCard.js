import React from 'react';
import Card from 'react-bootstrap/Card';

import '../hojas-de-estilo/DynamicCard.css'

function DynamicCard() {
  const data = [
    {
      border: 'primary',
      header: 'Jose Toledo',
      title: 'Primary Card Title 1',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
        border: 'primary',
        header: 'Header 2',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 3',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 4',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 5',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 6',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 7',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 8',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 9',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      },
      {
        border: 'primary',
        header: 'Header 10',
        title: 'Primary Card Title 1',
        content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
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
