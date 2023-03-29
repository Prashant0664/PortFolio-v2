import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
// import { img1 } from "./img.jpg"
// import { img2 } from "../assets";
import { styles } from "../styles";
import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { img3 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({states,changerev,change,index}) => {
  console.log(states);
  return (
    <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        

        <div className="card-work"  onMouseOver={()=>change(index)} onMouseOut={()=>changerev(index)}>
          <div className="imgBx-work">
            <img src={img3[0].img} />
            {/* can use date, texh used on hover along with desc */}
            <div className={true?'content-head-word2':'constent-head-work'}>
              <h2 className="content-p-work">Card Three</h2>
              <p className=''>HTML, CSS, JAVASCRIPT, MERN, FIREBASE</p>
            </div>
          </div>
          <div className="content-work">

            <p className="content-p-work">kjtrbvbntrjjjbgvntrkgv jbktrjgvktrjnvrtnbvn gtjkvnbykntv</p>
          </div>
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  
  var DEMO="DEMO";
  var arr=[
    {
      img:img3[0].img,
      name:DEMO,
    },
    
    {
      img:img3[0].img,
      name:DEMO,
    },
    
    {
      img:img3[0].img,
      name:DEMO,
    },

  ];
  var statesi=[];
  const n=arr.length;
  var [states,setstates]=React.useState([]);
  for(var ih=0;ih<n;ih++){
    statesi.push(false);
  }
  React.useEffect(()=>{for(var ih=0;ih<n;ih++){
    setstates(states=>[...states,statesi[ih]])
  }},[])
  const change=(m)=>{
    setstates((mm)=>{[...statesi,statesi[mm]=true]})
  }
  const changerev=(m)=>{
    setstates((mm)=>{[...statesi,statesi[mm]=false]})
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText}  works-m1`}>My work</p> */}
        <h1 className={`${styles.sectionHeadText} works-m2`}>Projects</h1>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          My projects overview for my portfolio website:<br />As a software and web developer, I have worked on various projects that showcase my skills and creativity. Here are some of the highlights of my portfolio:
        </motion.p>
      </div>

      <div className='container-work mt-20 flex flex-wrap gap-7'>
        
        
        
        {arr.map((i,j)=>{console.log(i,j);console.log(states);  return (<ProjectCard states={states} changerev={changerev} change={change} index={j}/>)})}
        
        
        
        <div className="card-work"  onMouseOver={()=>change()} onMouseOut={()=>changerev()}>
          <div className="imgBx-work">
            <img src={img3[0].img} />
            {/* can use date, texh used on hover along with desc */}
            <div className={states?'content-head-word2':'constent-head-work'}>
              <h2 className="content-p-work">Card Three</h2>
              <p className=''>HTML, CSS, JAVASCRIPT, MERN, FIREBASE</p>
            </div>
          </div>
          <div className="content-work">


            <p className="content-p-work">kjtrbvbntrjjjbgvntrkgv jbktrjgvktrjnvrtnbvn gtjkvnbykntv</p>
          </div>
        </div>
        <div className="card-work">
          <div className="imgBx-work">
            <img src={img3[0].img} />
            <h2 className="content-p-work">Card Three</h2>
          </div>
          <div className="content-work">
            <p className="content-p-work">kjtrbvbntrjjjbgvntrkgv jbktrjgvktrjnvrtnbvn gtjkvnbykntv</p>
          </div>
        </div>
        <div className="card-work">
          <div className="imgBx-work">
            <img src={img3[0].img} />
            <h2 className="content-p-work">Card Three</h2>
          </div>
          <div className="content-work">
            <p className="content-p-work">kjtrbvbntrjjjbgvntrkgv jbktrjgvktrjnvrtnbvn gtjkvnbykntv</p>
          </div>
        </div>
        <div className="card-work">
          <div className="imgBx-work">
            <img src={img3[0].img} />
          </div>
          <div className="content-work">
            <h2 className="content-p-work">Card Three</h2>
            <p className="content-p-work">kjtrbvbntrjjjbgvntrkgv jbktrjgvktrjnvrtnbvn gtjkvnbykntv</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;