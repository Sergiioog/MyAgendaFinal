"use client";
import { useState } from "react";

useState
interface Props {
    texto:string;
}
export default function ProfileButton({
    texto
}: Props) {

    const [mostrarConfig, setMostrarConfig] = useState(false);
    const handleClick = () => {
        console.log("hola"); // Imprime "hola" en la consola
        setMostrarConfig(true); 
    }

    return (
        <button onClick={handleClick} >{texto}</button>
    )
}