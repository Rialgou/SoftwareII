

import {motion} from 'framer-motion';

const HistorialCuenta = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}>
      
    <h1>Cuenta</h1>
    <p>
      <strong>Somos el mejor equipo de Ingeneria de Software</strong>
    </p>
  </motion.div>
  );
};

export default HistorialCuenta;
