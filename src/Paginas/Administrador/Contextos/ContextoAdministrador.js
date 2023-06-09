import { createContext, useState, useEffect } from "react";
import { obtenerDatosAdministrador } from "../../../Funciones/consultas";
import { obtenerDatosReporte } from "../../../Funciones/consultas";
import { obtenerInfoProyectoDesdeReporte } from "../../../Funciones/consultas";
import { obtenerInformacionUsuario } from "../../../Funciones/consultas";
import { obtenerDepuradoresDesdeProyecto } from "../../../Funciones/consultas";
import { obtenerReportesAdministrador } from "../../../Funciones/consultas";

/*Agregar funcion para obtener el id despues de la autentificacion*/

const ContextoAdministrador = createContext();

const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador

const AdministradorProvider = ({ children }) => {
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

const ReportesFiltradosProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(1); // Estado para almacenar el elemento seleccionado
  const [toggleText, setToggleText] = useState("Ordenar por");
  const [listaReportes, setListaReportes] = useState([]);
  const [estado, setEstado] = useState(null);

  const handleItemClick = (value) => {
    setSelectedItem(value);
    console.log(estado);
    switch (value) {
      case 1:
        setToggleText("Fecha de emisión");
        break;
      case 2:
        setToggleText("Prioridad");
        break;
      case 3:
        setToggleText("Fecha estimada de término");
        break;
      default:
        setToggleText("Ordenar por");
    }
  };

  const getReportesAdministrador = async () => {
    try {
      const reportes = await obtenerReportesAdministrador(
        administradorId,
        estado,
        selectedItem
      );
      setListaReportes(reportes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReportesAdministrador();
  }, [selectedItem, estado]);

  const data = { toggleText, handleItemClick, listaReportes, setEstado };

  return (
    <ContextoAdministrador.Provider value={data}>
      {children}
    </ContextoAdministrador.Provider>
  );
};

export { AdministradorProvider, ReportesFiltradosProvider };

export default ContextoAdministrador;
