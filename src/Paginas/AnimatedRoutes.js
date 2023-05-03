
import Home from './Home';
import ComoFunciona from './ComoFunciona';
import Cuenta from './Cuenta';
import Ajustes from './Ajustes';
import SalirCuenta from './SalirCuenta';
import AcercaDeNosotros from './AcercaDeNosotros';
import Usuario from './/Usuario';
import Administrador from './/Administrador';
import Reporte from './Reporte';
import NuevoReporte from './NuevoReporte';

import {  Routes, Route ,useLocation} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion';

 function AnimatedRoutes() {

    const location = useLocation();

    return(
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/ajustes" element={<Ajustes />} />
          <Route path="/salir-cuenta" element={<SalirCuenta />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
          <Route path="/administrador" element={<Administrador/>} />
          <Route path='/administrador/:id' element={<Reporte></Reporte>} />
          <Route path="/Usuario" element={<Usuario/>} />
          <Route path="/usuario/reporte" element= {<NuevoReporte></NuevoReporte>} />
      </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;