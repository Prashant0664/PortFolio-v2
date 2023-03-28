import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import Tilt from "react-parallax-tilt";
import {CodeBracketIcon, CommandLineIcon, ComputerDesktopIcon, CodeBracketSquareIcon} from "@heroicons/react/24/outline"


const About = () => {


  const ServiceCard = ({ service, index }) => {
    var logo=<img src={service.icon} className='codebracketicon'/>
    var si=service.index;
    if(si===1){
      logo=<CodeBracketIcon className='codebracketicon'/>
    }
    else if(si===2){
      logo=<CommandLineIcon className='codebracketicon'/>
    }
    else if(si===3){
      logo=<ComputerDesktopIcon className='codebracketicon'/>
    }
    else{
      logo=<CodeBracketSquareIcon className='codebracketicon'/>
    }
   
   
    // const theObj = {__html:service.icon};

    
    return (
      <Tilt className='about-tilt-01 xs:w-[250px] w-full about-tilt-01'
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={1000}
        transitionSpeed={1300}
        scale={1}
        gyroscope={true}>
        <motion.div varients={fadeIn("right", "spring", 0.5 * index, 0.75)} className='about-tilt-02 about-tilt-02 w-full green-pink-gradient p-[1px] rounded-[20px shadow-card'>
          <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }} className='about-tilt-03 bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px]'>
            <div  className='danger-div-about'>
              {logo}
            </div>
            <div className='about-tilt-04'>
            {service.title}
            </div>
          </div>
        </motion.div>
      </Tilt>
    )
  }



  const SERVICE = () => {
    return (
      <>
        {services.map((servicei, index) => {
          return (
            <ServiceCard service={servicei} key={servicei.title} index={index} />
          )
        })}
      </>
    )
  }



  return (
    <>
      <motion.div varients={textVariant()} id='about'>
        <h2 className={`${styles.sectionHeadText} experiencep-02`}>
          Introduction
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "" < 0.1, 1)} className='About-into About-intros max-w-3xl leading-3'>
        Hello, I am a Full Stack Developer with over two years of experience in building Web Applications using various technologies and frameworks. I have expertise in both front-end and back-end development, as well as database design and deployment. I enjoy creating user-friendly, responsive and secure websites that meet the needs and expectations of my clients. Some of the skills and tools I use include HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Dart, Firebase and more. I am always eager to learn new things and improve my existing skills. I am also a team player who can collaborate effectively with other developers and stakeholders. I am looking for new opportunities to work on challenging and exciting projects that can make a positive impact on the world.
      </motion.p>
      <div className='service-parent mt-20 flex flex-wrap gap-10'>
        <SERVICE />
      </div>
    </>
  )
}

export default About