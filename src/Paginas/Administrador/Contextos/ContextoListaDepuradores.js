import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

import CartaPresentacion from "../Componentes/CartaPresentacion";
import "../Estilos/ContextoLista.css";

const listaDepuradores = [
  {
    Depurador: "Nombre Depurador 1",
    Sobrecarga: 1,
    Contacto: "ejemplo1@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 2",
    
    Contacto: "ejemplo2@ejemplo.com",
    
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  {
    Depurador: "Nombre Depurador 3",
    Sobrecarga: 1,
    Contacto: "ejemplo3@ejemplo.com",
    proyectos: "proyecto 1, proyecto 2, proyecto 3",
  },
  
  
];

function ContextoListaDepuradores() {
  return (
    <div className="container d-flex">
      <div className="row">
        {listaDepuradores.map(({Depurador, Sobrecarga, Contacto, proyectos}) => (
        <div className="col-4 " key={Depurador}>
          <CartaPresentacion Depurador={Depurador} Sobrecarga={Sobrecarga} Contacto={Contacto} proyectos={proyectos} />
        </div>
        ))}
      </div>
    </div>
  );
}
export default ContextoListaDepuradores;
