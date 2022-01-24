import { createContext } from "react";

const AppContext = createContext({
    setValorEnd: () => {},
    valorEND: null,
})

export default AppContext;