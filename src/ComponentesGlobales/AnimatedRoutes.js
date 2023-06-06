
import Home from './Home';
import ComoFunciona from './ComoFunciona';
import Cuenta from './Cuenta';
import Ajustes from './Ajustes';
import SalirCuenta from './SalirCuenta';
import AcercaDeNosotros from './AcercaDeNosotros';
import Usuario from '../Paginas/Usuario/Usuario';
import Administrador from '../Paginas/Administrador/Administrador';
import Reporte from '../Paginas/Administrador/Administrador2';
import NuevoReporte from '../Paginas/Usuario/NuevoReporte';
import Depurador from '../Paginas/Depurador/Depurador';

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
          <Route path="/usuario/reporte" element={<NuevoReporte></NuevoReporte>} />
          <Route path="/depurador" element={<Depurador/>}/>
      </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;