import "./Review.css";
import reviewBackgroundPhoto from "../../accts/reviewPhoto/reviewBackgroundPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import reviewPhotoOne from "../../accts/reviewPhoto/reviewPhotoOne.webp";
import reviewPhotoTwo from "../../accts/reviewPhoto/reviewPhotoTwo.png";
import reviewPhotoThree from "../../accts/reviewPhoto/reviewPhotoThree.jpeg";
import reviewPhotoFour from "../../accts/reviewPhoto/reviewPhotoFour.jpeg";
import reviewPhotoFive from "../../accts/reviewPhoto/reviewPhotoFive.jpeg";
import Carousel from "../Carousel/Carousel";

const Review = () => {
  const items = [
    {
      id: 1,
      name: "Standard Room",
      img: reviewPhotoOne,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
    },
    {
      id: 2,

      name: "Standard Room",
      img: reviewPhotoTwo,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
    },
    {
      id: 3,

      name: "Standard Room",
      img: reviewPhotoThree,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
    },
    {
      id: 4,

      name: "Standard Room",
      img: reviewPhotoFour,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
    },
    {
      id: 5,

      name: "Standard Room",
      img: reviewPhotoFive,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto voluptatibus facilis quo aliquid perspiciatis. Laudantium at dolores labore accusantium?",
    },
  ];
  return (
    <div>
      <div className="review_parent_div"></div>
      {items.map((item) => (
        <Carousel item={item} key={item.id}></Carousel>
      ))}
    </div>
  );
};

export default Review;
