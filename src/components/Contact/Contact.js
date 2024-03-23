import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  return (
    <div className="contact_grid_div">
      <div className="get_in_touch_div">
        <h2 className="get_in_touch">Only by Appointment</h2>
        <div className="contact_icon_flex_div">
          <FontAwesomeIcon className="contact_icon" icon={faLocationDot} />
          <p>
            1078 E Grand Street <br /> Elizabeth <br /> New Jersey 01201
          </p>
        </div>
        <div className="contact_icon_flex_div">
          <FontAwesomeIcon className="contact_icon" icon={faPhone} />
          <p>704-891-4329</p>
        </div>
        <div className="contact_icon_flex_div">
          <FontAwesomeIcon className="contact_icon" icon={faEnvelope} />
          <p>info@websitesprofessional.com</p>
        </div>
        <div className="booking_btn_div">
          <Link
            to="https://calendly.com/cristiane-abreu/seo-project-meeting?month=2024-03"
            target="_blank"
          >
            <button className="booking_btn">Appointment</button>
          </Link>
        </div>
      </div>
      <div className="contact_input_div">
        <p>
          Please fill in the form so we can get <br /> back to you
        </p>
        <form action="">
          <div>
            <input
              className="contact_input"
              id="name"
              type="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="contact_input"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="contact_input"
              id="phone"
              type="phone"
              placeholder="Phone"
            />
          </div>
          <div>
            <textarea
              className="contact_text_area"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="submit_div">
            <button className="submit_btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
