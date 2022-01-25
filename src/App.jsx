import React from "react"
import { BrowserRouter as Router} from 'react-router-dom';
import Rotas from './routes';
import Header from './Components/Header'



function App() {
  return (
    
      <Router>
        <Header />
        
        <Rotas />
      </Router>
   
  )
}

export default App
