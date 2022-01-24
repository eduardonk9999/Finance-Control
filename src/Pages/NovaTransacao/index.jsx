import { useContext, useState } from "react";
import Saldo from "../../Components/Saldo";
import { StatusContext } from "../../Context/SatusContext";



const Transacao = () => {
  const {handleSubmit,setTitle,setValor,setData,setCategoria, title, valor, data, categoria } = useContext(StatusContext)
  

  return(
    
    <>
    <Saldo />

      <form onSubmit={handleSubmit}>
        <h1>Cadastrar Transação</h1>
        <input type="text"  placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number"  placeholder="Valor"  value={valor} onChange={(e) => setValor(e.target.value)} />
        <select 
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
        </select>
        <input type="text" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)}/>
        <button
         
        >
          Enviar</button>
      </form>

   
    </>
  )
}

export default Transacao;