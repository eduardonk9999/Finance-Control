import { useState } from "react";

const Transacao = () => {
  const [ title, setTitle ] = useState('')
  const [ valor, setValor ] = useState('')
  const [ data, setData ] = useState('')
  const [ categoria, setCategoria ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProdct = {
      newTitle: title,
      newValor: valor,
      newData: data,
      newCategoria: categoria
    }

    
  }


  return(
    <form onSubmit={handleSubmit}>
      <h1>Cadastrar Transação</h1>
      <input type="text"  placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text"  placeholder="Valor"  value={valor} onChange={(e) => setValor(e.target.value)} />
      <select 
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="entrada">entrada</option>
        <option value="saida">saida</option>
      </select>
      <input type="text" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

export default Transacao;