import Home from "../ComponentesGlobales/Home";
import ComoFunciona from "../ComponentesGlobales/ComoFunciona";
import Cuenta from "../ComponentesGlobales/Cuenta";
import Ajustes from "../ComponentesGlobales/Ajustes";
import AcercaDeNosotros from "../ComponentesGlobales/AcercaDeNosotros";
import Usuario from "../Paginas/Usuario/Usuario";
import AdministradorVistaPrincipal from "../Paginas/Administrador/Vistas/VistaPrincipal";
import AdministradorAsignarReporte from "../Paginas/Administrador/Vistas/AsignarReporte";
import AdministradorVisualizarReportesParciales from "../Paginas/Administrador/Vistas/VisualizarReportesParciales";
import NuevoReporte from "../Paginas/Usuario/NuevoReporte";
import Depurador from "../Paginas/Depurador/Depurador";

import { AdministradorProvider } from "../Paginas/Administrador/Contextos/ContextoAdministrador";
import { AsignacionProvider } from "../Paginas/Administrador/Contextos/ContextoAsignacion";
import { OpcionesProvider } from "../Paginas/Administrador/Contextos/ContextoOpciones";
import { HomeContext } from "../ComponentesGlobales/Contextos/HomeContext";

import { useRoutes, Navigate, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";

function AnimatedRoutes() {
  const { cuenta } = useContext(HomeContext);
  const { accType } = cuenta;

  const PrivateRoute = ({ path, element }) => {
    if (accType === 1 && path.startsWith("/Usuario")) {
      return element;
    } else if (accType === 2 && path.startsWith("/administrador")) {
      return element;
    } else if (accType === 3 && path.startsWith("/depurador")) {
      return element;
    } else if (accType === -1 && path === "/") {
      return element;
    } else {
      return <Navigate to="/" />;
    }
  };

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
        <PrivateRoute
          path="/administrador/*"
          element={
            <AdministradorProvider>
              <AsignacionProvider>
                <OpcionesProvider>
                  <AdministradorVistaPrincipal />
                </OpcionesProvider>
              </AsignacionProvider>
            </AdministradorProvider>
          }
        />
      ),
    },
    {
      path: "/administrador/:id",
      element: (
        <PrivateRoute
          path="/administrador/:id"
          element={
            <AdministradorProvider>
              <OpcionesProvider>
                <AdministradorAsignarReporte />
              </OpcionesProvider>
            </AdministradorProvider>
          }
        />
      ),
    },
    {
      path: "/administrador/en-proceso/:id",
      element: (
        <PrivateRoute
          path="/administrador/en-proceso/:id"
          element={
            <AdministradorProvider>
              <OpcionesProvider>
                <AdministradorVisualizarReportesParciales />
              </OpcionesProvider>
            </AdministradorProvider>
          }
        />
      ),
    },
    {
      path: "/Usuario/*",
      element: <PrivateRoute path="/Usuario/*" element={<Usuario />} />,
    },
    {
      path: "/usuario/reporte",
      element: (
        <PrivateRoute path="/Usuario/reporte" element={<NuevoReporte />} />
      ),
    },
    {
      path: "/depurador",
      element: <PrivateRoute path="/depurador" element={<Depurador />} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <AnimatePresence>
      <Outlet />
      {routing}
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
