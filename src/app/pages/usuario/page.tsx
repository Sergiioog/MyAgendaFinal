import Header from "../../ui/header"
import Image from "next/image"
import ProfileButton from "@/app/ui/profilebutton"

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
                        <p className="text-neutral-500 text-lg  font-semibold z-30 w-full flex justify-center items-center">@sergiioog</p>
                        <div className="h-[300px] w-full flex  items-center mt-5 bg-neutral-800 rounded-md  flex-col">
                            <div className="w-full h-auto p-2 ">
                                <p className="text-neutral-500 text-md font-semibold z-30 w-full ">Información personal</p>
                                {/* <div className="   "> grid justify-center items-center grid-cols-2 md:grid-cols-3 md:grid-rows-2 */}
                               <div className="w-full max-h-full">
                                    <div className="mt-2 flex justify-start items-center">
                                        <Image src={"/assets/icons/userprofile.svg"} alt="Icono perfil" height={25} width={25}/>
                                        <p className="ml-1 text-white text-md font-semibold z-30 w-full">Datos del usuario</p>
                                    </div>
                               </div>
                               
                               <div className="w-full max-h-full">
                                    <div className="mt-2 flex justify-start items-center">
                                        <Image src={"/assets/icons/mobile.svg"} alt="Icono perfil" height={25} width={25}/>
                                        <p className="ml-1 text-white text-md font-semibold z-30 w-full">Número de teléfono</p>
                                    </div>
                               </div>

                               <div className="w-full max-h-full">
                                    <div className="mt-2 flex justify-start items-center">
                                        <Image src={"/assets/icons/flag.svg"} alt="Icono perfil" height={25} width={25}/>
                                        <p className="ml-1 text-white text-md font-semibold z-30 w-full">País de procedencia</p>
                                    </div>
                               </div>

                               <div className="w-full max-h-full">
                                    <div className="mt-2 flex justify-start items-center">
                                        <Image src={"/assets/icons/emailprofile.svg"} alt="Icono perfil" height={25} width={25}/>
                                        <p className="ml-1 text-white text-md font-semibold z-30 w-full">Email</p>
                                    </div>
                               </div>

                               <div className="w-full max-h-full">
                                    <div className="mt-2 flex justify-start items-center">
                                        <Image src={"/assets/icons/password.svg"} alt="Icono perfil" height={25} width={25}/>
                                        <p className="ml-1 text-white text-md font-semibold z-30 w-full">Contraseña</p>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>

                    
                  
                </div>

            </section>
        </main>
    )
}