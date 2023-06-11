import Home from "./Home";
import ComoFunciona from "./ComoFunciona";
import Cuenta from "./Cuenta";
import Ajustes from "./Ajustes";
import SalirCuenta from "./SalirCuenta";
import AcercaDeNosotros from "./AcercaDeNosotros";
import Usuario from "../Paginas/Usuario/Usuario";
import Administrador from "../Paginas/Administrador/Vistas/VistaPrincipal";
import Reporte from "../Paginas/Administrador/Vistas/AsignarReporte";
import NuevoReporte from "../Paginas/Usuario/NuevoReporte";
import Depurador from "../Paginas/Depurador/Depurador";

import { AdministradorProvider } from "../Paginas/Administrador/Contextos/ContextoAdministrador";
import { AsignacionProvider } from "../Paginas/Administrador/Contextos/ContextoAsignacion";
import { OpcionesProvider } from "../Paginas/Administrador/Contextos/ContextoOpciones";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <AdministradorProvider>
        <AsignacionProvider>
          <OpcionesProvider>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/cuenta" element={<Cuenta />} />
              <Route path="/ajustes" element={<Ajustes />} />
              <Route path="/salir-cuenta" element={<SalirCuenta />} />
              <Route
                path="/acerca-de-nosotros"
                element={<AcercaDeNosotros />}
              />
              <Route path="/administrador" element={<Administrador />} />
              <Route path="/administrador/:id" element={<Reporte></Reporte>} />
              <Route path="/Usuario" element={<Usuario />} />
              <Route path="/usuario/reporte" element={<NuevoReporte />} />
              <Route path="/depurador" element={<Depurador />} />
            </Routes>
          </OpcionesProvider>
        </AsignacionProvider>
      </AdministradorProvider>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
