import React from 'react'
import MyInfo from './MyInfo'
import Image from 'next/image'

function LandingPage() {
  return (
    <div className='mt-16 landingPage grid md:grid-cols-2 gap-2 grid-rows-1 h-full w-full' >
      <Image src={'/images/profilepic.JPG'} alt='nothing' width={600} height={1200} className='order-1 md:order-2'/>
      <MyInfo classProp ='order-2 md:order-1'/>
     </div>
  )
}

export default LandingPage
