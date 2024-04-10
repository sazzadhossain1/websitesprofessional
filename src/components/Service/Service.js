import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import photo from "../../accts/BlogsPost/onlineMarketing.png";

import "./Service.css";

const Service = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);

  const { title, details, image } = serviceData.data;

  const stripHtml = (html) => {
    return html?.replace(/<[^>]*>/g, "");
  };

  const rootUrl = "https://admin.websitesprofessional.com";

  return (
    <div className="single_service_parent_div">
      <p className="service_title">{title}</p>

      <img className="service_photo" src={rootUrl + image} alt="" />

      <div className="service_text_div">
        <p>{stripHtml(details)}</p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          eligendi est debitis sapiente dignissimos dolorum, exercitationem,
          eaque aspernatur iste atque dolor adipisci veniam nesciunt ipsa,
          labore placeat reprehenderit! Fuga, mollitia cumque. Quam et
          consequatur illum ducimus laborum nostrum obcaecati veritatis nesciunt
          molestias nam voluptatum, asperiores temporibus sed? Quia illo nulla
          nobis nemo. Laboriosam delectus libero saepe, ipsam consequuntur
          molestiae aspernatur deserunt perspiciatis placeat excepturi fugit?
          Iusto magni velit nesciunt modi error labore esse expedita fugiat
          eaque minima rerum repellat neque, soluta iure ducimus asperiores ut
          placeat. Ipsum sapiente, aliquid consequuntur nam eveniet eos eum
          totam laudantium? Omnis perspiciatis vitae qui autem, nostrum
          laboriosam, laborum illo magnam nesciunt debitis minus mollitia cumque
          laudantium asperiores fuga officiis beatae deleniti corrupti sunt
          sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          eligendi est debitis sapiente dignissimos dolorum, exercitationem,
          eaque aspernatur iste atque dolor adipisci veniam nesciunt ipsa,
          labore placeat reprehenderit! Fuga, mollitia cumque. Quam et
          consequatur illum ducimus laborum nostrum obcaecati veritatis nesciunt
          molestias nam voluptatum, asperiores temporibus sed? Quia illo nulla
          nobis nemo. Laboriosam delectus libero saepe, ipsam consequuntur
          molestiae aspernatur deserunt perspiciatis placeat excepturi fugit?
          Iusto magni velit nesciunt modi error labore esse expedita fugiat
          eaque minima rerum repellat neque, soluta iure ducimus asperiores ut
          placeat. Ipsum sapiente, aliquid consequuntur nam eveniet eos eum
          totam laudantium? Omnis perspiciatis vitae qui autem, nostrum
          laboriosam, laborum illo magnam nesciunt debitis minus mollitia cumque
          laudantium asperiores fuga officiis beatae deleniti corrupti sunt
          sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          eligendi est debitis sapiente dignissimos dolorum, exercitationem,
          eaque aspernatur iste atque dolor adipisci veniam nesciunt ipsa,
          labore placeat reprehenderit! Fuga, mollitia cumque. Quam et
          consequatur illum ducimus laborum nostrum obcaecati veritatis nesciunt
          molestias nam voluptatum, asperiores temporibus sed? Quia illo nulla
          nobis nemo. Laboriosam delectus libero saepe, ipsam consequuntur
          molestiae aspernatur deserunt perspiciatis placeat excepturi fugit?
          Iusto magni velit nesciunt modi error labore esse expedita fugiat
          eaque minima rerum repellat neque, soluta iure ducimus asperiores ut
          placeat. Ipsum sapiente, aliquid consequuntur nam eveniet eos eum
          totam laudantium? Omnis perspiciatis vitae qui autem, nostrum
          laboriosam, laborum illo magnam nesciunt debitis minus mollitia cumque
          laudantium asperiores fuga officiis beatae deleniti corrupti sunt
          sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          eligendi est debitis sapiente dignissimos dolorum, exercitationem,
          eaque aspernatur iste atque dolor adipisci veniam nesciunt ipsa,
          labore placeat reprehenderit! Fuga, mollitia cumque. Quam et
          consequatur illum ducimus laborum nostrum obcaecati veritatis nesciunt
          molestias nam voluptatum, asperiores temporibus sed? Quia illo nulla
          nobis nemo. Laboriosam delectus libero saepe, ipsam consequuntur
          molestiae aspernatur deserunt perspiciatis placeat excepturi fugit?
          Iusto magni velit nesciunt modi error labore esse expedita fugiat
          eaque minima rerum repellat neque, soluta iure ducimus asperiores ut
          placeat. Ipsum sapiente, aliquid consequuntur nam eveniet eos eum
          totam laudantium? Omnis perspiciatis vitae qui autem, nostrum
          laboriosam, laborum illo magnam nesciunt debitis minus mollitia cumque
          laudantium asperiores fuga officiis beatae deleniti corrupti sunt
          sequi.
        </p> */}
      </div>
    </div>
  );
};

export default Service;
