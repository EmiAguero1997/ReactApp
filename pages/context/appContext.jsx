
import { useState, createContext } from "react";
import { useMemo } from "react";

export function AppProvider({children}){

    const [state, setState] = useState({email:'something', pass:'something'});

    function register(data){
        setState(data);
    }

    const value = {
       
        state, register
        
    }


    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export const appContext = createContext();

export default AppProvider;