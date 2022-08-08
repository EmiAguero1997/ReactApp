import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home(){
    const axios = require("axios").default;
    const [apiData, setApiData] = useState();
    
    const getData = async ()=> {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
          .then((response) => {
            setApiData(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
          
    }
    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <Head>
                <title>Pokemons</title>
            </Head>
            <ul>
                {
                    apiData && apiData.map((item)=>(
                        <Link href={`/pokemons/${item.name}`} key={item.name} name={item.name}>{item.name}</Link>
                    ))
                }
            </ul>
        </>
    )
}