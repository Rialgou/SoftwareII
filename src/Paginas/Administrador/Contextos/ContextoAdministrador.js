import { createContext, useState, useEffect, useContext } from "react";
import { obtenerDatosAdministrador } from "../../../Funciones/consultas";
import { obtenerDatosReporte } from "../../../Funciones/consultas";
import { obtenerInfoProyectoDesdeReporte } from "../../../Funciones/consultas";
import { obtenerInformacionUsuario } from "../../../Funciones/consultas";
import { obtenerDepuradoresDesdeProyecto } from "../../../Funciones/consultas";
import { HomeContext } from "../../../ComponentesGlobales/Contextos/HomeContext";
/*Agregar funcion para obtener el id despues de la autentificacion*/

const ContextoAdministrador = createContext();



 // Reemplazar con el ID del administrador

const AdministradorProvider = ({ children }) => {

  const {cuenta} = useContext(HomeContext);

  const administradorId = cuenta.id;

  const [IDReporte, SetIDReporte] = useState({});
  const [administrador, setAdministrador] = useState({});
  const [reporte, setReporte] = useState(0);
  const [proyecto, setProyecto] = useState(0);
  const [depuradores, setDepuradores] = useState(0);
  const [usuario, setUsuario] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const datosAdministrador = await obtenerDatosAdministrador(
        administradorId
      );
      setAdministrador(datosAdministrador);
    };

    fetchData();
  }, [administradorId]);

  const getReportesAdministrador = async (IDReporte) => {
    try {
      const reporte = await obtenerDatosReporte(IDReporte);
      setReporte(reporte);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReportesAdministrador(IDReporte);
  }, [IDReporte]);

  let reporteoId = reporte.id;

  useEffect(() => {
    const fetchData = async () => {
      const datosProyecto = await obtenerInfoProyectoDesdeReporte(reporteoId);
      setProyecto(datosProyecto);
    };

    fetchData();
  }, [reporteoId]);

  let proyectoid = proyecto.id;

  useEffect(() => {
    const fetchData = async () => {
      const listaDepuradores = await obtenerDepuradoresDesdeProyecto(
        proyectoid
      );
      setDepuradores(listaDepuradores);
    };

    fetchData();
  }, [proyectoid]);

  useEffect(() => {
    const fetchData = async () => {
      const usuario = await obtenerInformacionUsuario(proyectoid);
      setUsuario(usuario);
    };

    fetchData();
  }, [proyectoid]);

  const data = {
    administrador,
    reporte,
    proyecto,
    depuradores,
    usuario,
    SetIDReporte,
  };

  return (
    <ContextoAdministrador.Provider value={data}>
      {children}
    </ContextoAdministrador.Provider>
  );
};

export { AdministradorProvider };

export default ContextoAdministrador;
