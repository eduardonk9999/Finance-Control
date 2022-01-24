import { useEffect, useState, useContext } from "react";

import { StatusContext } from "../../Context/SatusContext";



const Saldo = () => {

  const {valortotal, setAtualizaValor} = useContext(StatusContext)
  

/* 
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
*/


 
const totaldeSaidas = valortotal.filter(saida => saida.categoria === 'Saida')
.reduce((acc, item) => acc + Number(item.valor), 0);
 
const totaldeEntradas = valortotal.filter(entrada => entrada.categoria === 'Entrada')
  .reduce((acc, item) => acc + Number(item.valor), 0);

  setAtualizaValor(totaldeEntradas - totaldeSaidas)
  return( 
    <>
     
      <div>
        <h1>Saldo</h1>
        <h2>{totaldeEntradas - totaldeSaidas}</h2>
      </div>
    
    </>
  )
}

export default Saldo;