import React from "react"
import { BrowserRouter as Router} from 'react-router-dom';
import Rotas from './routes';
import Header from './Components/Header'
import AppProvider from "./Context/Provider";


function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Rotas />
      </Router>
    </AppProvider>
  )
}

export default App
