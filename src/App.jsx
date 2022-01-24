import React from "react"
import { BrowserRouter as Router} from 'react-router-dom';
import Rotas from './routes';
import Header from './Components/Header'

import { StatusProvider } from "./Context/SatusContext";


function App() {
  return (
    <StatusProvider>
      <Router>
        <Header />
        
        <Rotas />
      </Router>
    </StatusProvider>
  )
}

export default App
