import React, {useState,useEffect} from 'react'
import {collection, getDocs, doc, query, where} from 'firebase/firestore'
import { db} from '../firebaseConfig/firebase'

const ReportesUsuarios = () => {

  // id del usuario estandar
  const usuarioId = "umlvgp6OkqUwNtDeh1aA";
  // configuracion hooks
  const [listaReportesUsuario, setListaReportesUsuario] =  useState([]);
  //const [listaReportes, setListaReportes] = useState( [] );
  // referenciamos a la db firestore
  const proyectosCollection = collection(db, "proyectos");
  const reportesCollection = collection(db, "reportes");
  // funcion para mostrar todos los docs
  const getReportesUsuario = async() => {
    try{
      const referenciaUsuario = doc(db,'usuarios',usuarioId)
      //obtenemos los proyectos que pertenecen al usuario
      const proyectosFiltrados = query(proyectosCollection, where("usuario", "==", referenciaUsuario))
      //se crea una lista donde se guardaran los proyectos
      const proyectoRefs = [];
      const proyectosQuerySnapshot = await getDocs(proyectosFiltrados);
      
      proyectosQuerySnapshot.forEach( (doc) => {
        proyectoRefs.push(doc.ref);
      })    

      //se recuperan los reportes que pertenezcan a alguno de los proyectos
      const reportesFiltrados = query(reportesCollection, where("proyecto","in", proyectoRefs))
      
      //se recuperan los documentos filtrados
      const reportesQuerySnapshot = await getDocs(reportesFiltrados);
      const reportes = []
      reportesQuerySnapshot.forEach((doc) => {
        reportes.push({...doc.data(),id:doc.id});
      })
      setListaReportesUsuario(reportes)
    }catch(error){
      console.log(error)
    }
  }
  /*const getReportes = async() => {
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
  }*/

  //6 use effect
  useEffect(() =>{
    getReportesUsuario()
  },[listaReportesUsuario])
  
  //7 devolvemos vista
  return (
    
    <div>
      <div>Reportes</div>  
      <div className='container card '>
        <div className='card-body'>
          {
            listaReportesUsuario.map((list) => {
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