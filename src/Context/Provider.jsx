import { useEffect, useState } from "react"
import AppContext from "./Context";

const AppProvider = ({ children }) => {
  const [valorfinal, setValorFinal ] = useState('');
  



  return(
    <AppContext.Provider value={{valorfinal, setValorFinal}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;