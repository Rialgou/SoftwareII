import React from "react";
import "../Estilos/CartaPresentacion.css"


function CartaPresentacion({Depurador, Sobrecarga,Contacto,proyectos}) {
  return (
    <div className="card text-center mt-3">
      <div className="card-body ">
      <h4 className="card-title "> {Depurador ? Depurador: 'nuevo depurador'} </h4>
      <p className="card-title title-primary"> Nivel de carga: {Sobrecarga ? Sobrecarga : '0'} </p>
      <p className="card-title title-primary">Contacto: {Contacto ? Contacto : 'ejemplo@ejemplo.com' } </p>
      <p className="card-title title-primary">Proyectos: {proyectos ? proyectos: 'no ha tenido proyectos'} </p>
      </div>
      
    </div>
  );
}
export default CartaPresentacion;
