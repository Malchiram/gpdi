import React, { ReactNode } from 'react'

interface Cards {
    title : string
    subTitle : string
    description : string
    icon : ReactNode
}

function Cards({title,subTitle,description,icon} : Cards) {
  return (
    <div className='relative w-[80%] my-auto xl:w-[30%]  h-[75%]'>
      <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded blur opacity-75'></div>
    <div className="rounded w-full h-full relative       bg-slate-300 text-black p-4">
      
    <div className="  flex items-center gap-x-2">
    {icon}
    <div className="grow flex flex-col leading-4 ">

        <p className="font-semibold font-serif">{title}</p>
        <p className="text-xs font-sans">{subTitle}</p>
    </div>
    </div>
    <div className=" text-xs">
    {description}
    </div>
</div>
    </div>
  )
}

export default Cards