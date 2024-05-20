import React from "react";
import "./SeoServicesAgency.css";
import { useLoaderData } from "react-router-dom";

const SeoServicesAgency = () => {
  const getSeoServiceAgncApi = useLoaderData();
  // console.log(getSeoServiceAgncApi);
  return (
    <div className="seoserviceagency_parent_div">
      <h1>This is seoserviceagency</h1>
    </div>
  );
};

export default SeoServicesAgency;
