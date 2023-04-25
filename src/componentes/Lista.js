import ListGroup from 'react-bootstrap/ListGroup';
import '../hojas-de-estilo/Lista.css'

function Lista() {

  const bugs = ["1","2","3","4","5"]; {/* recibir infomracion de api */}


  return (
    <>
      {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint,index) => (

        <ListGroup key={breakpoint} horizontal={breakpoint} shadow={3} border className="my-2 lista">
          <ListGroup.Item className="lista-item">Bug {[bugs[index]]}</ListGroup.Item>
          <ListGroup.Item className="lista-item">Fecha</ListGroup.Item>
          <ListGroup.Item className="lista-item">Depuradore xx</ListGroup.Item>
          <ListGroup.Item className="lista-item">Prioridad</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default Lista;