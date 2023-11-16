import PageCover from "../../Shared/PageCover/PageCover";
import shopBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import MenuCards from "../../Shared/MenuCards/MenuCards";
import { Link, useParams } from "react-router-dom";

const OurShop = () => {
  const { category } = useParams();
  const menus = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialTabIndex = menus.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  const { menu } = useMenu();

  const saladItems = menu.filter((item) => item.category === "salad");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const drinksItems = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <PageCover
        img={shopBg}
        title={"Our shop"}
        subtitle={"Would you like to try a dish?"}
      />
      <SectionContainer>
        <Tabs
          className="text-center py-14 sm:py-20"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>
              <Link to={"/order/salad"}>Salad</Link>
            </Tab>
            <Tab>
              <Link to={"/order/pizza"}>Pizza</Link>
            </Tab>
            <Tab>
              <Link to={"/order/soup"}>Soup</Link>
            </Tab>
            <Tab>
              <Link to={"/order/desert"}>Desert</Link>
            </Tab>
            <Tab>
              <Link to={"/order/drinks"}>Drinks</Link>
            </Tab>
          </TabList>

          <TabPanel>
            {saladItems.length > 0 && <MenuCards items={saladItems} />}
          </TabPanel>
          <TabPanel>
            {pizzaItems.length > 0 && <MenuCards items={pizzaItems} />}
          </TabPanel>
          <TabPanel>
            {soupItems.length > 0 && <MenuCards items={soupItems} />}
          </TabPanel>
          <TabPanel>
            {dessertItems.length > 0 && <MenuCards items={dessertItems} />}
          </TabPanel>
          <TabPanel>
            {drinksItems.length > 0 && <MenuCards items={drinksItems} />}
          </TabPanel>
        </Tabs>
      </SectionContainer>
    </>
  );
};

export default OurShop;
