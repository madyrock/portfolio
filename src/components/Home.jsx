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
    <div className=" lg:pb-30 bg-zinc-900 h-screen ">
      <div className="flex flex-wrap lg:flex-row-reverse items-center lg:pt-10">
        <div className="w-full lg:w-1/2">
          <div className="flex lg:w-[500px] justify-center sm:pt-15 md:pt-5  m-auto mt-6 mix-blend-lighten">
            <motion.img
              className="logoimage sm:w-[350px]  md:w-[350px] xl:w-[400px] grayscale rounded-full"
              src="./profileimg.png"
              alt="logoimage"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="w-full mt-8 lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-10 items-center lg:text-left mt-[10px]"
          >
            <h1
              data-aos="zoom-in"
              variants={childVariants}
              className="text-white block text-4xl text-center font-bold lg:text-5xl"
            >
              <motion.span
                variants={childVariants}
                className="text-lime-500 text-5xl md:text-6xl lg:text-6xl xl:text-7xl lg:px-6 ml-100px"
              >
                Mudassir <span className="text-white">Ghazi</span>
              </motion.span>
            </h1>
            <motion.p variants={childVariants} className="">
              <motion.span
                variants={childVariants}
                className="text-white text-[30px] leading-[10px] lg:text-4xl"
              >
                Front End <span>Developer</span>
              </motion.span>
            </motion.p>

            <motion.button
              variants={childVariants}
              className=" mt-5"
            >
              <a
                href="/resume.pdf"
                download="My_Resume.pdf"
                className="bg-blue-500 text-white px-5  py-3  rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Download Resume
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
