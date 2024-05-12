import React from 'react'
import MyInfo from './MyInfo'
import Image from 'next/image'

function LandingPage() {
  return (
    <div className='landingPage grid md:grid-cols-2 gap-2 grid-rows-1 h-full w-full' >
      <MyInfo/>
      <Image src={'/images/profilepic.JPG'} alt='nothing' width={100} height={100} />
     </div>
  )
}

export default LandingPage
