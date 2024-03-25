import Header from "../../ui/header"
import Image from "next/image"

export default function MisRegistros() {
    return(
        <main className="min-h-screen">
            <Header />
            <section className="h-auto w-full relative">
                <h3 className="h3 text-center mt-10 w-3/4 m-auto">Informacion sobre estiramientos por grupo muscular</h3>
                <section className="w-full mt-8 grid justify-center items-center grid-cols-2 md:grid-cols-3 md:grid-rows-2  ">
                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/pecho.png"} alt="Pecho foto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/espalda.png"} alt="Espalda foto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform overflow-hidden duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/abd.png"} alt="Abdominales foto" height={200} width={150} />
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <div className="hombroGrande">
                            <Image
                                src={"/assets/images/hombros.png"}
                                alt="Hombros foto"
                                height={200}
                                width={200}
                                className="hombroGrande"
                            />
                            </div>
                        </div>
                    </div>



                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/biceps.png"} alt="Biceps foto"  height={200}
                                width={200}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/triceps.png"} alt="Triceps foto" fill={true}/>
                        </div>
                    </div>

                    
                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/antebrazos.png"} alt="Antebrazos foto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/gluteos.png"} alt="Gluteos foto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/cuadriceps.png"} alt="Cuadriceps foto" fill={true}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/musc.png"} alt="Musculos foto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/isquios.png"} alt="Isquios foto" fill={true}/>
                        </div>
                    </div>

                    <div className="w-full h-auto p-8 flex flex-col justify-center items-center">
                        <div className="porqueBox w-36 h-36 flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:cursor-pointer hover:scale-105">
                            <Image src={"/assets/images/gemelos.png"} alt="Gemelos foto" fill={true}/>
                        </div>
                    </div>

                    </section>
            </section>
        </main>
    )
}