import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox,

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

  return (
    <div className="service_main_parent_div">
      <h1 className="Services">Services</h1>

      <div className="service_grid_div">
        {services.data.map((service) => (
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
  );
};

export default Services;
