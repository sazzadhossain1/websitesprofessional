import React from "react";
import "./SeoServicesAgency.css";
import { useLoaderData } from "react-router-dom";

const SeoServicesAgency = () => {
  const getSeoServiceAgncApi = useLoaderData();
  const seoserviceAgencydata = getSeoServiceAgncApi.data.data;

  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="seoserviceagency_parent_div">
      <h1>Seoserviceagency</h1>

      <div>
        {seoserviceAgencydata.map((data) => (
          <div key={data.id}>
            <img
              className="seoserviceAgency_photo"
              src={rootUrl + data.image}
              alt=""
            />
            <div className="seoserviceAgency_text_div">
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

export default SeoServicesAgency;
