import { useEffect, useState } from "react";

const Saldo = () => {
  const [valores, setValores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/finances')
      .then(res => {
        return res.json()
      })
      .then(data => {
        //const sum = data.reduce((acumulador, valoratual) => acumulador + Number(valoratual.valor), 0)
      
        setValores(data)
      })
  }, []);

  return(
    <>
       { 
            valores.filter(entrada => entrada.categoria === 'Entrada')
              .reduce((acc, item) => (

                
                console.log(item, acc)
                    
              ), 0)
          }
    </>
  )
}

export default Saldo;