import { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";

import AppContext from '../../Context/Context';

const Saldo = () => {
  const [valortotal, setValorTotal] = useState([]);
  


  useEffect(() => {
    fetch('http://localhost:8088/finances')
      .then(res => {
        return res.json()
      })
      .then(data => {
        
        setValorTotal(data)
      })
  }, []);


  const totaldeSaidas = valortotal.filter(saida => saida.categoria === 'Saida')
  .reduce((acc, item) => acc + Number(item.valor), 0);

  const totaldeEntradas = valortotal.filter(entrada => entrada.categoria === 'Entrada')
  .reduce((acc, item) => acc + Number(item.valor), 0);



 
  
 


  return( 
    <>
     {
      <div>
        <h1>Saldo</h1>
        <h2></h2>
      </div>
     }
    </>
  )
}

export default Saldo;