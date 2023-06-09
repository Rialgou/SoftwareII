import { createContext,useState ,useEffect} from "react";
import { obtenerDatosAdministrador } from '../../../Funciones/consultas';

/*Agregar funcion para obtener el id despues de la autentificacion*/

const ContextoAdministrador = createContext();

const administradorId = "oWcvYKoA3pnS6oJpBUhQ"; // Reemplazar con el ID del administrador


const AdministradorProvider = ({children}) => {

    const [administrador, setAdministrador] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          const datosAdministrador = await obtenerDatosAdministrador(administradorId);
          setAdministrador(datosAdministrador);
        };
    
        fetchData();
      }, [administradorId]);

      const data = {administrador}

      return  <ContextoAdministrador.Provider value={data}> {children} </ContextoAdministrador.Provider>
};


export {AdministradorProvider};
export default ContextoAdministrador;