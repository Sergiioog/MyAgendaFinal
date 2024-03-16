import React from "react";
import Image from "next/image";

export default function BentoGrid() {
    return (
        <section className="max-w-[90%] w-[90%] m-auto mt-5">
            <div className="item w-full h-auto  rounded-md relative overflow-hidden mb-3 flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2 ">
                <Image src={"assets/icons/calendarbento.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold">Agenda para guardar tus entrenamientos.</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px]  ">
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquepprehenderit, eaque officiis? Ipsa, error?</p>
              </div>
            </div>
            <div className="item w-full h-auto  rounded-md relative overflow-hidden mb-3 flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2 ">
                <Image src={"assets/icons/calendarbento.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold">Agenda para guardar tus entrenamientos.</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px] ">
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquepprehenderit, eaque officiis? Ipsa, error?</p>
              </div>
            </div>
            <div className="item w-full h-auto  rounded-md relative overflow-hidden mb-3 flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2 ">
                <Image src={"assets/icons/calendarbento.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold">Agenda para guardar tus entrenamientos.</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px] ">
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquepprehenderit, eaque officiis? Ipsa, error?</p>
              </div>
            </div>
            <div className="item w-full h-auto  rounded-md relative overflow-hidden mb-3 flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2 ">
                <Image src={"assets/icons/calendarbento.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold">Agenda para guardar tus entrenamientos.</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px] ">
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiquepprehenderit, eaque officiis? Ipsa, error?</p>
              </div>
            </div>
        </section>
    )
}