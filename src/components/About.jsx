import React from 'react'
// import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles';
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
const About = () => {
//   // console.log(services)
  const ServiceCard=({service,index})=>{
    // var index=service.index
    return (
      // <Tilt className='xs:w-[250px] w-full'>
        <motion.div varients={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px shadow-card'>
<div options={{max:45,
scale:1,
speed:450}} className='bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px]'>

</div>
        </motion.div>
    )
  }
  const SERVICE=()=>{
    // console.log(services.map((i)=>i.title))
    return (
      <>
      {services.map((servicei,index)=>{
        return(
          <ServiceCard service={servicei} key={servicei.title} index={index} />
        )
      })}
      </>
    )
  }
  return (
    <>
       <motion.div varients={textVariant()} id='about'> 
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p  variants={fadeIn("",""<0.1,1)} className='About-into About-intros max-w-3xl leading-3'>
      {/* <p className='About-into'/> */}
        Hello, I am a Full Stack Developer with over two years of experience in building Web Applications using various technologies and frameworks. I have expertise in both front-end and back-end development, as well as database design and deployment. I enjoy creating user-friendly, responsive and secure websites that meet the needs and expectations of my clients. Some of the skills and tools I use include HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Dart, Firebase and more. I am always eager to learn new things and improve my existing skills. I am also a team player who can collaborate effectively with other developers and stakeholders. I am looking for new opportunities to work on challenging and exciting projects that can make a positive impact on the world.
        {/* </p> */}

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        <SERVICE/>
      </div> 
    </>
  )
}

export default About