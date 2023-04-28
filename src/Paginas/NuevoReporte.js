import '../hojas-de-estilo/NuevoReporte.css'
import { Stack } from 'react-bootstrap';
import React from 'react';
import  Button from 'react-bootstrap/Button';
import Acordeon from '../componentes/Acordeon';
import BarraLateralUsuario from '../componentes/BarraLateralUsuario';



function NuevoReporte() {
  const handleNewReportClick = () => {
  };

  return (
    <main className="contenido-principal">
      <div>
        <BarraLateralUsuario></BarraLateralUsuario>
      </div>
      <Stack gap={3}>
        <div>
          <h2 className="text-center titulo">Generador de reporte</h2>
        </div>

        <div className="mx-auto acordeon">
          <Acordeon></Acordeon>
        </div>

        <div className="contenedor-boton">
          <Button variant="dark" className="boton-enviar" onClick={handleNewReportClick}>
            Enviar reporte
          </Button>
        </div>
      </Stack>
    </main>
  );
}

export default NuevoReporte;