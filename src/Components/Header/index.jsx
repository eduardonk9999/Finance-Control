import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";


const Header = () => {
  return(
    <header>
      <nav>
        <h1>financial control</h1>
    
          <Link to="/entrada">entrada</Link>
          <Link to="/saida">saida</Link>
          
      
      </nav>
    </header>
  )
}

export default Header;