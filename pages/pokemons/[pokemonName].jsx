import Card from '../card';
import {useRouter} from 'next/router';

export default function Cards(){
    const router = useRouter();
    const {pokemonName} = router.query;
    const axios = require('axios').default;
    
    return(
        <>
            <h2>{pokemonName}</h2>
            <Card></Card>
        </>
    )
}