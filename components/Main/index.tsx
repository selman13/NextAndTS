import React from 'react'
import SectionOne from '../Common/SectionOne'
import SectionTwo from '../Common/SectionTwo'
import SectionThree from '../Common/SectionThree'
import SectionFour from '../Common/SectionFour'
import SectionFive from '../Common/SectionFive'
import SectionSix from '../Common/SectionSix'

const Main = () => {
  return (
    <div className='container flex flex-col justify-center items-center'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
    </div>
  )
}

export default Main