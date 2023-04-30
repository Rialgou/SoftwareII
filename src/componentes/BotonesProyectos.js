

import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

import '../hojas-de-estilo/BotonesProyectos.css';
import { getProyectosUsuario } from '../Funciones/consultas';



function BotonesProyectos() {
    //id del usuario
    const usuarioId = "umlvgp6OkqUwNtDeh1aA";
    // hooks
    const [proyectosData, setProyectosData] = useState([]);
    const [botonSeleccionado, setBotonSeleccionado] = useState([]);

    /*const proyectosData = [
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
    ];*/

    useEffect(() =>{
        const fetchData = async () =>{
            const proyectosUsuario = await getProyectosUsuario(usuarioId);
            setProyectosData(proyectosUsuario);
        };

        fetchData();
    },[proyectosData]);
    
    const seleccionarBoton = (indice) => {
        setBotonSeleccionado(indice);
    };
    
    return (
        <div className="botones-container">
            {proyectosData.map((proyecto) => (
                <Button
                    key={proyecto.id}
                    variant={botonSeleccionado === proyecto.id ? "primary" : "secondary"}
                    onClick={() => seleccionarBoton(proyecto.id)}
                    className="boton"
                >
                    {proyecto.nombre}
                </Button>
            ))}
        </div>
    );
}

export default BotonesProyectos;


