import React from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // Add other locomotive-scroll options here
      }}
      watch={[/* Add dependencies to reinitialize scroll if needed */]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Navbar />
        <div className="" id="home" data-scroll-section>
          <Home />
        </div>
        <div id="technology" data-scroll-section>
          <Technology />
        </div>
        <div id="experience" data-scroll-section>
          <Experience />
        </div>
        <div id="projects" data-scroll-section>
          <Projects />
        </div>
        <div id="contact" data-scroll-section>
          <Contact />
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;