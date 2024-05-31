import React from "react";
import "./WordPressSeo.css";
import { useLoaderData } from "react-router-dom";

const WordPressSeo = () => {
  const getWordPressSeoApi = useLoaderData();
  const wordPressSeoData = getWordPressSeoApi.data.data;

  const rootUrl = "https://admin.websitesprofessional.com";
  return (
    <div className="wordpressseo_parent_div">
      <h1> Wordpressseo</h1>

      <div>
        {wordPressSeoData.map((data) => (
          <div key={data.id}>
            <img
              className="wordPressSeo_photo"
              src={rootUrl + data.image}
              alt=""
            />
            <div className="wordPressSeo_text_div">
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

export default WordPressSeo;
