import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  // const serviceData = useLoaderData();
  // console.log(serviceData);

  useEffect(() => {
    fetch("https://admin.websitesprofessional.com/api/home/service")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [services, setServices] = useState(null);

  // Check if services is null or services.data is not an array before rendering
  if (!services || !Array.isArray(services.data)) {
    return <div>Loading...</div>; // You can customize this part to show a loading spinner or a similar indicator
  }

  return (
    <div className="service_main_parent_div">
      <div>
        {services.data.map((service) => (
          <div key={service.id}>
            <p>{service.title}</p>
          </div>
        ))}
      </div>

      <h1 className="Services">Services</h1>

      {/* {serviceData.data.map((service) => console.log(service))} */}
      <div className="service_grid_div">
        <div className="service_cart_parent_div">
          <div className="services_cart_header">
            <h2 className="services_cart_heading">Online Marketing</h2>
            <p className="service_price">
              Starts at <span className="price">$350</span>
            </p>
          </div>

          <div className="services_body_text_div">
            <p>
              Online Reputation Management is the process of monitoring and
              influencing an individual or brand's reputation on the internet.
            </p>
          </div>
          <Link>
            <button className="service_subscribe_btn">Subscribe</button>
          </Link>
        </div>
        <div className="service_cart_parent_div">
          <div className="services_cart_header">
            <h2 className="services_cart_heading">SEO Marketing</h2>
            <p className="service_price">
              Starts at <span className="price">$1000</span>
            </p>
          </div>
          <div className="services_body_text_div">
            <p>
              SEO Specialist optimizes websites to increase organic search
              engine rankings and drive traffic, using techniques such as
              keyword research, content creation, and link building.
            </p>
          </div>
          <Link>
            <button className="service_subscribe_btn">Subscribe</button>
          </Link>
        </div>

        <div className="service_cart_parent_div">
          <div className="services_cart_header">
            <h2 className="services_cart_heading">Local marketing</h2>
            <p className="service_price">
              Starts at <span className="price">$300</span>
            </p>
          </div>

          <div className="services_body_text_div">
            <p>
              Website Development, Creation, and Management. There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable.
            </p>
          </div>
          <Link>
            <button className="service_subscribe_btn">Subscribe</button>
          </Link>
        </div>

        <div className="service_cart_parent_div_first_last">
          <div className="services_cart_header">
            <h2 className="services_cart_heading">Business Consultant</h2>
            <p className="service_price">Make Your Own Budget Plan</p>
          </div>

          <div className="services_body_text_div">
            <p>
              For custom package, please contact us and we will be happy <br />{" "}
              to assist you
            </p>
          </div>
          <Link>
            <button className="service_subscribe_btn_last">Subscribe</button>
          </Link>
        </div>
      </div>

      <div className="service_cart_parent_div_last">
        <div className="services_cart_header">
          <h2 className="services_cart_heading">
            {/* Want a Custom Build */}
            Business Consultant
          </h2>
          <p className="service_price">Make Your Own Budget Plan</p>
        </div>

        <div className="services_body_text_div">
          <p>
            For custom package, please contact us and we will be happy <br /> to
            assist you
          </p>
        </div>
        <Link>
          <button className="service_subscribe_btn_last">Subscribe</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
