import React from "react";
import "./Policy.css";
import { useLoaderData } from "react-router-dom";

const Policy = () => {
  const getPolicyApi = useLoaderData();
  console.log(getPolicyApi);
  return (
    <div>
      <h1 className="posicy_title">{getPolicyApi.data.title}</h1>
      <p>{getPolicyApi.data.details}</p>
    </div>
  );
};

export default Policy;
