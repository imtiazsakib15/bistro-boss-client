import FeaturedItem from "../FeaturedItem/FeaturedItem";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularItems from "../PopularItems/PopularItems";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <OrderOnline />
      <PopularItems />
      <FeaturedItem />
    </>
  );
};

export default Home;
