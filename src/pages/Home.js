import React from "react";

// Components
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
