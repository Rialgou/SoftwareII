import React, {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'
import {collection,where, query, getDocs, getDoc, get, deleteDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const ReportesUsuarios = () => {
  // id del usuario estandar
  const usuarioId = "QNUiIgSYQoVpJVD6I2Zm";
  // configuracion hooks
  const [listaReportesUsuario, setListaReportesUsuario] =  useState([]);
  const [listaReportes, setListaReportes] = useState( [] );
  // referenciamos a la db firestore
  const proyectosCollection = collection(db, "proyectos");
  const reportesCollection = collection(db, "reportes");
  // funcion para mostrar todos los docs
  /*proyectosCollection.where("usuario",  "==", usuarioId).get()
              .then((querySnapshot) =>{
                // obtenemos todos los ids asociados al usuario
                const proyectosIds = [];
                // almacenamos los ids en un arreglo
                querySnapshot.forEach((doc) => {
                  const proyectoID = doc.id;
                  proyectosIds.push(proyectoID)
                });
                //obtenemos los reportes asociados a esos proyectos
                reportesCollection.where("proyecto", "==", proyectosIds)
                                  .get()
                                  .then((querySnapshot) => {
                                    querySnapshot.forEach((doc) => {
                                      // Los campos que necesito del reporte
                                      const reporte = doc.data().descripcionUsuario;
                                      const estado = doc.data().estado;

                                      console.log(`reporte: ${reporte}, estado: ${estado}`);
                                    });
                                  });
              });*/
  const getReportes = async() => {
    try{
      const querySnapshot = await getDocs(reportesCollection)
      const docs =[]
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id})
      })
      setListaReportes(docs)
    } catch(error){
      console.log(error)
    }
  }

  //6 use effect
  useEffect(() =>{
    getReportes()
  },[listaReportes])
  
  //7 devolvemos vista
  return (
    
    <div>
      <div>Reportes</div>  
      <div className='container card '>
        <div className='card-body'>
          {
            listaReportes.map((list) => {
              return <div key={list.id}>
                <p>Reporte: {list.descripcionUsuario}</p>
                <p>Estado: {list.estado}</p>
                <hr />
              </div>
            })
          }
        </div>
      </div>
    </div>
    
  )
}

export default ReportesUsuarios