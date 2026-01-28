import { createContext } from "react"
import { useState } from "react";
export const Context = createContext();
export const AuthContext = ({children}) => {
    
    const [logado, setlogado] = useState(false);

    return (
        <>
            <Context.Provider value={{logado, setlogado}}>
                {children}
            </Context.Provider>
        </>
    )
}