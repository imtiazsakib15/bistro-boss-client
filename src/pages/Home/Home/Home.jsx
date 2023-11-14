import About from "../About/About";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularItems from "../PopularItems/PopularItems";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Slider />
      <OrderOnline />
      <About />
      <PopularItems />
      <FeaturedItem />
      <Testimonials />
    </>
  );
};

export default Home;
