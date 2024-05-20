import React from "react";
import "./SeoServices.css";
import { useLoaderData } from "react-router-dom";

const SeoServices = () => {
  const getSeoServiceApi = useLoaderData();
  // console.log(getSeoServiceApi);
  return (
    <div className="seoServices_parent_div">
      <h1>This is Seo Services</h1>
    </div>
  );
};

export default SeoServices;
