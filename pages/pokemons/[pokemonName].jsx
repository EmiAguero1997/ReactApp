import PokemonCard from './pokemonCard';
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import styles from '../styles.module.css';


export default function Cards(){
    const router = useRouter();
    const {pokemonName} = router.query;
    const [apiData, setApiData] = useState();

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,)
          .then((response) => {
            setApiData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
       
        
    }
    
    return(
        <>
            <div className={styles.pokemonNamePageBody}>
            <h2>{pokemonName}</h2>
            <div className={styles.pokemonContainer}>
            
            {
              apiData ? (
                <PokemonCard title={apiData.species.name} data={apiData.sprites}></PokemonCard>
              ): <CircularProgress/>
            }
            </div>
            </div>
            
            
        </>
    )
}