import React from "react";
import "./SeoExperts.css";
import { useLoaderData } from "react-router-dom";
const SeoExperts = () => {
  const getSeoExpApi = useLoaderData();
  // console.log(getSeoExpApi);
  return (
    <div className="seo_experts_parent_div">
      <h1>This is Seo Experts </h1>
    </div>
  );
};

export default SeoExperts;
