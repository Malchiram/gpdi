
// import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='  h-[70vh] relative xl:h-screen    ' >
      <div className='bg-[rgb(36, 59, 85)]  absolute w-full h-[20%] -bottom-12 blur-3xl opacity-65 '>

      </div>
        <video autoPlay loop muted className='absolute top-0 left-0 sm:scale-100  -z-20 w-full h-full object-fill'>
          <source src='/assets/background.mp4' type='video/mp4' />
        </video>
        <div className=' mx-auto h-full w-full flex flex-col justify-center items-center z-10 relative'>
            <div className='  w-[80%] text-center leading-tight text-[2.4rem] sm:text-[2.7rem] md:text-[4rem] lg:text-[7rem]  '>
            <p className="small rise">GPdI Shekinah</p>
            </div>
            <div className='text-center text-sm md:text-lg lg:text-xl xl:text-2xl absolute bottom-5 font-merriweather '>
              <p>Gembala Sidang : Pdt Jenty Lydia Magdalena Siahaan</p>
            </div>
        </div>


    </section>
  )
}

export default Hero