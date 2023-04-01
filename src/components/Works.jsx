import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { img3 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, states, changerev, change, index }) => {
  var [sss,csss]=React.useState(false);
  const change2=()=>{
    csss(sss=true);
  }
  const changer2=()=>{
    csss(sss=false);
  }
  // console.log(project)
  var mmm = true;
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
        {/* <a href={project.source_code_link} */}
        <div className="card-work" onMouseOver={() => { change(index); mmm = !mmm; change2(); }} onMouseLeave={() => {changerev(index);changer2();}}>
          <div className="imgBx-work">
            <img src={project.image} className="img-work2" />
            
            <div className={states[index] ? 'content-head-word2 jfkxdkn' : 'constent-head-work jfkxdkn'}>
              <h2 className="content-p-work">{project.name}</h2>
              <p className={sss ? 'content-p2-work techn' : 'content-p2-work2 techn'}>{project.tech}</p>
            </div>
          </div>
          <div className="content-work">
            <p className="content-p-work">{project.description}</p>
          </div>
          <a href={project.source_code_link} className={sss?"work-linkk2":"work-linkk"}>Source code</a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  var DEMO = "DEMO";
  var arr = [
    {
      img: img3[0].img,
      name: DEMO,
    },

    {
      img: img3[0].img,
      name: DEMO,
    },

    {
      img: img3[0].img,
      name: DEMO,
    },

  ];
  var statesi = [];
  const n = arr.length;
  // var [states,setstates]=React.useState([]);
  React.useEffect(() => {
    for (var ih = 0; ih < n; ih++) {
      statesi.push(false);
    }
  }, [])
  // React.useEffect(()=>{for(var ih=0;ih<n;ih++){
  //   setstates(states=>[...states,statesi[ih]])
  // }},[])
  const change = (m) => {
    statesi[m] = true;
    // console.log("--", statesi);
    // setstates((mm)=>{[...statesi,statesi[mm]=true]})
  }
  const changerev = (m) => {
    statesi[m] = false;
    // console.log("++", statesi);
    // for(var ih=0;ih<n;ih++){
    //   statesi[ih]=false;
    // }
    // setstates((mm)=>{[...statesi,statesi[mm]=false]})
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



        {projects.map((i, j) => { return (<ProjectCard key={Math.random()} project={i} states={statesi} changerev={changerev} change={change} index={j} />) })}



        {/* <div className="card-work"  onMouseOver={()=>change()} onMouseOut={()=>changerev()}>
          <div className="imgBx-work">
            <img src={img3[0].img} />
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
        </div> */}
      </div>
    </>
  );
};

export default Works;