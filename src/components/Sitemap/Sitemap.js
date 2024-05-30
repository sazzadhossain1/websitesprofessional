import React from "react";
import "./Sitemap.css";
import { useLoaderData } from "react-router-dom";

const Sitemap = () => {
  const getSiteMapdata = useLoaderData();
  console.log(getSiteMapdata);
  return (
    <div className="sitemap_parent-div">
      <h1>This is site map</h1>
    </div>
  );
};

export default Sitemap;
