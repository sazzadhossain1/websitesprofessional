import React from "react";
import "./SeoFirm.css";
import { useLoaderData } from "react-router-dom";

const SeoFirm = () => {
  const getSeoFirmApi = useLoaderData();
  const seoFirmDtaa = getSeoFirmApi.data.data;

  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="seo_firm_parent_div">
      <h1> Seo Firm</h1>
      <div>
        {seoFirmDtaa.map((data) => (
          <div key={data.id}>
            <img className="serFirm_photo" src={rootUrl + data.image} alt="" />
            <div className="serFirm_text_div">
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

export default SeoFirm;
