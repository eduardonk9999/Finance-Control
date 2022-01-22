import { useEffect, useState } from "react";

const Saldo = () => {
  const [valores, setValores] = useState([]);
  const [valortotal, setValorTotal] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/finances')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const sum = data.reduce((acumulador, valoratual) => acumulador + Number(valoratual.valor), 0)
        setValores(sum)
        setValorTotal(data)
      })
  }, []);


  const totaldeSaidas = valortotal.filter(saida => saida.categoria === 'Saida')
  .reduce((acc, item) => acc + Number(item.valor), 0)


  console.log(totaldeSaidas)
  console.log(valores)


  return( 
    <>
     <span>{(valores - totaldeSaidas)}</span>
    </>
  )
}

export default Saldo;