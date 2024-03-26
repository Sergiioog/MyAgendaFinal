import Header from "../../ui/header"
import Image from "next/image"
import ProfileButton from "@/app/ui/profilebutton"
import SectionDataProfile from "@/app/ui/sectiondataprofile"

export default function MisRegistros() {
    return(
        <main className="min-h-screen">
            <Header />
            <section className="h-auto w-full relative ">
                <div className="h-32 relative">
                    <Image src={"/assets/images/banner.jpg"} alt="Banner" layout="fill" objectFit="cover" />
                </div>

                <div className="profile bg-white h-[100vh] flex items-center flex-col z-30 relative">
                    <div className="z-20 h-32 w-32 rounded-full flex justify-center items-center mt-[-70px] relative">
                        <Image src={"/assets/images/fotodummy.png"} className="rounded-full" alt="Foto de usuario" layout="fill" objectFit="cover" />
                        <div className="profile2pic h-8 w-8 border-2 flex justify-center items-center rounded-full mt-[120px] relative z-20">
                            <Image src={"/assets/icons/lapiz.svg"} alt="Lapiz" height={20} width={20} />
                        </div>
                    
                    </div>
                    <div className="h-auto absolute w-full flex justify-end items-center p-3">
                        <ProfileButton />
                    </div>
                    <div className="h-auto absolute w-full flex justify-end items-center p-3 flex-col">
                        <p className="text-white text-2xl font-semibold z-30 mt-20 w-full flex justify-center items-center">Sergio García</p>
                        <p className="text-neutral-500 text-lg  font-semibold z-30 w-full flex justify-center items-center">@sergiioog || 1200 seguidores</p>
                        <div className="w-full hidden">
                            <SectionDataProfile />
                        </div>
                        <div className="max-h-[150px] h-[150px] w-full flex justify-start items-center mt-5 bg-neutral-800 rounded-md p-2 flex-col">
                            <p className="text-neutral-500 text-md  font-semibold z-30 w-full flex justify-start items-center ">Estado</p>
                            <p className="text-white w-full text-sm font-semibold ">Hola soy Sergio García y esto es una 
                            prueba de un posible estado para mi aplicacion. Me encanta hacer deporte e ir al gimnasio por lo
                            que esto me va a venir de perlas</p>
                        </div>
                        <div className="max-h-[400px] h-[400px] w-full flex justify-start items-center mt-5 bg-neutral-800 rounded-md p-2 flex-col">
                            <p className="text-neutral-500 text-md  font-semibold z-30 w-full flex justify-start items-center ">Estadísticas de Sergio</p>

                            
                        </div>
                    </div>

                    
                  
                </div>

            </section>
        </main>
    )
}