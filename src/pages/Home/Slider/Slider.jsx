import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";
import slide4 from "../../../assets/home/04.jpg";
import slide5 from "../../../assets/home/05.png";
import slide6 from "../../../assets/home/06.png";

const Slider = () => {
  return (
    <Carousel showArrows={true} infiniteLoop className="text-center">
      <img src={slide1} alt="" />
      <img src={slide2} alt="" />
      <img src={slide3} alt="" />
      <img src={slide4} alt="" />
      <img src={slide5} alt="" />
      <img src={slide6} alt="" />
    </Carousel>
  );
};

export default Slider;
