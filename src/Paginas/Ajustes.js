
import {motion} from 'framer-motion';

const Ajustes = () => {
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
        
      <h1>Ajustes</h1>
      <p>
        IOUDHASUIDHUIASHDUIASHIUDHIUASHDIUASHDAD
        DASUIKGHDUIASHUIDHASUIDHUIASHDSA
        DIUASHDUIHSAUIDHIUASHDIUSAH
      </p>
    </motion.div>
  );
};

export default Ajustes;