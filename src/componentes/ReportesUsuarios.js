import React, {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const ReportesUsuarios = () => {
  //1 configuracion hooks
  const [listaReportes, setListaReportes] = useState( [] );
  //2 referenciamos a la db firestore
  const reportesCollection = collection(db, "reportes");
  //3 funcion para mostrar todos los docs
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