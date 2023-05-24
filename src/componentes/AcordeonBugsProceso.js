import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import "../hojas-de-estilo/AcordeonBugsProceso.css";

function AcordeonBugsProceso() {
  const datos = [
    { nombre: 'proyecto 1', fecha1: 'fecha 1', fecha2: 'fecha 11', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 2', fecha1: 'fecha 2', fecha2: 'fecha 22', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 3', fecha1: 'fecha 3', fecha2: 'fecha 33', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 4', fecha1: 'fecha 4', fecha2: 'fecha 44', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
    { nombre: 'proyecto 5', fecha1: 'fecha 5', fecha2: 'fecha 55', prioridad: 'media', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum similique reprehenderit illo iste expedita, quae dolores veniam architecto. Blanditiis molestias, iste similique harum labore laudantium voluptatibus illo ab animi.' },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <Accordion className="acordeon-bugs-proceso" activeKey={activeItem} onSelect={handleItemClick}>
      {datos.map((item, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Card>
            <Accordion.Header>
              <div>
                <span className="bug-info">
                  <span> Bug {index + 1}</span>
                  <span>Proyecto: {item.nombre}</span>
                  <span>{item.fecha1}-{item.fecha2}</span>
                  <span>Prioridad: {item.prioridad}</span>
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Descripción del Bug <br/> {item.descripcion}
            </Accordion.Body>

          </Card>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AcordeonBugsProceso;

