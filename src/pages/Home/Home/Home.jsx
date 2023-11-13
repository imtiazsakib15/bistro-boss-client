import OrderOnline from "../OrderOnline/OrderOnline";
import PopularItems from "../PopularItems/PopularItems";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <OrderOnline />
      <PopularItems />
    </>
  );
};

export default Home;
