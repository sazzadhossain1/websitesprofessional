import React from "react";
import "./SeoServices.css";
import { useLoaderData } from "react-router-dom";

const SeoServices = () => {
  const getSeoServiceApi = useLoaderData();
  const seoServiceData = getSeoServiceApi.data.data;

  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="seoServices_parent_div">
      <h1> Seo Services</h1>

      <div>
        {seoServiceData.map((data) => (
          <div key={data.id}>
            <img
              className="seoServices_photo"
              src={rootUrl + data.image}
              alt=""
            />
            <div className="seoServices_text_div">
              <p>{data.title}</p>
              <p>{data.price}</p>
              <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoServices;
