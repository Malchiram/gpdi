import Image from 'next/image'
import React from 'react'
import { BiChurch } from 'react-icons/bi'
import { FaPrayingHands } from 'react-icons/fa'
import { FaHandshakeSimple } from 'react-icons/fa6'
import Cards from './Cards'

function Ads() {
  return (
    <section className='w-full  flex justify-center  gap-2  xl:h-56   '>
      <div className="w-full items-center  xl:w-[66.2%] flex flex-col xl:flex-row  gap-x-4 gap-y-2 my-3 justify-center">
        <Cards
          title="Connectivity"
          subTitle="What to expect"
          icon={<BiChurch size={40} />}
          description="Experience meaningful connections through faith, build lasting relationships, grow spiritually, and join a community united in love and purpose."
        />
        <Cards
          title="Prayer"
          subTitle="What to expect"
          icon={<FaPrayingHands size={40} />}
          description="Experience a sacred space for reflection, guided prayers, personal connection with God, and a community that supports and uplifts through faith."
        />
        <Cards
          title="Community"
          subTitle="What to expect"
          icon={<FaHandshakeSimple size={40} />}
          description="Find a welcoming family where you can build meaningful relationships, share in fellowship, grow in faith, and serve together with love and purpose."
        />
      </div>

      <div className="hidden xl:flex grow relative  justify-center items-center ">
        <div className="bg-black bg-opacity-80 absolute w-full h-full z-10"></div>
        <Image src={"/assets/second_image.webp"} fill alt="second_image" />
        <div className=" w-[60%] mx-auto absolute z-20">
          <h3 className="text-center font-sans text-lg ">Roma 11:36</h3>
          <p>
            Sebab segala sesuatu adalah dari Dia, dan oleh Dia, dan kepada Dia:
            Bagi Dialah kemuliaan sampai selama-lamanya!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Ads