import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;