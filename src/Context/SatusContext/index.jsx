import { createContext, useEffect, useState } from "react";

export const StatusContext = createContext({})


export const StatusProvider = ({ children }) =>{
    
    const [valortotal, setValorTotal] = useState([]);
    const [ title, setTitle ] = useState('')
    const [ valor, setValor ] = useState('')
    const [ data, setData ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ atualizavalor, setAtualizaValor] = useState('')

   
    useEffect(() => {
        fetch('http://localhost:8088/finances')
            .then(res => {
            return res.json()
            })
            .then(data => {
            
            setValorTotal(data)
        })
    }, [children]);

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
            console.log(atualizavalor)
            setTitle('');
            setValor('');
            setData('');
          })
        } else {
          console.log('nao passo')
          alert('preencher form')
        } 
    }
    
  
   
   
     

   
    return(
        <StatusContext.Provider value={{setAtualizaValor,valortotal, handleSubmit,setTitle,setValor,setData, setCategoria, title, valor, data, categoria}}>
            { children }
        </StatusContext.Provider>
    )
}