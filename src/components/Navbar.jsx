import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleNavbar = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="w-full  flex justify-between items-center p-2 lg:p-4 xl:p-4 bg-zinc-900 relative">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-white font-bold mt-3 sm:m-2 lg:m-0"
      >
        <a href="#home" className="font-extrabold text-4xl lg:text-5xl pl-[32px] sm:pl-10 mt-12 lg:pl-5 text-lime-500">
          M<span className="text-white">G</span>
        </a>
      </motion.div>

      <motion.div>
        <div className={`lg:hidden  text-white absolute right-4 md:right-6 top-4`}>
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <div
          className={`lg:hidden w-[100%] flex text-white justify-center items-center mx-auto z-10 fixed bg-zinc-900 h-[500px] sm:h-[700px] md:h-[600px] border-b-2 border-lime-500 ${
            isOpen ? "translate-y-0" : "translate-y-[-100%]"
          } transition-all duration-300`}
        >
          <X
            onClick={toggleNavbar}
            size={40}
            className="absolute right-5 md:right-5 md:top-[280px] z-20 cursor-pointer transition-all duration-300"
          />
          <ul className=" flex flex-col justify-center items-center pt-[180px] sm:pt-[250px] md:pt-[250px] gap-6 md:gap-8 lg:gap-6">
            <li>
              <a
                onClick={toggleNavbar}
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
                href="#technology"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                onClick={toggleNavbar}
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={toggleNavbar}
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={toggleNavbar}
                className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className=""
      >
        <ul className="hidden lg:flex text-white text-lg gap-[30px] xl:gap-[100px] mt-3 p-5">
          <li>
            <a
              className="lg:hidden relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
              href="#technology"
            >
              Technology
            </a>
          </li>
          <li>
            <a
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>

      <div className="hidden lg:flex  lg:flex-row  gap-5 lg:gap-10 lg:justify-between lg:mr-5  z-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://www.instagram.com/__madyrock__/">
            <FaInstagram className="text-5xl text-white hover:text-fuchsia-800 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -120 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://github.com/madyrock/">
            <FaGithub className="text-5xl text-white hover:text-yellow-500 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -140 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://wa.me/+918866672242">
            <FaWhatsapp className="text-5xl text-white hover:text-lime-600 tranlsition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -160 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://www.linkedin.com/in/mudassir-ghazi-0972a413a/">
            <FaLinkedin className="text-5xl text-white hover:text-blue-500 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
