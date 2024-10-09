import React from 'react'
import SectionOne from '../Common/SectionOne'
import SectionTwo from '../Common/SectionTwo'
import SectionThree from '../Common/SectionThree'

const Main = () => {
  return (
    <div className='container flex flex-col justify-center items-center'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  )
}

export default Main