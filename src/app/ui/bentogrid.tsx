import React from "react";
import Image from "next/image";

export default function BentoGrid() {
    return (
        <section className="max-w-[90%] w-[90%] m-auto mt-5">
            <div className="bg-slate-100 w-full h-20 max-h-20 rounded-md relative overflow-hidden mb-3 flex justify-between flex-col">
              <div className="w-full h-10 bg-red-500 flex justify-start items-center pl-2  ">
                <Image src={"/"} alt="Imagen" height={10} width={10}/>
                <h4 className="ml-2">Hola</h4>
              </div>
                
            </div>
            <div className="bg-slate-100 w-full min-h-20 max-h-20 rounded-md relative overflow-hidden mb-3">
                <p>Hola</p>
            </div>
            <div className="bg-slate-100 w-full min-h-20 max-h-20 rounded-md relative overflow-hidden mb-3">
                <p>Hola</p>
            </div>
            <div className="bg-slate-100 w-full min-h-20 max-h-20 rounded-md relative overflow-hidden mb-3">
                <p>Hola</p>
            </div>
        </section>
    )
}