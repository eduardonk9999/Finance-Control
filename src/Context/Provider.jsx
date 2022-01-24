import { useCallback, useEffect, useState } from "react";
import AppContext from "./Context";




const AppProvider = ({ children }) => {
  const [valorEND, setValor] = useState(null)


  const setValorEnd = useCallback((entrada, saida) => {
    const sub = entrada - saida;
    
 
    setValor(sub)
    
    

  }, [])
  
  console.log('>' + valorEND)

  return(
    <AppContext.Provider value={{ setValorEnd, valorEND }}>
      { children }
    </AppContext.Provider>
  )
}
export default AppProvider;