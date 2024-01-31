import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Services></Services>
      <div className="projects_home_parent_div">
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Home;
