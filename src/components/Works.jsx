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

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
          My projects overview for my portfolio website:<br/>As a software and web developer, I have worked on various projects that showcase my skills and creativity. Here are some of the highlights of my portfolio:
        </motion.p>
      </div>

      <div className='container-work mt-20 flex flex-wrap gap-7'>
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