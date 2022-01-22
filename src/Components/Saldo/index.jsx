import { useEffect, useState } from "react";

const Saldo = () => {
  const [valortotal, setValorTotal] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/finances')
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


  console.log(totaldeSaidas)
  console.log(totaldeEntradas)
 


  return( 
    <>
     {
      totaldeEntradas - totaldeSaidas
     }
    </>
  )
}

export default Saldo;