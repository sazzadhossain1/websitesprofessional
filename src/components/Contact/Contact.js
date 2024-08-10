import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      members: [
        {
          email_address: formData.email,
          status: "subscribed",
          merge_fields: {
            FNAME: formData.name,
            PHONE: formData.phone,
            MESSAGE: formData.message,
          },
        },
      ],
    };

    try {
      const response = await fetch(
        `https://mailchi.mp/ea47c29ee62a/sign-up-for-digital-marketing-tips`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        alert("Thank you for your message. We will get back to you soon!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorResponse = await response.json();
        console.error("Error:", errorResponse);
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("An error occurred. Please try again later.");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="contact_input"
              id="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="contact_input"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="contact_input"
              id="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              className="contact_text_area"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="submit_div">
            <button className="submit_btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
