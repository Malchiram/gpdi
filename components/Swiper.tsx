'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCaraouselArrowButton' 
import Image, { StaticImageData } from 'next/image'

export type propImage = {
  src:StaticImageData
  alt:string
}
type PropType = {
  slides?: number[]
  imagesType?:propImage[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { imagesType, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla  w-full px-4 ">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container w-[100%] flex  gap-x-1 ">
          {imagesType?.map((e,index) => (
            <div className="embla__slide w-[100%]   relative aspect-[16/9] md:aspect-[6/3] lg:aspect-[8/4] xl:aspect-[16/9]  md:p-0 " key={index}>
              <Image src={e.src} alt={e.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            // <div className="embla__slide  p-3 md:p-0 " key={index}>
            //   <Image src={e.src} alt={e.alt} width={600}  height={600} className='rounded-3xl w-[28rem] h-[13rem] md:w-[60rem] md:h-[28rem] mx-auto  ' />
            // </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs  w-full   md:h-full ">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="flex     gap-x-2 xl:gap-x-3 ">
            {imagesType?.map((e,index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imagesSrc={e.src}
                imageAlt={e.alt}
              
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
