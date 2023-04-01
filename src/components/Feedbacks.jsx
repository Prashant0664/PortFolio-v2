import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  testimonial,index
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className="container-feedback">
          <div className="card-feedback">
            <div className="feedback-lines">

            </div>
            <div className="feedback-imgBx">
              <img src={testimonials[0].image} className="" />
            </div>
            <div className="feedback-content">
              <div className='feedback-details'>
                <h2 className="feedback-h1a">{testimonial.name}</h2>
                <p className="feedback-pa">{testimonial.testimonial}</p>
                <a hrej="#">{testimonial.designation}</a>
              </div>
            </div>
          </div>
        </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <div className="feed-headn">Testimonials</div>
      <div className="feedback-body">

        {testimonials.map((x,i)=>{ return <FeedbackCard key={i} testimonial={x} index={i}/>})}
        
      </div>
    </>
  );
};

export default Feedbacks;