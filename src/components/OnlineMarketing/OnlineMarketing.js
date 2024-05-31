import React from "react";
import { useLoaderData } from "react-router-dom";
import "./OnlineMarketing.css";
import onlineMarketing from "../../accts/BlogsPost/onlineMarketing.png";
import BlogPost from "../BlogPost/BlogPost";

const OnlineMarketing = () => {
  const getOnlineMarketingApi = useLoaderData();
  const OnlineMarketinData = getOnlineMarketingApi.data.data;
  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="onlinemarketing_parent_div">
      <h1> Online Marketing</h1>

      <div>
        {OnlineMarketinData.map((data) => (
          <div key={data.id}>
            <img
              className="OnlineMarketin_photo"
              src={rootUrl + data.image}
              alt=""
            />
            <div className="OnlineMarketin_text_div">
              <p>{data.title}</p>
              <p>Price: {data.price}</p>
              <p dangerouslySetInnerHTML={{ __html: data.details }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineMarketing;
