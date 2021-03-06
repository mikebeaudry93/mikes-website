import React from "react";
import { Element } from "react-scroll";

// Components
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import WhatIDo from "../components/what-I-do/WhatIDo";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatIDo />
      <About />
      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
};

export default Home;
