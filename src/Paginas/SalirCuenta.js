import React, { useState, useEffect } from 'react';

import {motion} from 'framer-motion';

const SalirCuenta = () => {


    return(
        
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
          
        <h1>Salir Cuenta</h1>
        <p>
          <strong>Salirse cuenta</strong>
        </p>
      </motion.div>
    );

};

export default SalirCuenta;