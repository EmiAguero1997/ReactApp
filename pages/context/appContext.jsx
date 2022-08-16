import { auth } from "../../config/firebase";
import { useState, createContext } from "react";
import firebase from "firebase/compat/app";

export function AppProvider({children}){

    const [user, setUser] = useState({email:'something', pass:'something'});

    function register(data){
        setUser(data);
        return auth.createUserWithEmailAndPassword(user.email, user.pass);
    }

    const value = {
       
        user, register
        
    }


    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export const appContext = createContext();

export default AppProvider;