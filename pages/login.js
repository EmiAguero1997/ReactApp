import{Container, Button, TextField} from '@mui/material';
import GoogleIcon from "@mui/icons-material/Google";
import {useState} from 'react';

export default function Login(){


    const [loginForm, setLoginForm] = useState({
        email:"",
        pass:""
    });
    const handleChange = (e)=>{
        e.target.id=='email' && (setLoginForm(e.target.value));
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