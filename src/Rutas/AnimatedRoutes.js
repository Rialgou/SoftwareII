import { useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../ComponentesGlobales/Home";
import ComoFunciona from "../ComponentesGlobales/ComoFunciona";
import Cuenta from "../ComponentesGlobales/Cuenta";
import Ajustes from "../ComponentesGlobales/Ajustes";
import AcercaDeNosotros from "../ComponentesGlobales/AcercaDeNosotros";
import Usuario from "../Paginas/Usuario/Usuario";
import AdministradorVistaPrincipal from "../Paginas/Administrador/Vistas/VistaPrincipal";
import AdministradorAsignarReporte from "../Paginas/Administrador/Vistas/AsignarReporte";
import NuevoReporte from "../Paginas/Usuario/NuevoReporte";
import Depurador from "../Paginas/Depurador/Depurador";

import { AdministradorProvider } from "../Paginas/Administrador/Contextos/ContextoAdministrador";
import { AsignacionProvider } from "../Paginas/Administrador/Contextos/ContextoAsignacion";
import { OpcionesProvider } from "../Paginas/Administrador/Contextos/ContextoOpciones";

function AnimatedRoutes() {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/como-funciona",
      element: <ComoFunciona />,
    },
    {
      path: "/cuenta",
      element: <Cuenta />,
    },
    {
      path: "/ajustes",
      element: <Ajustes />,
    },
    {
      path: "/acerca-de-nosotros",
      element: <AcercaDeNosotros />,
    },
    {
      path: "/administrador/*",
      element: (
        <AdministradorProvider>
          <AsignacionProvider>
            <OpcionesProvider>
              <AdministradorVistaPrincipal />
            </OpcionesProvider>
          </AsignacionProvider>
        </AdministradorProvider>
      ),
    },
    {
      path: "/administrador/:id",
      element: (
        <AdministradorProvider>
          <OpcionesProvider>
            <AdministradorAsignarReporte />
          </OpcionesProvider>
        </AdministradorProvider>
      ),
    },
    {
      path: "/Usuario",
      element: <Usuario />,
    },
    {
      path: "/usuario/reporte",
      element: <NuevoReporte />,
    },
    {
      path: "/depurador",
      element: <Depurador />,
    },
  ]);

  return <AnimatePresence>{routing}</AnimatePresence>;
}

export default AnimatedRoutes;