import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";

import "../Estilos/BarraBusqueda.css";

function BarraBusqueda() {

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Buscar..."
      />
    </div>
  );
}

export default BarraBusqueda;