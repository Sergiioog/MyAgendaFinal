import Header from "../../ui/header"
import Example from "@/app/ui/calendar"


export default function MisRegistros() {
    return(
        <main className="min-h-screen">
            <Header />
            <section className="h-auto w-full relative">
                <h3 className="h3 text-center mt-10">Bienvenido a tu calendario, Sergio</h3>
                <div id="container" className="p-6 flex justify-center items-center">
                    <Example  />
                </div>
            </section>
        </main>
    )
}