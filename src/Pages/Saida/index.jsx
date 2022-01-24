import { useEffect, useState } from "react";
import Saldo from '../../Components/Saldo';

const Saida = () => {
  const [saidas, setSaidas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8088/finances')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setSaidas(data)
      })
  }, []);

  return(
    <>
      <h1>Saidas</h1>
      <Saldo />
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
            saidas.filter(saida => saida.categoria === 'Saida')
              .map(saida => 
                <tr key={saida.title}> 
                  <td>{saida.title}</td>
                  <td>{saida.valor}</td>
                  <td>{saida.categoria}</td>
                  <td>{saida.data}</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

export default Saida;