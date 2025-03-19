import React from "react";
import {
  RiBootstrapLine,
  RiCss3Line,
  RiGitBranchLine,
  RiGitCommitLine,
  RiGithubLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      // make it responsive
      media: {
        "(min-width: 768px)": {
          duration: duration * 1.2,
        },
        "(min-width: 1024px)": {
          duration: duration * 1.5,
        },
      },
    },
  },
});

const Technology = () => {
  return (
    
    <div className="h-[100vh] flex flex-col  justify-center sm:pt-[5px] w-full bg-zinc-900 ">
      <h2
        data-aos="zoom-in"
        className="text-white py-[100px] sm:pt-[80px] md:pt-[20px] lg:pt-[20px]  text-center text-3xl"
      >
        Technology
      </h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-3 lg:gap-11"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}>
          <RiHtml5Line className="text-7xl text-orange-400 cursor-pointer" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
        >
          <RiCss3Line className="text-7xl text-blue-400 cursor-pointer" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
        >
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
        >
          <RiGithubLine className="text-7xl text-white" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
        >
          <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
        >
          <RiBootstrapLine className="text-7xl text-violet-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
