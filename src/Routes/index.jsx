
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Home from '../Pages/Home';



function Rotas(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>   
  )
}

export default Rotas;