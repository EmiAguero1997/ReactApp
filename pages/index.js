import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter();
  const goToCard = ()=>{
    router.push('/renderer')
  }
  return (
    <div>
      <h1>Hola mundo!</h1>
      <button onClick={goToCard}>Go to Renderer</button>
    </div>
  )
}
