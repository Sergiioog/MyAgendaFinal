"use client"
import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';


export default function Example() {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Por favor, seleccione un día</p>;
  if (selected) {
    footer = <p className='text-white mt-10'>Has elegido el {format(selected, 'PP')}.</p>;
  }



  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={es}
      modifiersStyles={{
        selected: { backgroundColor: 'blue', color: 'white' },
        today: { fontWeight: 'bold' }
      }}
    />
  );
}
