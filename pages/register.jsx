import{Container, Button, TextField} from '@mui/material';
import {useState, useContext} from 'react';
import { appContext } from './context/appContext';
import Swal from'sweetalert2';

export default function Register(){
    const [registerForm, setRegisterForm] = useState({
        email:"",
        pass:""
    });

    const {register} = useContext(appContext);
    

    const handleChange = (e)=>{
        setRegisterForm({...registerForm,[e.target.id]: [e.target.value]});
    }

    const submit = (e)=>{
        e.preventDefault();
        register(user).then(()=>{
            Swal.fire({
                title:'Usuario registrado!',
                icon:'success',
                showConfirmButton:false
            })
        }).catch(()=>{
            Swal.fire({
                title:'Error',
                icon:'error',
                showConfirmButton:false
            })
        })
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
        </Container>
    </>
    );
}