import React, { useState } from "react";
import "./HomeSignUp.css";
import homeSignUpPhoto from "../../accts/homeSignUpPhoto/homeSignUpPhoto.png";

const HomeSignUp = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState(""); // State for feedback message

  // const subscribe = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch(
  //       `https://us18.api.mailchimp.com/3.0/lists/6d1a066df7/members`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `apikey 47fe62127dd63c09af9147706769a912-us18`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email_address: email,
  //           status: "subscribed",
  //           merge_fields: {
  //             FNAME: status,
  //           },
  //         }),
  //       }
  //     );

  //     if (!res.ok) {
  //       const errorDetails = await res.json();
  //       console.error("Error details:", errorDetails);
  //       setMessage("Failed to subscribe: " + errorDetails.detail);
  //     } else {
  //       setMessage("Subscribed successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     setMessage("Failed to subscribe.");
  //   }
  // };

  return (
    <div className="homeSignUp_parent_div">
      <div className="homeSignUp_grid_div">
        <div className="homeSignUp_text_div">
          <img src={homeSignUpPhoto} alt="" />
        </div>
        <div className="homeSignUp_cart_div">
          <div className="homeSignUp_inner_div">
            <h1 className="homeSignUP_In_heading_in_cart">Sign Up </h1>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={status}
                  name="name"
                  // onChange={(e) => setStatus(e.target.value)}
                  className="homeSignUp_input"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="homeSignUp_input"
                />
              </div>
            </div>
            <button className="homeSignUp_btn">Submit</button>
            {/* {message && <p>{message}</p>}  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSignUp;
