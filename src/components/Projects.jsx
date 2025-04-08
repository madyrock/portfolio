import React from "react";

function Projects() {
  return (
    <>
      <div className="w-full flex justify-center py-20 bg-zinc-900 items-center">
        <div className=" w-[80%] ">
          <h2
            // data-aos="zoom-in"
            className="text-white py-12 text-center text-3xl"
          >
            Projects
          </h2>
          <div className=" w-full flex flex-wrap justify-center items-center">
            <div className="relative max-w-[500px] lg:max-w-sm bg-white m-4 flex justify-center items-center">
              <img src="./project1.png" alt="" />
              <div className="absolute left-20 bottom-2"></div>
            </div>
            <div className="max-w-[500px] lg:max-w-sm  m-4 flex justify-center items-center">
              <div className="flex flex-col gap-3 justify-start items-start">
                <button className="  py-1 px-2 bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold rounded-lg">
                  <a href="https://interio-chi.vercel.app/">Explore</a>
                </button>
                <h1 className="text-white">
                  This E-Commerce Web Application is a full-featured online
                  shopping platform that allows users to browse products, add
                  them to the cart, and securely complete purchases.
                </h1>
                <span className="font-bold text-yellow-500 text-sm mr-5">
                  REACT JS, TAILWIND SCC
                </span>
              </div>
            </div>

            <div className="relative max-w-[500px] lg:max-w-sm bg-white m-4 flex justify-center items-center">
              <img src="./project2.png" alt="" />
              <div className="absolute left-20 bottom-2"></div>
            </div>
            <div className="max-w-[500px] lg:max-w-sm  m-4 flex justify-center items-center">
              <div className="flex flex-col gap-3 justify-start items-start">
                <button className="  py-1 px-2 bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold rounded-lg">
                  <a href="https://interio-chi.vercel.app/">Explore</a>
                </button>
                <h1 className="text-white">
                  Transform your home with elegant and functional interior
                  designs. From modern minimalism to classic luxury, we create
                  spaces that reflect your style and comfort.
                </h1>
                <span className="font-bold text-yellow-500 text-sm mr-5">
                  REACT JS, TAILWIND SCC
                </span>
              </div>
            </div>

            <div className="relative max-w-[500px] lg:max-w-sm bg-white m-4 flex justify-center items-center">
              <img src="./project3.png" alt="" />
              <div className="absolute left-20 bottom-2"></div>
            </div>
            <div className="max-w-[500px] lg:max-w-sm  m-4 flex justify-center items-center">
              <div className="flex flex-col gap-3 justify-start items-start">
                <button className="  py-1 px-2 bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold rounded-lg">
                  <a href="https://eduwave-ruddy.vercel.app/">Explore</a>
                </button>

                <h1 className="text-white">
                  A modern education platform offering interactive courses,
                  expert guidance, and personalized learning experiences to help
                  students thrive in their academic journey.
                </h1>
                <span className="font-bold text-yellow-500 text-sm mr-5">
                  REACT JS, TAILWIND SCC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
