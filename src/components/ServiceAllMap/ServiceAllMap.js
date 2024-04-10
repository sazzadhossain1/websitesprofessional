import React from "react";
import "./ServiceAllMap.css";
import { useLoaderData } from "react-router-dom";

const ServiceAllMap = () => {
  const getserviceApi = useLoaderData();
  console.log(getserviceApi.data);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro
        quaerat, veniam maxime odit recusandae eaque voluptatibus eveniet, earum
        asperiores at quibusdam totam ipsa similique odio saepe veritatis ea,
        unde blanditiis nam. Omnis cupiditate a distinctio laboriosam quisquam
        dignissimos labore culpa, natus tempore at veniam, porro fugit obcaecati
        excepturi nostrum.
      </p>
    </div>
  );
};

export default ServiceAllMap;
