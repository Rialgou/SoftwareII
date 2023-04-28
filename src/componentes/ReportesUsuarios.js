import React, {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, query, where} from 'firebase/firestore'
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
  /*const getReportesUsuario = async() => {
    try{
      const proyectosFiltrados = await query(proyectosCollection, where("usuario", "==", usuarioId))
      console.log(proyectosFiltrados)
    }catch(error){
      console.log(error)
    }
  }*/
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