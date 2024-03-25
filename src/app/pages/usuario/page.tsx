import Header from "../../ui/header"
import Image from "next/image"

export default function MisRegistros() {
    return(
        <main className="min-h-screen">
            <Header />
            <section className="h-auto w-full relative ">
                <div className="h-32 relative">
                    <Image src={"/assets/images/banner.jpg"} alt="Banner" layout="fill" objectFit="cover" />
                </div>

                <div className="profile  bg-white h-[100vh] flex items-center flex-col z-30 relative">
                <div className="z-20 h-32 w-32 rounded-full flex justify-center items-center mt-[-70px] relative">
                    <Image src={"/assets/images/fotodummy.png"} className="rounded-full" alt="Foto de usuario" layout="fill" objectFit="cover" />
                    <div className="profile2pic h-10 w-10 border-2 flex justify-center items-center rounded-full mt-[120px] relative z-20">
                        <Image src={"/assets/icons/lapiz.svg"} alt="Lapiz" height={20} width={20} />
                    </div>
                   
                </div>
                <div className="h-auto absolute w-full  bg-red-500 flex justify-end items-center p-3">
                        <p className="z-30 relative bg-white">Hola</p>
                    </div>
                  
                </div>

            </section>
        </main>
    )
}