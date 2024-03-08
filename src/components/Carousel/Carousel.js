import React, { useState } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ items }) => {
  // const { description, img, name } = item;
  console.log(items);

  const [activeIndex, setActiveIndex] = useState(0);

  //   const convertItemToArray = Object.keys(item);
  //   console.log(convertItemToArray);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const currentItem = items[activeIndex];
  return (
    <div
      className="carousel_item"
      //   style={{ transform: `translate(-${activeIndex * 100}%)` }}
    >
      <div className="carousel_flex_div">
        <div className="carousel_Photo_div">
          <img className="carousel_PhotoThree" src={currentItem.img} alt="" />
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
              <p>UPWORK, New York</p>
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
        <p className="carousel_text_p">{currentItem.description}</p>
      </div>
    </div>
  );
};

export default Carousel;
