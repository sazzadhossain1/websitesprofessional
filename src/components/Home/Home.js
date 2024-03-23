import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import BlogPost from "../BlogPost/BlogPost";
import { Link, useLoaderData } from "react-router-dom";
import HomeSignUp from "../HomeSignUp/HomeSignUp";
import Review from "../Review/Review";

const Home = () => {
  const getApi = useLoaderData();
  // console.log(getApi.data.banner_title);
  return (
    <div>
      <HeroSection apiInfo={getApi}></HeroSection>
      <Services></Services>
      <div className="projects_home_parent_div">
        <Projects></Projects>
        <Link to="/projects">
          <button className="blogPost_view_all_btn">View All</button>
        </Link>
      </div>

      <AboutMe aboutApi={getApi}></AboutMe>
      <HomeSignUp></HomeSignUp>
      <Review></Review>
      <div className="blogPost_home_parent_div">
        <BlogPost></BlogPost>
        <Link to="/blogPosts">
          <button className="blogPost_view_all_btn">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
