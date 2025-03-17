import React from "react";
import {motion} from 'framer-motion'



const Experience = () => {
  return (
    
    <div className="md:h-[120vh] p-4 lg:h-screen w-full bg-zinc-900">
      <h2 
      data-aos="zoom-in"
      className="text-white pt-4 text-center text-3xl">Experience</h2>
      
      <div className="  flex flex-wrap lg:justify-center mt-[50px]">
        <div className="w-full lg:w-1/4 p-6">

        <motion.div
        
        >
          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          
          className="mb-2 text-sm text-stone-400">2025 - Present</motion.p>
          <motion.h3 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 1.5}}
          
          className="text-lg font-bold text-white">
            Fron End Developer -{" "}
            <span className="mb-2 text-sm text-stone-400">Freelancer</span>
          </motion.h3>
          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          
          className="mt-4 text-white">
            A creative and detail-oriented Front-End Developer with expertise in
            building responsive, user-friendly web interfaces. Skilled in HTML,
            CSS, JavaScript, and modern frameworks like React, delivering
            visually appealing and functional designs. Passionate about crafting
            seamless user experiences and transforming ideas into interactive
            web applications.
          </motion.p>
         
          </motion.div>

        </div>
        <div className="w-full lg:w-1/4 p-6">

        <motion.div>

          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          
          className="mb-2 text-sm text-stone-400">2021 - 2024</motion.p>
          <motion.h3 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 1.5}}
          
          className="text-lg font-bold text-white">
            ReactJs Developer -{" "}
            <span className="mb-2 text-sm text-stone-400">Louise Cardin</span>
          </motion.h3>
          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          
          className="mt-4 text-white">
            Experienced React.js Developer with 4 years at Louise Cardin,
            specializing in building dynamic and responsive web applications.
            Proficient in React.js, JavaScript, and modern front-end
            technologies, delivering high-quality, scalable solutions. Adept at
            collaborating with cross-functional teams to create user-centric
            designs and seamless functionality.
          </motion.p>

          </motion.div>
        </div>
        <div className="w-full lg:w-1/4 p-6">

        <motion.div >

          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          
          className="mb-2 text-sm text-stone-400">2020 - 2021</motion.p>
          <motion.h3 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x: -100}}
          transition={{duration: 1.5}}
          
          className="text-lg font-bold text-white">
            Intern -{" "}
            <span className="mb-2 text-sm text-stone-400">Softech</span>
          </motion.h3>
          <motion.p 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration: 1.5}}
          
          className="mt-4 text-white">
            Worked as a Developer Intern for 6 months in a private company,
            gaining hands-on experience in coding, debugging, and deploying web
            applications. Contributed to front-end development
            tasks, collaborating with the team to deliver efficient and
            user-friendly solutions while enhancing technical skills and
            industry knowledge
          </motion.p>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
