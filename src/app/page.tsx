import Image from "next/image";
import Header from "./ui/header";
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
      <Header />
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
            <SocialButton 
              width={115}
              height={35}
              borderRadius={15}
              backgroundColor={"rgba( 32, 29, 29, 0.35 )"}
              boxShadowRound={16}
              colorShadow={"rgba(222, 222, 227, 0.37)"}
              backdropFilter={7.5}
              icon={"/assets/icons/github.svg"}
              text={"GitHub"}
              alt={"GitHub button"}
              border={"1"} 
              colorBorder={" rgba( 255, 255, 255, 0.18 )"}  
              textColor="rgba(247, 243, 243, 0.795)"          
            />

            <SocialButton 
              width={115}
              height={35}
              borderRadius={15}
              backgroundColor={"rgba( 1, 88, 255, 0.35 )"}
              boxShadowRound={16}
              colorShadow={"rgba(222, 222, 227, 0.37)"}
              backdropFilter={7.5}
              icon={"/assets/icons/linkedin.svg"}
              text={"LinkedIn"}
              alt={"LinkedIn button"}
              border={"1"} 
              colorBorder={" rgba( 255, 255, 255, 0.18 )"}  
              textColor="rgba(247, 243, 243, 0.795)"          
            />

            <SocialButton 
              width={115}
              height={35}
              borderRadius={15}
              backgroundColor={" rgba( 91, 150, 255, 0.35 )"}
              boxShadowRound={16}
              colorShadow={"rgba(222, 222, 227, 0.37)"}
              backdropFilter={7.5}
              icon={"/assets/icons/twitter.svg"}
              text={"Twitter"}
              alt={"Twitter button"}
              border={"1"} 
              colorBorder={" rgba( 255, 255, 255, 0.18 )"}  
              textColor="rgba(247, 243, 243, 0.795)"          
            />
            
          

            
           
          </section>
      </section>
      <section className="w-[100%] p-0 m-0 mt-24 ">
        <FooterComponent />
      </section>
    </main>
  );
}
