import{Container, Button, TextField} from '@mui/material';
import {useState, useContext} from 'react';
import { appContext } from './context/appContext';
import Swal from'sweetalert2';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export default function Register(){
    const [registerForm, setRegisterForm] = useState({
        email:"",
        pass:""
    });

    const {register, logout} = useContext(appContext);
    
    const router = useRouter();

    const [loginBtn, setLoginBtn] = useState(true);

    const handleChange = (e)=>{
        setRegisterForm({...registerForm,[e.target.id]: [e.target.value]});
    }

    const submit = (e)=>{
        e.preventDefault();
        register(registerForm).then(()=>{
            Swal.fire({
                title:'Usuario registrado!',
                icon:'success',
                showConfirmButton:false
            })
            setLoginBtn(false);
        }).catch(()=>{
            Swal.fire({
                title:'Error',
                icon:'error',
                showConfirmButton:false
            })
        })
    }

    const fireLogout = () =>{
        logout();
    }

    const goToLogin = ()=>{
        router.push('/login');
    }

    const goToPrivatePage = ()=>{
        router.push('/privatePage');
    }

    return (
        <>
        <Container className={styles.loginContainer}>
            <div className={styles.loginContent}>
            <h1>Register</h1>
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
                <Button onClick={submit}>Create user</Button>
                <br />
                <span><a>Forgot your password?</a></span>
            </form>
            <Button onClick={fireLogout}>Logout</Button>
            <Button onClick={goToLogin} disabled={loginBtn}>Login</Button>
            <Button onClick={goToPrivatePage}>Private page</Button>
            </div>
        </Container>
    </>
    );
}