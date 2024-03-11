import Image from "next/image";
import OffCanvas from "./ui/OffCanvas";
import { ImagesSlider } from "./ui/image-slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="headerPrincipal h-[90px] min-h-[90px] border-b-[1px] flex justify-between items-center">
        <figure className="w-30 max-h-full h-full flex justify-center items-center"> {/* Ajusta el tamaño del figure */}
          <Image 
            src="/assets/icons/logo.png" 
            alt="logo" 
            height={70}
            width={70}
            objectFit="cover" 
            quality={100} 
          />   
          <h1 className="text-white ml-2">MyAgenda</h1>     
        </figure>
        <div className="flex justify-center items-center mr-3 ">
          <OffCanvas />
        </div>
      </section>
      <section className="h-[300px] relative">
        <ImagesSlider
          images={[
            "/assets/images/carrusel1.jpeg",
            "/assets/images/carrusel2.jpeg",
            "/assets/images/carrusel3.jpeg"
          ]}
          autoplay={true}
          direction='up'
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
          <h2 className="h2 text-center">MyAgenda</h2>
          <h3 className="h3 text-center">Tu aplicación deportiva favorita</h3>
        </div>
      </section>
      

    </main>
  );
}
