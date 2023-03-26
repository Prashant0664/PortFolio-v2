import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
// import Computers from './canvas/Computers'
import {ArrowDownIcon, ChevronDownIcon} from '@heroicons/react/24/outline'
import ComputersCanvas from './canvas/Computers'
const Hero = () => {
  return (
    <section className='hero-section relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} hero-div1 absolute inset-0 top-[120px] mx-auto max-w-7xl flex flex-row items-start gap-5`}>
        <div className='hero-div2 flex flex-col justify-center items-center mt-5'>
          <div className='hero-div3s'>
            <div>
              <div className='hero-div3 w-5 h-5 rounded-full bg-[#915eff]'>
              </div>
              <div className='hero-div3b w-1 sm:h-80 h-40'></div>
            </div>
            <div className='onvonws'>
              <div className='hero-div4 w-5 h-5 rounded-full bg-[#915eff]'>
              </div>
              <div className=' hero-div4b w-1 sm:h-80 h-40'></div>
            </div>
            <div className='jnvefd'>
              <div className='hero-div5 w-5 h-5 rounded-full bg-[#915eff]'>
              </div>
              <div className=' hero-div5b w-1 sm:h-80 h-40'></div>
            </div>
          </div>
        </div>
          <div className='hero-head-top'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hello! I am <span className='text-[#915eff] hero-h1span'>PRASHANT</span>, a <span className='hero-h1span'>SOFTWARE DEVELOPER</span>
            </h1>
            <p className='hero-subhead'>I develop Websites and Android Apps</p>
          </div>
      </div>
          <ComputersCanvas />
          <div className='hero-bc-01 bottom-32'>
            <a href="#about">
              <div className='hero-bc-02'>
                <ChevronDownIcon className='hero-bc-03'/>
                {/* <ChevronDownIcon className='hero-bc-03'/> */}
                {/* <ChevronDownIcon className='hero-bc-03'/> */}
              </div>
            </a>
          </div>
    </section>
  )
}

export default Hero