
import { useEffect, useState } from 'react';


const Entrada = () => {
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/finances')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setEntradas(data)
      })
  }, []);

  return(
    <>
      <h1>Entradas</h1>
      <table>
        <thead>
          <tr>
            <td>title</td>
            <td>valor</td>
            <td>Categoria</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          { 
            entradas.filter(entrada => entrada.categoria === 'Entrada')
              .map(entrada => 
                <tr key={entrada.title}> 
                  <td>{entrada.title}</td>
                  <td>{entrada.valor}</td>
                  <td>{entrada.categoria}</td>
                  <td>{entrada.data}</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

export default Entrada;