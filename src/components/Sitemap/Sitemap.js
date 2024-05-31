import React from "react";
import "./Sitemap.css";
import { useLoaderData } from "react-router-dom";

const Sitemap = () => {
  const getSiteMapdata = useLoaderData();
  console.log(getSiteMapdata.data);

  const rootUrl = "https://admin.websitesprofessional.com";

  const mapDatas = getSiteMapdata.data.data;
  return (
    <div className="sitemap_parent-div">
      {mapDatas.map((data) => (
        <div className="siteMap_map_div" key={data.id}>
          <img className="siteMap_photo" src={rootUrl + data.image} alt="" />
          <p className="siteMap_title">{data.title}</p>
          <p className="siteMap_sub_title">{data.sub_title}</p>
          <p className="siteMap_price">Price: {data.price}</p>

          <p
            dangerouslySetInnerHTML={{ __html: data.details }}
            className="siteMap_details"
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Sitemap;
