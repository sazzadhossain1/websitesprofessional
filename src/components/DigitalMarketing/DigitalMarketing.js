import React from "react";
import "./DigitalMarketing.css";
import { useLoaderData } from "react-router-dom";

const DigitalMarketing = () => {
  const getDigitalMkApi = useLoaderData();
  const digitalDatas = getDigitalMkApi.data.data;

  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="degital_marketing_parent_div">
      <h1> Digital Marketing</h1>

      <div>
        {digitalDatas.map((data) => (
          <div className="digital_map_div" key={data.id}>
            <img className="digital_photo" src={rootUrl + data.image} alt="" />
            <div className="digital_text_div">
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

export default DigitalMarketing;
