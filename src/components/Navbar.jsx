import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleNavbar = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50 flex justify-between items-center p-2 lg:p-2 xl:p- bg-zinc-900">
      <div className="text-white font-bold mt-3 sm:m-2 lg:m-0">
        <a
          href="#home"
          className="font-extrabold text-4xl lg:text-4xl pl-[32px] sm:pl-10 mt-12 lg:pl-8 text-lime-500"
        >
          M<span className="text-white">G</span>
        </a>
      </div>

      <div>
        <div className="lg:hidden text-white absolute right-4 md:right-6 top-4">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`lg:hidden w-[100%] flex text-white justify-center items-center mx-auto z-10 fixed bg-zinc-900 h-[500px] sm:h-[700px] md:h-[600px] border-b-2 border-lime-500 ${
            isOpen ? "translate-y-0" : "translate-y-[-100%]"
          } transition-all duration-300`}
        >
          <X
            onClick={toggleNavbar}
            size={40}
            className="absolute right-5 md:right-5 md:top-[280px] z-20 cursor-pointer"
          />
          <ul className="flex flex-col justify-center items-center pt-[180px] sm:pt-[250px] md:pt-[250px] gap-6 md:gap-8 lg:gap-6">
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

      <div>
        <ul className="hidden lg:flex text-white text-lg gap-[30px] xl:gap-[100px] mt-3 p-5">
          <li>
            <a
              className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-lime-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-125 transition-all duration-500"
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
      </div>

      <div className="hidden lg:flex lg:flex-row gap-5 lg:gap-10 lg:justify-between lg:mr-5 z-20">
        <div>
          <a href="https://www.instagram.com/__madyrock__/">
            <FaInstagram className="text-4xl text-white hover:text-fuchsia-800 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a href="https://github.com/madyrock/">
            <FaGithub className="text-4xl text-white hover:text-yellow-500 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/+918866672242">
            <FaWhatsapp className="text-4xl text-white hover:text-lime-600 tranlsition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/mudassir-ghazi-0972a413a/">
            <FaLinkedin className="text-4xl text-white hover:text-blue-500 transition-all ease-in-out cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;