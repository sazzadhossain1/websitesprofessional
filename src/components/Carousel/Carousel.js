import React, { useState } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ items }) => {
  // const { description, image, name } = items;
  console.log(items.data);

  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex)
  //   const convertItemToArray = Object.keys(item);
  //   console.log(convertItemToArray);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.data.length - 1;
    } else if (newIndex >= items.data.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const currentItem = items.data[activeIndex];
  const rootUrl = "https://admin.websitesprofessional.com";

  const stripPTags = (htmlString) => {
    return htmlString.replace(/<\/?p>/g, "");
  };
  return (
    <div
      className="carousel_item"
      //   style={{ transform: `translate(-${activeIndex * 100}%)` }}
    >
      <div className="carousel_flex_div">
        <div className="carousel_Photo_div">
          <img
            className="carousel_Photo"
            src={rootUrl + currentItem.image}
            alt=""
          />
          <div className="carousel_name_div">
            <FontAwesomeIcon
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
              className="arrowIcon"
              icon={faChevronLeft}
            />
            <div>
              <p>{currentItem.name}</p>
              <p>{currentItem.address}</p>
            </div>
            <FontAwesomeIcon
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              className="arrowIcon"
              icon={faChevronRight}
            />
          </div>
        </div>
        <p className="carousel_text_p">{stripPTags(currentItem.details)}</p>
      </div>
    </div>
  );
};

export default Carousel;
