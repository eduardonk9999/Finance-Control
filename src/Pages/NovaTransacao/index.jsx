import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../../Context/Context";



const Transacao = () => {
  const [ title, setTitle ] = useState('')
  const [ valor, setValor ] = useState('')
  const [ data, setData ] = useState('')
  const [ categoria, setCategoria ] = useState('')
  const {setValorEnd, valorEND} = useContext(AppContext)

  const [valortotal, setValorTotal] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    


    const newProdct = {
      title: title,
      valor: valor,
      data: data,
      categoria: categoria
    }

    if(title.length > 0) {
      fetch('http://localhost:8088/finances', {
        method: 'POST',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(newProdct)
      }).then(() => {
        console.log('new finance add')
        setTitle('');
        setValor('');
        setData('');
      })
    } else {
      console.log('nao passo')
      alert('preencher form')
    } 


    
  }

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


  


  setValorEnd(totaldeEntradas, totaldeSaidas)
  return(
    
    <>
      {valorEND}
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