import React from "react";
import "./DigitalMarketing.css";
import { useLoaderData } from "react-router-dom";

const DigitalMarketing = () => {
  const getDigitalMkApi = useLoaderData();
  // console.log(getDigitalMkApi);
  return (
    <div className="degital_marketing_parent_div">
      <h1>This is Digital Marketing</h1>
    </div>
  );
};

export default DigitalMarketing;
