import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  const goToCard = ()=>{
    router.push('/renderer')
  }

  const goDynamicRouting = ()=>{
    router.push('/home');
  }
  return (
    <div>
      <button onClick={goDynamicRouting}>Go to DynamicRouting</button>
      <button onClick={goToCard}>Go to Renderer</button>
    </div>
  );
}
