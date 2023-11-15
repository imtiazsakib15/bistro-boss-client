import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import menuImg from "../../../assets/menu/banner3.jpg";
import TodaysOffer from "../TodaysOffer/TodaysOffer";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const { menu } = useMenu();
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");

  return (
    <>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>
      <PageCover
        img={menuImg}
        title={"Our menu"}
        subtitle={"Would you like to try our dish?"}
      />
      <TodaysOffer />

      {/* Dessert Category */}
      <MenuCategory
        items={dessertItems}
        img={dessertBg}
        title={"Dessert"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      {/* Pizza Category */}
      <MenuCategory
        items={pizzaItems}
        img={pizzaBg}
        title={"Pizza"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      {/* Salad Category */}
      <MenuCategory
        items={saladItems}
        img={saladBg}
        title={"Salad"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      
      {/* Soup Category */}
      <MenuCategory
        items={soupItems}
        img={soupBg}
        title={"Soup"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </>
  );
};

export default OurMenu;
