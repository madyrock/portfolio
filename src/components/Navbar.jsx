import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [IsOpen, SetIsOpen] = useState(false);

  const toggleNavbar = () => {
    SetIsOpen(!IsOpen);
  };

  return (
    <div className="w-full sm:h-[70px] md:h-[75px] lg:h-[120px] flex justify-between items-center lg:p-4 bg-zinc-900 relative">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-white font-bold sm:m-10 lg:m-0"
      >
        <a href="#home" className="font-extrabold text-4xl lg:text-5xl lg:pl-5 text-lime-500">
          M<span className="text-white">G</span>
        </a>
      </motion.div>

      <motion.div>
        <div className={`lg:hidden  text-white absolute right-4 md:right-6 top-4`}>
          <button onClick={toggleNavbar}>
            {IsOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </motion.div>

      {IsOpen && (
        <div
          className={`lg:hidden w-[100%] flex text-white justify-center items-center mx-auto z-10 fixed bg-zinc-900 h-[800px] md:h-[600px] border-b-2 border-white ${
            IsOpen ? "translate-y-0" : "translate-y-full"
          } transition duration-300`}
        >
          <X
            onClick={toggleNavbar}
            size={40}
            className="absolute right-4 md:right-5 md:top-[280px] z-20 cursor-pointer transition-all duration-300"
          />
          <ul className=" flex flex-col justify-center items-center sm:pt-32 md:pt-[250px] gap-2 md:gap-8">
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
        <ul className="hidden lg:flex text-white text-lg gap-[50px] xl:gap-[100px] mt-3 p-5">
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

      <div className="hidden xl:flex lg:flex-col lg:mt-[250px] gap-5 lg:gap-8 lg:justify-around lg:mx-11 z-20">
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
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://github.com/madyrock/">
            <FaGithub className="text-5xl text-white hover:text-yellow-500 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://wa.me/+918866672242">
            <FaWhatsapp className="text-5xl text-white hover:text-lime-600 tranlsition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
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
