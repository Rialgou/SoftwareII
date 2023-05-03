import React, { useState, useEffect } from 'react';

import {motion} from 'framer-motion';

const SalirCuenta = () => {


    return(
        
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
          
          <br></br>
         <br></br>
          <h1 className='ms-4'>Salir cuenta</h1>
          <p className='ms-5'>
        .....
      </p>
      </motion.div>
    );

};

export default SalirCuenta;