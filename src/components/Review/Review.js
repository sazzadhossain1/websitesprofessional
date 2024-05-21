import "./Review.css";

import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const Review = () => {
  // const items = [
  //   {
  //     id: 1,
  //     name: "Standard Room",
  //     img: reviewPhotoOne,
  //     description:
  //       "aaaaaaaaLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
  //   },
  //   {
  //     id: 2,

  //     name: "Jhonas smith",
  //     img: reviewPhotoTwo,
  //     description:
  //       "bbbbbbbLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
  //   },
  //   {
  //     id: 3,

  //     name: "Jhonkar Mahbub",
  //     img: reviewPhotoThree,
  //     description:
  //       "ccccccccLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
  //   },
  //   {
  //     id: 4,

  //     name: "My Teacher",
  //     img: reviewPhotoFour,
  //     description:
  //       "dddddddddLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
  //   },
  //   {
  //     id: 5,

  //     name: "and me",
  //     img: reviewPhotoFive,
  //     description:
  //       "eeeeeeeeeLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
  //   },
  // ];

  useEffect(() => {
    fetch("https://admin.websitesprofessional.com/api/testimonial")
      .then((res) => res.json())
      .then((data) => setItems(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [items, setItems] = useState(null);
  // console.log(items);

  if (!items || !Array.isArray(items.data)) {
    return <div>Loading...</div>;
  }

  // console.log(items);
  return (
    <div>
      <div className="reviewCarousel">
        <div className="review_parent_div inner"></div>
        <div className="inner">
          {/* <Carousel items={items}></Carousel> */}
          <TestimonialSlider items={items}></TestimonialSlider>
        </div>
      </div>
    </div>
  );
};

export default Review;
