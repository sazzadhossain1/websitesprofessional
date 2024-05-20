import React from "react";
import "./WordPressSeo.css";
import { useLoaderData } from "react-router-dom";

const WordPressSeo = () => {
  const getWordPressSeoApi = useLoaderData();
  console.log(getWordPressSeoApi);
  return (
    <div className="wordpressseo_parent_div">
      <h1>This is wordpressseo</h1>
    </div>
  );
};

export default WordPressSeo;
