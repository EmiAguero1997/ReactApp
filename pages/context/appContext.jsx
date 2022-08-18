import { auth } from "../../config/firebase";
import { useState, createContext } from "react";
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function AppProvider({children}){

    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const auth = getAuth();

    const register = async  (data)=>{
        let email = data.email.toString();
        let pass = data.pass.toString();
        const userData = await createUserWithEmailAndPassword(auth ,email ,pass);
        console.log(userData);
        setUser(data);
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