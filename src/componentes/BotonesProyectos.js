import Button from 'react-bootstrap/Button';
import { useState } from "react";
import React from 'react';
import '../hojas-de-estilo/BotonesProyectos.css';

function BotonesProyectos() {

    const proyectosData = [
        {nombre: "QuickCalc"},
        {nombre: "CleanSweep"},
        {nombre: "QuickCalc"},
        {nombre: "CleanSweep"},
        {nombre: "QuickCalc"},
        {nombre: "CleanSweep"},
        {nombre: "QuickCalc"},
        {nombre: "CleanSweep"},
        {nombre: "QuickCalc"},
        {nombre: "CleanSweep"},
    ];

    const [botonSeleccionado, setBotonSeleccionado] = useState(null);

    const seleccionarBoton = (indice) => {
        setBotonSeleccionado(indice);
    };

    return (
        <div className="botones-container">
            {proyectosData.map((proyecto, indice) => (
                <Button
                    key={indice}
                    variant={botonSeleccionado === indice ? "primary" : "secondary"}
                    onClick={() => seleccionarBoton(indice)}
                    className="boton"
                >
                    {proyecto.nombre}
                </Button>
            ))}
        </div>
    );
}

export default BotonesProyectos;

