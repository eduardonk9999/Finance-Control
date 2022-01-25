
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Entrada from './Pages/Entrada';
import Home from './Pages/Home';

import Saida from './Pages/Saida';

function Rotas(){
  return(
    
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/entrada">
            <Entrada />
          </Route>
          <Route  path="/saida">
            <Saida />
          </Route>
         
        </Switch>
      
  
  )
}

export default Rotas;