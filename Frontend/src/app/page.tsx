import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <h1>Examen II</h1>

     <Link href='/graficolineal'>Ir al grafico de valor promedio de productos por categoría</Link> 
     <Link href='/graficopie' > Ir al grafico de productos por marca</Link>
    
    </div>
  );
}
