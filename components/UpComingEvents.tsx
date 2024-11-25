import CountdownTimer from '@/libs/CountdownTimer'
import { isDateInPast } from '@/libs/helper'
import Image from 'next/image'
import React from 'react'

function UpComingEvents({countdownDate,titleEvent,dateEvent} : {countdownDate : Date,titleEvent:string,dateEvent:string}) {
  return (
    <section className="relative w-full h-[400px] xl:h-full flex justify-center items-center ">
    <div className="bg-black absolute bg-opacity-70 z-10  w-full h-full"></div>
    <Image fill src={'/assets/merryChristmas.avif'} alt="merryChristmas" /> 
    <div className="absolute text-black p-5 flex flex-col justify-center  xl:justify-between items-center  bg-opacity-60 xl:w-[27rem] xl:h-[20rem] mx-auto my-auto z-20 inset-0">
        <div className="font-bebas_neue text-4xl md:text-5xl text-shadow font-semibold text-white tracking-widest ">
        <h1>UP COMING EVENT</h1>
        </div>
        
        {
    !isDateInPast(countdownDate) &&
    <CountdownTimer
      deadline={countdownDate}
      
    />
  }

        <div className="font-luckiest_guy text-center text-white text-2xl  xl:text-3xl text-shadow">

        <h1>{titleEvent} </h1>
        <p>{dateEvent}</p>
        </div>
    </div>
  </section>
  )
}

export default UpComingEvents