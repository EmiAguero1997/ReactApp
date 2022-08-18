import { auth } from "../../config/firebase"; //SI SACO EL IMPORT, NO SE INICIA FIREBASE
import { useState, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut, } from "firebase/auth";

export function AppProvider({children}){

    const [user, setUser] = useState();
    const auth = getAuth();

    const register = async  (data)=>{
        let email = data.email.toString();
        let pass = data.pass.toString();
        const userData = await createUserWithEmailAndPassword(auth ,email ,pass);
    }

    const login = async (data)=>{
        let email = data.email.toString();
        let pass = data.pass.toString();
        const userData = await signInWithEmailAndPassword(auth ,email ,pass);
        setUser(userData.user);
        console.log('userData: ', userData);
    }

    const logout = async ()=>{
        await signOut(auth);
        setUser(null);
    }

    const value = {
       
        user, register, login, logout
        
    }


    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export const appContext = createContext();

export default AppProvider;