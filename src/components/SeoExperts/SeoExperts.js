import React from "react";
import "./SeoExperts.css";
import { useLoaderData } from "react-router-dom";
const SeoExperts = () => {
  const getSeoExpApi = useLoaderData();
  const seoExpertData = getSeoExpApi.data.data;

  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="seo_experts_parent_div">
      <h1>This is Seo Experts </h1>

      <div>
        {seoExpertData.map((data) => (
          <div className="seoExpert_map_div" key={data.id}>
            <img
              className="seoExpert_photo"
              src={rootUrl + data.image}
              alt=""
            />
            <div className="seoExpert_text_div">
              <p>{data.title}</p>
              <p>Price:{data.price}</p>
              <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoExperts;
