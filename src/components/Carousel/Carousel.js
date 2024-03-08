import React from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ item }) => {
  console.log(item);
  const { description, img, name } = item;
  return (
    <div>
      <div className="carousel_flex_div">
        <div className="carousel_Photo_div">
          <img className="carousel_PhotoThree" src={img} alt="" />
          <div className="carousel_name_div">
            <FontAwesomeIcon className="arrowIcon" icon={faChevronLeft} />
            <div>
              <p>{name}</p>
              <p>UPWORK, New York</p>
            </div>
            <FontAwesomeIcon className="arrowIcon" icon={faChevronRight} />
          </div>
        </div>
        <p className="carousel_text_div">{description}</p>
      </div>
    </div>
  );
};

export default Carousel;
