import React from "react";
import Image from "next/image";

export default function BentoGrid() {
    return (
        <section className="max-w-[90%] w-[90%] m-auto mt-10">
            <div className="item w-full h-auto mt-8 rounded-md relative overflow-hidden flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2">
                <Image src={"assets/icons/calendarbento.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold text-gray-50">Agenda para guardar entrenamientos.</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px]">
                <p className="text-xs text-neutral-400">
                  Un nuevo sistema de organización de rutinas y ejercicios que se adapta perfectamente a tus necesidades.
                </p>
              </div>
            </div>

            <div className="item w-full h-auto mt-4 rounded-md relative overflow-hidden flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2">
                <Image src={"assets/icons/stats.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold text-neutral-300">Estadísticas del usuario</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px]">
                <p className="text-xs text-neutral-300">
                  Descubre cómo mejorar tu rendimiento con datos precisos sobre tu actividad física y hábitos de entrenamiento.
                </p>
              </div>
            </div>

            <div className="item w-full h-auto mt-4 rounded-md relative overflow-hidden flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2">
                <Image src={"assets/icons/stretch.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold text-neutral-300">Sección de estiramientos</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px]">
                <p className="text-xs text-neutral-300">
                  Explora una amplia variedad de ejercicios diseñados para mejorar tu flexibilidad y prevenir lesiones.
                </p>
              </div>
            </div>

            <div className="item w-full h-auto mt-4 rounded-md relative overflow-hidden flex justify-between flex-col hover:translate-x-1 transition-transform duration-500 ease-in-out hover:cursor-pointer">
              <div className="w-full h-8 flex justify-start items-center p-2">
                <Image src={"assets/icons/gym.svg"} alt="Imagen" height={20} width={20}/>
                <h4 className="ml-[4px] text-sm font-bold text-neutral-300">Consulta tus ejercicios favoritos</h4>
              </div>
              <div className="w-full h-auto flex justify-start items-center font-semibold p-2 mt-[-7px]">
                <p className="text-xs text-neutral-300">
                  Encuentra tus rutinas preferidas y accede a ellas fácilmente para mantener un entrenamiento constante y efectivo.
                </p>
              </div>
            </div>

            
            
        </section>
    )
}