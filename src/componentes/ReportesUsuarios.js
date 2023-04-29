import React, {useState,useEffect} from 'react'

import {getReportesUsuario} from '../Funciones/consultas';

const ReportesUsuarios = () => {

  // id del usuario estandar
  const usuarioId = "umlvgp6OkqUwNtDeh1aA";

  // configuracion hooks
  const [listaReportesUsuario, setListaReportesUsuario] =  useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const reportesUsuario = await getReportesUsuario(usuarioId);
      setListaReportesUsuario(reportesUsuario);
    };

    fetchData();
  }, [listaReportesUsuario]);
  

  
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