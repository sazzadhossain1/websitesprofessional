import React from "react";
import "./AboutMe.css";
import CristianeAbreu from "../../accts/CristianeAbreu/CristianeAbreu.jpg";
import { useLoaderData } from "react-router-dom";

const AboutMe = () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;


  const aboutApi = useLoaderData();
  // console.log(aboutApi);

  


  if (!aboutApi || !aboutApi.data) {
    return <div>Loading...</div>; 
  }
  const stripHtml = (html) => {
    return html?.replace(/<[^>]*>/g, "");
  };

 

  

  const rootUrl = "https://admin.websitesprofessional.com";
  return (
    <div className="about_me_parent_div">
      {/* <h1 className="about_me_heading">About Me</h1> */}
      <h1 className="about_me_heading">{aboutApi.data.about_title}</h1>
      {/* <p className="hi_i_am">Hi, I am Cristiane Abreu.</p> */}
      <p className="hi_i_am">{aboutApi.data.about_sub_title}</p>
      <div className="about_me_grid_div">
        <img className="CristianeAbreu" src={rootUrl + aboutApi.data.about_image} alt="" />
        
        <div className="about_me_text_div">
          {/* <p>
            I am a Web Developer and Web Marketing Analyst. I am passionate in
            regards to my dedication to deliver digital marketing plans with
            innovative strategies that will boost your website’s rank on search
            engine results pages.One thing that I like about this field is
            seeing my clients happy with their numbers-driven results. I just
            re-built my website, I am very excited about it, and I can help you
            realize your internet presence, as well. I have been delivering
            quality Search Engine & Website Optimization to friends and small
            businesses since 2008. My skills as a WordPress developer and SEO
            Analyst are evident in my work and the results I bring to my
            clients. Along with my internet skills, I also offer strong work
            ethics, reliability, and high quality service. My prices are among
            the lowest in the area. My honesty, good reputation, and hard work
            speak for itself. I believe that an online presence is very
            important for the small business owner. Whether you sell hand-made
            jewelry or million-dollar real estate, you must generate traffic.
            You can have the best products and services available anywhere on
            earth, but if no one knows you are there, you will not sell
            anything.That is where I come in. There are many factors to website
            optimization and search engine optimization. I will help you develop
            a professional website that pays for itself. Grow your online
            presence and attract prospective customers today at an affordable
            price.
          </p> */}
          <p id="about_me_text_p">{stripHtml(aboutApi?.data.about_text)}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
