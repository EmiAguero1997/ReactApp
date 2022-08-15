import{Container, Button, TextField} from '@mui/material';
import {useState, useContext} from 'react';
import { appContext } from './context/appContext';

export default function Register(){
    const [registerForm, setRegisterForm] = useState({
        email:"",
        pass:""
    });

    const {register, state} = useContext(appContext);
    

    const handleChange = (e)=>{
        // e.preventDefault();
        setRegisterForm({...registerForm,[e.target.id]: [e.target.value]});
        register(registerForm);
    }
    return (
        <>
        <Container>
            <h1>Login</h1>
            <form>
                <TextField type="text"
                    label='Email'
                    id='email'
                    required
                    onChange={handleChange}>

                </TextField>

                <TextField
                    type="password"
                    label='Pass'
                    id='pass'
                    required
                    onChange={handleChange}>

                </TextField>
                <br />
                <span><a>Forgot your password?</a></span>
            </form>
            <h3>{state?.email}</h3>
            <h3>{state?.pass}</h3>
        </Container>
    </>
    );
}