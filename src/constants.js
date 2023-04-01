import {
    img,
    w1,w2,w3,w4,w5,w6,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tiffinshalalogo,
    shopify,
    carrent,
    jobit,
    ieee,
    invictus,
    vihaan,
    tripguide,
    threejs,
  } from "./assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "#contact",
      title: "Contact",
    },
    {
      id:"#experience",
      title:"Work Exp.",
    },
    {
      id:"#project",
      title:"Projects"
    },
    {
      id:"#testimonials",
      title:"Testimonials",
    },
    {
      id:"https://drive.google.com/file/d/1pRajC8Y8oLghyHUXA6r7zwPCsxAqHZQ6/view?usp=sharing",
      title:"Resume",
    },
    {
      id:"https://www.linkedin.com/in/prashant-693591228/",
      title:"Linkedln",
    },
    {
      id:"https://www.github.com/prashant0664",
      title:"Github",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      index:1,
    },
    {
      title: "Backend Developer",
      icon: mobile,
      index:2,
    },
    {
      title: "Software Developer",
      icon: backend,
      index: 3,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
      index: 4,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const img3=[
    {
      img:img,
    }
  ]

  const experiences = [
    {
      title: "IIF-USIP Internship",
      company_name: "Tiffinshala",
      icon: tiffinshalalogo,
      iconBg: "grey",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining their newly launched Tiffinshala App on Android phones",
        
      ],
    },
    {
      title: "Co-Head Invictus",
      company_name: "Invictus",
      icon: invictus,
      iconBg: "grey",
      date: "January 2023- February 2023",
      points: [
        "Invictus is the annual TechFest of DTU",
        
      ],
    },
    
    {
      title: "Web Development Mentor",
      company_name: "IEEE-DTU",
      icon: ieee,
      iconBg: "grey",
      date: "January 2023- Present",
      points: [
        "I am a web development mentor at Similar Interest group and Techweek IEEE-DTU. I help aspiring web developers learn the skills and tools they need to create dynamic and responsive websites.",
      ],
    },
    {
      title: "Website Development Lead Vihaan",
      company_name: "IEEE-DTU",
      icon: vihaan,
      iconBg: "grey",
      date: "March 2023 - April 2023",
      points: [
        "As a Website Development lead, I am responsible for overseeing the design, development and maintenance of our company's websites.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:"Prashant is a talented and reliable web developer who always delivers high-quality work on time and within budget. He has a keen eye for design and usability, and he is proficient in various web technologies and frameworks.",
         name: "Pratyaksh",
      designation: "Web Developer",
      company: "DTU",
      image: "https://prashant0664.github.io/My-Portfolio-React/images/avatar-1.png",
    },
    {
      testimonial:
        "Prashant is a skilled and creative web developer who can handle any challenge with ease. He has a keen eye for design and usability, and always delivers high-quality work on time and within budget.",
      name: "Pranay",
      designation: "Coder",
      company: "DTU",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Prashant has a keen eye for design and a strong grasp of the latest web technologies and frameworks. He is also a reliable and collaborative team player who communicates well. I highly recommend him for any web development role or project.",
      name: "Prateek",
      designation: "Coder",
      company: "DTU",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    
    {
      testimonial:
        "I can attest to his excellent skills and professionalism. He is not only proficient in various programming languages and frameworks, but also has a keen eye for design and usability. He always delivers high-quality code.",
      name: "Praveen",
      designation: "ML Developer",
      company: "DTU",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Image Generator",
      description:
        "An image generator website is a platform that allows users to create stunning visuals instantly by using ChatGPT. Users can input text prompts and describe what they want to see with phrases, and the website will generate an image.",
      tags: [
        {
          name: "React",
        },
        {
          name: "ChatGPT",
        },
        {
          name: "TailwindCSS",
        },
      ],
      tech:"React, TailwindCSS, JS",
      image:w6,
      source_code_link: "https://github.com/Prashant0664/Image-Generator",
    },
    {
      name: "E-Commerce",
      description:
        "It typically consists of a front-end interface that displays the product catalog, a shopping cart system that handles the checkout process, and a back-end system that manages the inventory, orders, etc...",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      tech:"React, TailwindCSS, Redux",
      image: w4,
      source_code_link: "https://github.com/Prashant0664/REACT-APP-NIKE",
    },
    {
      name: "Others Projects",
      description:
        "I have more than 10 good projects which includes both web developmwnts and app development projects. All projects are fully deployed and are available on github.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      tech:"WEBD, APPD, GITHUB",
      image: w1,
      source_code_link: "https://github.com/prashant0664",
    },
  ];
  
  export {img3, services, technologies, experiences, testimonials, projects };