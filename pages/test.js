import{useRouter} from 'next/router';

function Test (){
    const router = useRouter();
    const goHome = ()=>{
        router.push('/');
    }
    return (
    <div>
        <h1>You are in Test Component!</h1>
        <button onClick={goHome}>Go back to Home</button>
    </div>
    
    )
}
export default Test