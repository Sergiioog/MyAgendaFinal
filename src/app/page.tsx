import Image from "next/image";
import OffCanvas from "./ui/OffCanvas";
import { ImagesSlider } from "./ui/image-slider";
import PrimaryButton from "./ui/button1";
import { GlobeDemo } from "./ui/globe2";
import BentoGrid from "./ui/bentogrid";
import { InfiniteMovingCardsDemo } from "./ui/infinite-cards";
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
      <section className="h-auto w-full relative mt-10">
        <h3 className="h3-secciones text-center">Qué es MyAgenda</h3>
        <p className="textos mt-5 max-w-[90%] w-[90%] m-auto " >My agenda es una aplicacion que sirve para que los usuarios 
          de gimnasio puedan realizar sus registros personales. 
        </p>
        <br />
        <p className="textos max-w-[90%] w-[90%] m-auto " >
          A medida
          que se van rellenando estos registros, el usuario podrá ver sus estadísticas
          las cuáles va a ver si se desarrolla correctamente y si está ganando masa muscular.
        </p>
        <div className="w-full flex justify-center items-center mt-5">
          <PrimaryButton />
        </div>
      </section>
      <section className="h-auto w-full relative mt-10 ">
        <h3 className="h3-secciones text-center">MyAgenda, características</h3>
        <BentoGrid />
      </section>
      <section className="h-auto w-full relative mt-10">
        <GlobeDemo />
      </section>
      <section className="h-auto w-full relative mt-10">
        <h3 className="h3-secciones text-center">Opiniones de nuestros usuarios.</h3>
        <InfiniteMovingCardsDemo />
      </section>

    </main>
  );
}
