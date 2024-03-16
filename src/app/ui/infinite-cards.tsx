"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}

        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote: "Es una maravilla de aplicación, puedo usarla cuándo quiera, desde donde quiera.",
      name: "Sergio García",
    },
    {
      quote: "¡Increíble! Nunca pensé que fuera tan fácil mantenerme en forma desde casa.",
      name: "Laura Pérez",
    },
    {
      quote: "El gimnasio online ha cambiado mi vida. Ahora puedo hacer ejercicio sin excusas.",
      name: "Carlos Ruiz",
    },
    {
      quote: "Gracias al gimnasio online, he alcanzado mis objetivos de fitness sin salir de casa.",
      name: "María Rodríguez",
    },
  ];
  