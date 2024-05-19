import React, { useState } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
  console.log(currentItem);
  const rootUrl = "https://admin.websitesprofessional.com";

  const stripPTags = (htmlString) => {
    return htmlString.replace(/<\/?p>/g, "");
  };
  return (
    <div>
      <div
        className="carousel_item"
        //   style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {currentItem === undefined ? (
          ""
        ) : (
          <div className="carousel_flex_div">
            <div className="carousel_Photo_div">
              {rootUrl + currentItem.image ? (
                <img
                  className="carousel_Photo"
                  src={rootUrl + currentItem.image}
                  alt=""
                />
              ) : (
                ""
              )}

              <div className="carousel_name_div">
                <FontAwesomeIcon
                  onClick={() => {
                    updateIndex(activeIndex - 1);
                  }}
                  className="arrowIcon"
                  icon={faChevronLeft}
                />
                <div>
                  {currentItem.name ? <p>{currentItem.name}</p> : ""}
                  {currentItem.address ? <p>{currentItem.address}</p> : ""}
                  {currentItem.feedback ? <p>{currentItem.address}</p> : ""}
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
            <p className="carousel_text_p">
              {currentItem.details ? stripPTags(currentItem.details) : ""}
            </p>
          </div>
        )}
      </div>

      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="swiperCarousel">
            {items.data.map((info) => (
              <SwiperSlide key={info.id}>
                {info.image ? (
                  <img
                    className="slider_Photo"
                    src={rootUrl + info.image}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
