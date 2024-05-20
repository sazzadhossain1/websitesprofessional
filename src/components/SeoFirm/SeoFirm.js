import React from "react";
import "./SeoFirm.css";
import { useLoaderData } from "react-router-dom";

const SeoFirm = () => {
  const getSeoFirmApi = useLoaderData();
  // console.log(getSeoFirmApi);
  return (
    <div className="seo_firm_parent_div">
      <h1>This is Seo Firm</h1>
    </div>
  );
};

export default SeoFirm;
