import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter();
  const goToText = () =>{
    router.push('/test');
  }
  return (
    <div>
      <h1>Hola mundo!</h1>
      <button onClick={goToText}>Go to Test</button>
    </div>
  )
}
