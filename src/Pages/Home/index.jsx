import React, { useContext, useState, useEffect } from "react";

const Home = () => {
  const [newfinance, setNewFinance] = useState([])
  const [title, setTitle] = useState('')
  const [categoria, setCategoria] = useState('')
  const [data, setData] = useState('')
  const [valor, setValor] = useState('')

  function handlesubmittransition(e){
   
  }
  
 
  return (
    
    <>
     
      <form onSubmit={handlesubmittransition}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="nome" 
        />
        <input 
          type="number" 
          placeholder="valor" 
          value={valor} 
          onChange={(e) => setValor(e.target.value)}
        />
        <select name="" id=""
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
        </select>
        <input 
          type="text" 
          placeholder="data"
          value={data} 
          onChange={(e) => setData(e.target.value)}
        />

        <button>Enviar nova transacao</button>
      </form>
    </>
    
  )




}

export default Home;