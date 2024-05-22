import React from "react";
import "./TestimonialSlider.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialSlider = ({ items }) => {
  console.log(items.data);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  const rootUrl = "https://admin.websitesprofessional.com";
  return (
    <div className="testimonialSlider_parent_div">
      <Carousel responsive={responsive}>
        {items.data.map((info) => (
          <div className="testimonial_map_div" key={info.id}>
            {/* {info.image ? (
              <img
                className="testimonial_user"
                src={rootUrl + info.image}
                alt=""
              />
            ) : (
              ""
            )} */}

            <div className="testimonial_text_div">
              <p className="testimonial_name">{info.name}</p>
              <p className="testimonial_address">{info.address}</p>
              <p className="testimonial_feedback">{info.feedback}</p>
              {/* <p>{info.details.replace(/<br\s*\/?>/gi, "")}</p> */}
              <p
                className="testimonial_p"
                dangerouslySetInnerHTML={{ __html: info.details }}
              ></p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
