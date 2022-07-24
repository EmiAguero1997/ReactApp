import Rendered from "./rendered";
import Card from './card';
import {useState, useEffect} from 'react';
import styles from './styles.module.css';
import { TextField } from "@mui/material";
import {CardHeader} from "@mui/material";
import Footer from './footer';

function Renderer(){

    const [cardTitle, setCardTitle] = useState();
    const [cardDesc, setCardDesc] = useState();
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(()=>{
        counter2==5 && (alert('You clicked 5 times'), setCounter2(0), disableBtn());
    }, [counter2])

    function disableBtn(){
        setDisabled(true);
    }

    const handleChange = event =>{
        setCardTitle(event.target.value);
    }

    function handleDescChange(event){
        setCardDesc(event.target.value);
    }

    function handleClick(){
        console.log('click');
    }

    const clickCounter = num => {
        setCounter(current => current + num);
        setCounter2(current => current + num);
    }
    return(
        <>
            <CardHeader title="Emiserv Custom Bikes" className={styles.header}>   
            </CardHeader>
            <div>
                <div className={styles.textFields}>
                    <TextField type="text" className={styles.title} placeholder="Ingrese el titulo de la card" onChange={handleChange}></TextField>
                    <b></b>
                    <TextField type="text" className={styles.title} placeholder="Ingrese la descripcion de la card" onChange={handleDescChange}></TextField>
                </div>
                 <div className={styles.textFields}>
                    <Card disabled={disabled} clickCounter={clickCounter} title={cardTitle? cardTitle : 'Honda CB 750'} description={cardDesc? cardDesc : 'With a powerful and reliable engine, the Honda CB 750 CC3 bike is one of the most choosed base bikes for Cafe racer bikes enthusiasts.'}/>
                 </div>
                <h2 className={styles.textFields}>Click counter: {counter}</h2>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Renderer