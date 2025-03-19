import React from "react";
import {motion} from 'framer-motion'



const Experience = () => {
  return (
    <div className="md:h-[120vh] p-4 lg:h-screen w-full bg-zinc-900">
      <h2 
      data-aos="zoom-in"
      className="text-white pt-4 text-center text-3xl">Experience</h2>
      
      <div className="flex flex-wrap lg:justify-center mt-[50px]">
        <ExperienceItem 
          date="2025 - Present"
          title="Front End Developer"
          company="Freelancer"
          description="A creative and detail-oriented Front-End Developer with expertise in building responsive, user-friendly web interfaces. Skilled in HTML, CSS, JavaScript, and modern frameworks like React, delivering visually appealing and functional designs. Passionate about crafting seamless user experiences and transforming ideas into interactive web applications."
        />
        <ExperienceItem 
          date="2021 - 2024"
          title="ReactJs Developer"
          company="Louise Cardin"
          description="Experienced React.js Developer with 4 years at Louise Cardin, specializing in building dynamic and responsive web applications. Proficient in React.js, JavaScript, and modern front-end technologies, delivering high-quality, scalable solutions. Adept at collaborating with cross-functional teams to create user-centric designs and seamless functionality."
        />
        <ExperienceItem 
          date="2020 - 2021"
          title="Intern"
          company="Softech"
          description="Worked as a Developer Intern for 6 months in a private company, gaining hands-on experience in coding, debugging, and deploying web applications. Contributed to front-end development tasks, collaborating with the team to deliver efficient and user-friendly solutions while enhancing technical skills and industry knowledge."
        />
      </div>
    </div>
  );
};

const ExperienceItem = ({ date, title, company, description }) => {
  const [isReadMore, setIsReadMore] = React.useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="w-full lg:w-1/4 p-6">
      <motion.div>
        <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          className="mb-2 text-sm text-stone-400"
        >
          {date}
        </motion.p>
        <motion.h3 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          className="text-lg font-bold text-white"
        >
          {title} - <span className="mb-2 text-sm text-stone-400">{company}</span>
        </motion.h3>
        <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          className="mt-4 text-white"
        >
          {isReadMore ? description : `${description.substring(0, 100)}...`}
          <button onClick={toggleReadMore} className="text-lime-500 ml-2">
            {isReadMore ? 'Read Less' : 'Read More'}
          </button>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Experience;
