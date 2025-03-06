import React from "react";

function Projects() {
  return (
    <>
      <div className="w-full flex justify-center  bg-zinc-900 items-center">
        
        <div className=" w-[80%] ">
          <h2
            data-aos="zoom-in"
            className="text-white py-12 text-center text-3xl"
          >
            Projects
          </h2>
          <div className=" w-full flex flex-wrap justify-center items-center">
            <div className="max-w-[500px] lg:max-w-sm bg-white m-4 flex justify-center items-center">
              <img src="./project1.png" alt="" />
            </div>
            <div className="max-w-[500px] lg:max-w-sm  m-4 flex justify-center items-center">
              <div className="flex flex-col gap-3 justify-start items-start">
              <h1 className="text-white">This E-Commerce Web Application is a full-featured online shopping platform that allows users to browse products, add them to the cart, and securely complete purchases. The platform includes an admin panel for managing products, orders, and users efficiently.</h1>
              <span className="font-bold text-yellow-500 text-sm mr-5">REACT JS, TAILWIND SCC</span>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
