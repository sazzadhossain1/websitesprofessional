import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import "./Service.css";

const Service = () => {
  const serviceData = useLoaderData();
  console.log(serviceData.data);

  const { title } = serviceData.data;
  return (
    <div className="single_service_parent_div">
      <p>{title}</p>
    </div>
  );
};

export default Service;
