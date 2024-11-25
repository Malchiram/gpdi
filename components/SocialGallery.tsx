import React from 'react'
import Gallery from './Gallery'
import Address from './Address'

function SocialGallery() {
  return (
    <section className='w-full  overflow-visible   xl:grid    md:border-t-2 md:border-t-slate-600  md:grid-cols-2'>
        <Gallery />
        <Address />
    </section>
  )
}

export default SocialGallery