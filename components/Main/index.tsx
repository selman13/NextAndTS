import React from 'react'
import SectionOne from '../Common/SectionOne'
import SectionTwo from '../Common/SectionTwo'
import SectionThree from '../Common/SectionThree'
import SectionFour from '../Common/SectionFour'

const Main = () => {
  return (
    <div className='container flex flex-col justify-center items-center'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
    </div>
  )
}

export default Main