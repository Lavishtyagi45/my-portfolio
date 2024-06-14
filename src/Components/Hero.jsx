import React from "react";

import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Skill from "./Skill";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Hero({nav,handleNav,handleMainContentClick}){
    return(
        <div className={nav?"w-screen bg-blue-800 transition-filter duration-700 blur-sm":"w-screen bg-blue-800"} onClick={handleMainContentClick}>
          <Navbar nav={nav}  handleNav={handleNav} />
          <Main />
          <About />
          <Education />
          <Skill />
          <Projects />
          <Contact />
        </div>
    )
}