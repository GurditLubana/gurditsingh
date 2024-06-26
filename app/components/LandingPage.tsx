import React from 'react'
import MyInfo from './MyInfo'
import Image from 'next/image'

function LandingPage() {
  return (
    <div id="home" className='landingPage grid md:grid-cols-2 gap-2 grid-rows-1 h-full w-full' >
      <Image src={'/images/profilepic.JPG'} alt='nothing' width={500} height={900} className='order-1 mt-16 md:order-2 2xl:xxl-profilePic'/>
      <MyInfo classProp ='order-2 md:order-1'/>
     </div>
  )
}

export default LandingPage
