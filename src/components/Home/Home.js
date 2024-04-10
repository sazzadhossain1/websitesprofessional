import React, { useEffect, useState } from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import BlogPost from "../BlogPost/BlogPost";
import { Link, useLoaderData } from "react-router-dom";
import HomeSignUp from "../HomeSignUp/HomeSignUp";
import Review from "../Review/Review";
import Service from "../Service/Service";

const Home = () => {
  const getApi = useLoaderData();
  // console.log(getApi);

  const rootUrl = "https://admin.websitesprofessional.com";

  // For Home Service Section Start //
  useEffect(() => {
    // fetch("https://admin.websitesprofessional.com/api/home/service")
    fetch("https://admin.websitesprofessional.com/api/home/service")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [services, setServices] = useState(null);
  console.log(services);

  if (!services || !Array.isArray(services.data)) {
    return <div>Loading...</div>;
  }

  const stripHtml = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };
  // For Home Service Section End //
  return (
    <div>
      <HeroSection apiInfo={getApi}></HeroSection>

      {/* Home Service Section Start */}
      <div>
        {/* <Services></Services> */}
        <div className="service_main_parent_div">
          <h1 className="Services">Services</h1>

          <div className="service_grid_div">
            {services.data.slice(0, 3).map((service) => (
              <div key={service.id} className="service_cart_parent_div">
                <div className="services_cart_header">
                  <h2 className="services_cart_heading">{service.title}</h2>
                  <p className="service_price">
                    {service.sub_title}{" "}
                    <span className="price">${service.price}</span>
                  </p>
                </div>

                <div className="services_body_text_div">
                  <p>
                    <div>{stripHtml(service.details)}</div>
                  </p>
                </div>
                <Link to={`/service/${service.id}`}>
                  <button className="service_subscribe_btn">Read More</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Link to="/services">
          <button className="view_more_service">View More Services</button>
        </Link>
      </div>
      {/* Home Service Section End */}

      <div className="projects_home_parent_div">
        <Projects></Projects>
        <Link to="/projects">
          <button className="blogPost_view_all_btn">View All</button>
        </Link>
      </div>

      <AboutMe></AboutMe>
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
