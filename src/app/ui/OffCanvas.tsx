"use client";
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Image from 'next/image';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2'
import Link from 'next/link';


const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer} className='w-auto h-auto p-0 border-none bg-transparent no-hover-effect'>
        <UseAnimations animation={menu2} size={40} fillColor='white' strokeColor='white' />      
      </Button>
      <Drawer onClose={onClose} open={open} footer='MyAgenda © All rights reserved' width={320}>
      <ul>
        <li className='h-8 mb-4 flex justify-start items-center'>
            <Image src={'../assets/icons/inicio.svg'} alt='Inicio' className='hover:cursor-pointer' width={29} height={28} />
            <Link href={"/"} className='list text-2xl ml-[6.5px] font-medium hover:cursor-pointer text-black'>
                Inicio
            </Link>
        </li>
        <li className='h-8 mb-4 flex justify-start items-center ml-[1.5px] '>
            <Image src={'../assets/icons/calendar.svg'} alt='Registros' className='hover:cursor-pointer' width={26} height={26} />
            <Link href={"/pages/registros"} className='list text-2xl ml-[6.5px] font-medium hover:cursor-pointer text-black'>
                Mis registros
            </Link>
        </li>
        <li className='h-8 mb-4 flex justify-start items-center'>
            <Image src={'../assets/icons/ejercicios.svg'} alt='Ejercicios' className='hover:cursor-pointer' width={28} height={28} />
            <Link href={"/pages/ejercicios"} className='list text-2xl ml-[6.5px] font-medium hover:cursor-pointer text-black'>
                Ejercicios
            </Link>
        </li>
        <li className='h-8 mb-4 flex justify-start items-center'>
            <Image src={'../assets/icons/estiramientos.svg'} alt='Estiramientos' className='hover:cursor-pointer' width={29} height={28} />
            <Link href={"/pages/estiramientos"} className='list text-2xl mt-1 ml-[6.5px] font-medium hover:cursor-pointer text-black'>
                Estiramientos
            </Link>
        </li>
        <li className='h-8 mb-4 flex justify-start items-center'>
            <Image src={'../assets/icons/usuario.svg'} alt='Usuarios' className='hover:cursor-pointer' width={32} height={28} />
            <Link href={"/pages/usuario"} className='list text-2xl mt-[2px] ml-[6.5px] font-medium hover:cursor-pointer text-black'>
                Usuario
            </Link>
        </li>
    </ul>
      </Drawer>
    </>
  );
};

export default App;