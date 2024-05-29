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
  const rootUrl = "https://admin.websitesprofessional.com";

  const [services, setServices] = useState(null);
  const [projects, setProjects] = useState(null);
  const [blogPost, setBlogPost] = useState(null);

  // For Home Service Section Start
  useEffect(() => {
    fetch(`${rootUrl}/api/home/service`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // For Home Projects Start
  useEffect(() => {
    fetch(`${rootUrl}/api/home/project`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // For Home BlogsPost Start
  useEffect(() => {
    fetch(`${rootUrl}/api/home/blog`)
      .then((res) => res.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (
    !services ||
    !Array.isArray(services.data) ||
    !projects ||
    !Array.isArray(projects.data) ||
    !blogPost ||
    !Array.isArray(blogPost.data)
  ) {
    return <div>Loading...</div>;
  }

  const stripHtml = (html) => html.replace(/<[^>]*>/g, "");

  return (
    <div>
      <HeroSection apiInfo={getApi} />

      {/* Service Start */}

      <div>
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
      {/* Service End */}

      {/* Projects start */}

      <div className="projects_home_parent_div">
        <div className="projects_parent_div">
          <h1 className="Projects_heading">Projects</h1>

          <div className="projects_photo_grid_div">
            {projects.data.slice(0, 3).map((project) => (
              <div key={project.id}>
                <Link target="_blank" to={project.url}>
                  <img
                    className="projects_photo"
                    src={rootUrl + project.image}
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Link to="/projects">
          <button className="blogPost_view_all_btn">View All</button>
        </Link>
      </div>

      {/* Projects end */}

      <AboutMe />
      <HomeSignUp />
      <Review />
      <div className="blogPost_home_parent_div">
        {/* <BlogPost /> */}

        <div className="blogPost_parent_div">
          <h1 className="latest_blog_post">Latest Blog Posts</h1>

          <div className="blogPost_Photo_grid_div">
            {blogPost.data.slice(0, 3).map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.id}`}>
                <img
                  className="blogPost_Photo"
                  src={rootUrl + blog.image}
                  alt=""
                />
              </Link>
            ))}
          </div>
        </div>
        <Link to="/blogPosts">
          <button className="blogPost_view_all_btn">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
