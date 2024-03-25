import Header from "../../ui/header"
import Image from "next/image"

export default function MisRegistros() {
    return(
        <main className="min-h-screen">
            <Header />
            <section className="h-auto w-full relative">
                <div className="h-32 relative">
                    <Image src={"/assets/images/banner.jpg"} alt="Banner" layout="fill" objectFit="cover" />
                </div>

                <div className="bg-white h-[100vh] flex items-center flex-col ">
                    <div className="bg-blue-200 z-20 h-32 w-32 rounded-full flex justify-center items-center mt-[-70px]">
                        <div className="bg-blue-400  h-10 w-10 flex justify-center items-center rounded-full  mt-[120px]">
                            <p>H</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}