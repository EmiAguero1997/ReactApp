import Card from '../card';
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cards(){
    const router = useRouter();
    const {pokemonName} = router.query;
    const [apiData, setApiData] = useState();

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/${pokemonName}`)
          .then((response) => {
            console.log('response: ',response);
          })
          .catch((error) => {
            console.log(error);
          });
        setApiData(response);
        console.log('apiData: ',apiData);
    }
    
    return(
        <>
            <h2>{pokemonName}</h2>
            <Card></Card>
        </>
    )
}