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
              let estadoReporte;
              if(list.estado === -1) estadoReporte = "Rechazado";
              else if(list.estado === 1) estadoReporte = "Pendiente";
              else if(list.estado === 2) estadoReporte = "En proceso";
              else if(list.estado === 3) estadoReporte = "Terminado"; 
              return <div key={list.id}>
                <p>Reporte: {list.descripcionUsuario}</p>
                <p>Estado: {estadoReporte}</p>
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