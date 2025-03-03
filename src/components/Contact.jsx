import React from 'react'
import { FaLinkedin, FaMailBulk, FaGithub, FaVoicemail, FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import {motion} from 'framer-motion'
import {Phone, Mail} from "lucide-react"

const Contact = () => {
  return (
    <>
    
    <div className=' h-screen bg-zinc-900'>
        <h2 
        data-aos="zoom-in"
        className='pt-[250px] flex justify-center items-center m-auto text-center text-4xl text-white'>
            Get in Touch
        </h2>

        
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1.5 }}
        className='flex gap-4 justify-center items-center mt-10'>
          
        <Phone size={32} className='text-white'/>
        <p className='text-white text-xl'>+91 88666 72242</p>
        </motion.div>
        
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1.5 }}
        className='flex gap-4 justify-center items-center mt-5'>
          1
        <Mail size={32} className='text-white'/>
        <a href="mailto:mudassirghazi1121@gmail.com" className="text-white text-xl">mudassirghazi1121@gmail.com</a>
        </motion.div>

        {/* Social Media */}

    <div className="lg:hidden flex justify-center gap-8 mt-10">
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

    
    </>
  )
  
}


export default Contact