import Image from "next/image"
export default function SectionDataProfile() {
    return (
        <div className="h-[300px] w-full flex  items-center mt-5 bg-neutral-800 rounded-md  flex-col">
        <div className="w-full h-auto p-2 ">
            <p className="text-neutral-500 text-md font-semibold z-30 w-full ">Información personal</p>
            {/* <div className="   "> grid justify-center items-center grid-cols-2 md:grid-cols-3 md:grid-rows-2 */}
           <div className="w-full max-h-full">
                <div className="mt-2 flex justify-start items-center">
                    <Image src={"/assets/icons/userprofile.svg"} alt="Icono perfil" height={25} width={25}/>
                    <p className="ml-1 text-white text-md font-semibold z-30 w-full">Datos del usuario</p>
                    <Image src={"/assets/icons/arrow.svg"} alt="Icono perfil" height={20} width={20}/>
                </div>
           </div>
           <hr className="mt-2"></hr>
           <div className="w-full max-h-full">
                <div className="mt-2 flex justify-start items-center">
                    <Image src={"/assets/icons/mobile.svg"} alt="Icono perfil" height={25} width={25}/>
                    <p className="ml-1 text-white text-md font-semibold z-30 w-full">Número de teléfono</p>
                    <Image src={"/assets/icons/arrow.svg"} alt="Icono perfil" height={20} width={20}/>
                </div>
           </div>
           <hr className="mt-2"></hr>
           <div className="w-full max-h-full">
                <div className="mt-2 flex justify-start items-center">
                    <Image src={"/assets/icons/flag.svg"} alt="Icono perfil" height={25} width={25}/>
                    <p className="ml-1 text-white text-md font-semibold z-30 w-full">País de procedencia</p>
                    <Image src={"/assets/icons/arrow.svg"} alt="Icono perfil" height={20} width={20}/>
                </div>
           </div>
           <hr className="mt-2"></hr>
           <div className="w-full max-h-full">
                <div className="mt-2 flex justify-start items-center">
                    <Image src={"/assets/icons/emailprofile.svg"} alt="Icono perfil" height={25} width={25}/>
                    <p className="ml-1 text-white text-md font-semibold z-30 w-full">Email</p>
                    <Image src={"/assets/icons/arrow.svg"} alt="Icono perfil" height={20} width={20}/>
                </div>
           </div>
           <hr className="mt-2"></hr>
           <div className="w-full max-h-full">
                <div className="mt-2 flex justify-start items-center">
                    <Image src={"/assets/icons/password.svg"} alt="Icono perfil" height={25} width={25}/>
                    <p className="ml-1 text-white text-md font-semibold z-30 w-full">Contraseña</p>
                    <Image src={"/assets/icons/arrow.svg"} alt="Icono perfil" height={20} width={20}/>
                </div>
           </div>
           <hr className="mt-2"></hr>
           <div className="w-full max-h-full">
                <div className="mt-2 flex justify-start items-center">
                    <Image src={"/assets/icons/analytics.svg"} alt="Icono perfil" height={25} width={25}/>
                    <p className="ml-1 text-white text-md font-semibold z-30 w-full">Tu actividad</p>
                    <Image src={"/assets/icons/arrow.svg"} alt="Icono perfil" height={20} width={20}/>
                </div>
           </div>
           <hr className="mt-2"></hr>
        </div>
    </div>
    )
}