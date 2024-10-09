import Image from 'next/image'
import React from 'react'
import banner from '@/app/banner.svg'

const Banner = () => {
  return (
    <div>
    <Image src={banner} width={1920} height={1080} alt='banner'/>

    </div>
  )
}

export default Banner