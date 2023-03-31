import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
    <div className="feedback-body">

    <div className="container-feedback">
        <div className="card-feedback">
        <div className="feedback-lines">
              
              </div>
              <div className="feedback-imgBx">
                <img src={testimonials[0].image} className=""/>
            </div>
            <div className="feedback-content">
              <div className='feedback-details'>
                <h2 className="feedback-h1a">Design</h2>
                <p className="feedback-pa">{testimonials[0].testimonial}</p>
                <a hrej="#">View Source</a>
              </div>
            </div>
        </div>
      </div>
      <div className="container-feedback">
        <div className="card-feedback">
        <div className="feedback-lines">
              
              </div>
              <div className="feedback-imgBx">
                <img src={testimonials[0].image} className=""/>
            </div>
            <div className="feedback-content">
              <div className='feedback-details'>
                <h2 className="feedback-h1a">Design</h2>
                <p className="feedback-pa">jhvjmjvhjvjuyhjy vgbvuybv khivh hiychj hyc juycj buycjbguycj bhyc bjgtcuj </p>
                <a hrej="#">View Source</a>
              </div>
            </div>
        </div>
      </div>
      <div className="container-feedback">
        <div className="card-feedback">
        <div className="feedback-lines">
              
              </div>
              <div className="feedback-imgBx">
                <img src={testimonials[0].image} className=""/>
            </div>
            <div className="feedback-content">
              <div className='feedback-details'>
                <h2 className="feedback-h1a">Design</h2>
                <p className="feedback-pa">{testimonials[0].testimonial}</p>
                <a hrej="#">View Source</a>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Feedbacks;