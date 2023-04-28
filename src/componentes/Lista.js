import ListGroup from 'react-bootstrap/ListGroup';
import '../hojas-de-estilo/Lista.css'

import { useNavigate } from 'react-router-dom';

import {Link,NavLink} from 'react-router-dom';

function Lista() {

  const navigate = useNavigate();

  const handleReporte = () => {
    navigate('/historial-cuenta'); {/* Agregar ruta a administrador2 , consumir api  */}
  };

 /* Ejemplo al consmir api de informacion reporte bug para rellnar lista  path??? */


 const reportesData = [
    {usuario:"Marcelo F", fecha: '13-06-23' , prioridad: 'Alta'  },
    {usuario:"Camilo S", fecha: '20-05-23' , prioridad: 'Media' },
    {usuario:"Sofia H", fecha: '10-06-23' , prioridad: 'Media' },
    {usuario:"Vanesa B", fecha: '25-08-23' , prioridad: 'Alta'  },
    {usuario:"Ricardo S", fecha: '30-05-23' , prioridad: 'Baja' },
    {usuario:"Richard S", fecha: '25-06-23' , prioridad: 'Alta'  },
    {usuario:"Victor T", fecha: '22-05-23' , prioridad: 'Media'  },
    {usuario:"Julian R", fecha: '18-05-23' , prioridad: 'Alta'  },
  ];

  const rutaReporte = (index) => {
    return `/administrador/reporte${index + 1}`;
  };


  return (
    <>
      {reportesData.map(({usuario,fecha,prioridad } , index ) => (
        <ListGroup border  key ={'lg'} horizontal={"lg"} className="my-2 list-item-container"  >
          <ListGroup.Item  as={Link} to={rutaReporte(index)} className=" mt-2 mb-2 item" variant="warning" >
            Bug {index+1}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 mb-2 item" variant="light"  >
            {usuario}
          </ListGroup.Item>
          <ListGroup.Item className=" mt-2 mb-2 item" variant="light" >
            {fecha}
          </ListGroup.Item>
          <ListGroup.Item className=" mt-2 mb-2 item" variant="light" >
            {prioridad}
          </ListGroup.Item>
        </ListGroup>


      ))}
    </>
  );
      };

      export default Lista;




