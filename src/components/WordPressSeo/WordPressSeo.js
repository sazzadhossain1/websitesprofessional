import React from "react";
import "./WordPressSeo.css";
import { useLoaderData } from "react-router-dom";

const WordPressSeo = () => {
  const getWordPressSeoApi = useLoaderData();
  console.log(getWordPressSeoApi);
  return <div></div>;
};

export default WordPressSeo;
