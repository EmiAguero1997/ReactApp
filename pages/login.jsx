import{Container, Button, TextField} from '@mui/material';
import {useState, useContext} from 'react';
import { appContext } from './context/appContext';
import Swal from'sweetalert2';
import {makePublicRouterInstance, useRouter} from 'next/router';
import styles from './styles.module.css';

function Login(){

    const [registerForm, setRegisterForm] = useState({
        email:"",
        pass:""
    });

    const router = useRouter();

    const {login, logout} = useContext(appContext);

    const handleChange = (e) =>{
        setRegisterForm({...registerForm, [e.target.id]: [e.target.value]});
    }

    const goCreateAccount = ()=>{
        router.push('/register');
    }

    const errorModal = ()=>{
        Swal.fire({
            title:'Error',
            icon:'error',
            showConfirmButton:false
        });
    }

    const successModal = (text) =>{
        Swal.fire({
            title:text,
            icon:'success',
            showConfirmButton:false
        });
    }

    const submit = ()=>{
        login(registerForm).then(()=>{
            successModal('You are loged in');
        }).catch(()=>{
            errorModal();
        });
    }

    const fireLogout = ()=>{
        logout().then(()=>{
            successModal('You are loged out');
        }).catch(()=>{
            errorModal();
        });
    }

    const goToPrivatePage = ()=>{
        router.push('/privatePage');
    }

    return(
        <>
            <div>
            <Container className={styles.loginContainer}>
            <div className={styles.loginContent}>
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
                <Button onClick={submit}>Login</Button>
                <br />
                <span><a>Forgot your password?</a></span>
            </form>
            <Button onClick={fireLogout}>Logout</Button>
            <Button onClick={goToPrivatePage}>Go to privatePage</Button>
            <Button onClick={goCreateAccount}>Create account</Button>
            </div>
        </Container>
            </div>
        </>
    )
}
export default Login;