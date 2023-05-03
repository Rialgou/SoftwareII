

import './App.css';


import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './Paginas/AnimatedRoutes';





function App() {


    return (
      <div className='App'>
        <Router>
          <AnimatedRoutes />
        </Router>

      </div>
    );
  }


  
  export default App;