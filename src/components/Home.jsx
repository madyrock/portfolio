import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { use } from "react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col lg:flex-row items-center justify-center lg:pb-20 ">
      <div className="w-full lg:w-1/2 flex justify-center lg:order-2 pb-10">
        <motion.img
          className="w-[260px] sm:w-[370px] md:w-[350px] xl:w-[350px] grayscale rounded-full mt-3"
          src="./profileimg.png"
          alt="Profile"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
      <div className="w-full lg:w-1/2 mt-8 flex flex-col items-center lg:items-center lg:order-1 pb-[150px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-10 items-center lg:items-start"
        >
          <motion.h1
            
            variants={childVariants}
            className="text-white text-4xl lg:text-5xl md:pt-20 font-bold text-center lg:text-left"
          >
            <motion.span
              variants={childVariants}
              className="text-lime-500 text-4xl sm:text-[55px] md:text-6xl lg:text-6xl xl:text-7xl "
            >
              Mudassir <span className="text-white">Ghazi</span>
            </motion.span>
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-white text-[20px] sm:text-[30px] lg:text-4xl"
          >
            <motion.span variants={childVariants}>
              Front End <span>Developer</span>
            </motion.span>
          </motion.p>
          <motion.button variants={childVariants}>
            <a
              href="/resume.pdf"
              download="My_Resume.pdf"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Resume
            </a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
