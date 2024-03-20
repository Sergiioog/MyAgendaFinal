import Image from "next/image";
import OffCanvas from "./ui/OffCanvas";
import { ImagesSlider } from "./ui/image-slider";
import PrimaryButton from "./ui/button1";
import { GlobeDemo } from "./ui/globe2";
import BentoGrid from "./ui/bentogrid";
import { InfiniteMovingCardsDemo } from "./ui/infinite-cards";
import SocialButton from "./ui/SocialButton";
import FooterComponent from "./ui/Footer";

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
      <section className="h-auto w-full relative mt-14">
        <h3 className="h3-secciones text-center">Qué es MyAgenda</h3>
        <p className="textos mt-8 max-w-[90%] w-[90%] m-auto  " >My agenda es una aplicacion que sirve para que los usuarios 
          de gimnasio puedan realizar sus registros personales. 
        </p>
        <br />
        <p className="textos max-w-[90%] w-[90%] m-auto  mt-2" >
          A medida
          que se van rellenando estos registros, el usuario podrá ver sus estadísticas
          las cuáles va a ver si se desarrolla correctamente y si está ganando masa muscular.
        </p>
        <div className="w-full flex justify-center items-center mt-5">
          <PrimaryButton />
        </div>
      </section>

      <section className="h-auto w-full relative  mt-24 ">
        <h3 className="h3-secciones text-center">MyAgenda, características</h3>
        <BentoGrid />
      </section>

      <section className="h-auto w-full relative mt-24 ">
        <GlobeDemo />
      </section>
      <section className="h-auto w-full relative mt-[-80px]">
        <h3 className="h3-secciones text-center">Opiniones de nuestros usuarios.</h3>
        <InfiniteMovingCardsDemo />
      </section>
      <section className="h-auto w-full relative mt-24">
        <h3 className="h3-secciones text-center">Por qué MyAgenda</h3>
        <p className="textos max-w-[90%] w-[90%] m-auto text-center  mt-6" >
          Estas son las razones por las cuáles nuestros usuarios utilizan la aplicación.
        </p>
        <section className="w-full mt-8 grid justify-center items-center grid-cols-2 md:grid-cols-3 md:grid-rows-2  ">
          <div className=" w-full h-auto p-8 flex flex-col justify-center items-center">
            <div className="porqueBox w-16 h-16 flex justify-center items-center">
              <Image src={"assets/icons/calendarbento.svg"} alt="Calendario icono" height={40} width={40}/>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-300 w-full ">Con nuestra agenda podrás registrar tu actividad física</p>

          </div>

          <div className=" w-full h-auto p-8 flex flex-col justify-center items-center ">
            <div className="porqueBox w-16 h-16 flex justify-center items-center">
              <Image src={"assets/icons/gym.svg"} alt="Calendario icono" height={40} width={40}/>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-300 w-full ">Con nuestra agenda podrás registrar tu actividad física</p>
          </div>

          <div className=" w-full h-auto p-8 flex flex-col justify-center items-center ">
            <div className="porqueBox w-16 h-16 flex justify-center items-center">
              <Image src={"assets/icons/gym2.svg"} alt="Calendario icono" height={40} width={40}/>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-300 w-full ">Con nuestra agenda podrás registrar tu actividad física</p>
          </div>

          <div className=" w-full h-auto p-8 flex flex-col justify-center items-center ">
            <div className="porqueBox w-16 h-16 flex justify-center items-center">
              <Image src={"assets/icons/book.svg"} alt="Calendario icono" height={40} width={40}/>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-300 w-full ">Con nuestra agenda podrás registrar tu actividad física</p>
          </div>

          <div className=" w-full h-auto p-8 flex flex-col justify-center items-center ">
            <div className="porqueBox w-16 h-16 flex justify-center items-center">
              <Image src={"assets/icons/corazon.svg"} alt="Calendario icono" height={40} width={40}/>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-300 w-full ">Con nuestra agenda podrás registrar tu actividad física</p>
          </div>

          <div className=" w-full h-auto p-8 flex flex-col justify-center items-center ">
            <div className="porqueBox w-16 h-16 flex justify-center items-center">
              <Image src={"assets/icons/stats.svg"} alt="Calendario icono" height={40} width={40}/>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-300 w-full ">Con nuestra agenda podrás registrar tu actividad física</p>
          </div>

        </section>
      </section>
        
      <section className="w-[100%] mt-24 flex flex-col justify-center m-auto items-center flex-wrap">
        <h3 className="h3-secciones text-center">MyAgenda, tu aplicación favorita</h3>
        <section className="w-full flex justify-center items-center mt-8">
            <Image src={"/assets/mock/mockmob/mobilem.png"} alt="Movil" height={400} width={400} />
        </section>
        <section className="w-full flex justify-center items-center mt-8">
            <Image src={"/assets/mock/mocktab/tabletmob.png"} alt="Tablet" height={300} width={300} />
        </section>
        <section className="w-full flex justify-center items-center mt-8">
            <Image src={"/assets/mock/mockdesk/laptopmob.png"} alt="Movil" height={400} width={380} />
        </section>
      </section>
      <section className="max-w-[90%] w-[90%] m-auto mt-24 ">
        <h3 className="h3-secciones text-center">¡Síguenos en nuestras redes sociales!</h3>
          <section className="w-full mt-8 flex justify-center items-center flex-1 flex-wrap">
            <SocialButton />
            <SocialButton />
            <SocialButton />
            <SocialButton />
          </section>
      </section>
      <section className="w-[100%] p-0 m-0 mt-24 ">
        <FooterComponent />
      </section>
    </main>
  );
}
