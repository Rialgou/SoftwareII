import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import '../hojas-de-estilo/BotonesProyectos.css';
import {db} from '../firebaseConfig/firebase'
import {collection, getDocs, getDoc, doc, deleteDoc, query, where} from 'firebase/firestore'

function BotonesProyectos() {
    //id del usuario
    const usuarioId = "umlvgp6OkqUwNtDeh1aA";
    const referenciaUsuario = doc(db,'usuarios',usuarioId)
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
        
    const getProyectos = async() => {
        try{
            const proyectosQuery = query(collection(db,"proyectos"), where("usuario","==",referenciaUsuario));
            const proyectosQuerySnapshot = await getDocs(proyectosQuery);
            const proyectos = [];
            proyectosQuerySnapshot.forEach((doc) => {
                proyectos.push({...doc.data(), id:doc.id});
            });
                
            setProyectosData(proyectos);
        }catch(error){
            console.log(error)
        }
    };
    useEffect(() =>{
        getProyectos();
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

