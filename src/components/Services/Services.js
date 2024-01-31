import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1 className="Services">Services</h1>

      <div className="service_grid_div">
        <div className="service_cart_parent_div">
          <div className="services_cart_header">
            <h2 className="services_cart_heading">
              Search Engine Optimization (SEO)
            </h2>
            <p className="service_price">Starts at $1000</p>
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
            <h2 className="services_cart_heading">
              Online Marketing Management
            </h2>
            <p className="service_price">Starts at $350</p>
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
            <h2 className="services_cart_heading">
              Website Development, Creation, and Management
            </h2>
            <p className="service_price">Starts at $300</p>
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
      </div>
      <div className="service_cart_parent_div_last">
        <div className="services_cart_header">
          <h2 className="services_cart_heading">Want a Custom Build</h2>
          <p className="service_price">Make Your Own Budget Plan</p>
        </div>

        <div className="services_body_text_div">
          <p>
            For custom package, please contact us and we will be happy to assist
            you
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
