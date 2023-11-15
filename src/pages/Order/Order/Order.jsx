import PageCover from "../../Shared/PageCover/PageCover";
import shopBg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import MenuCards from "../../Shared/MenuCards/MenuCards";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
          className="py-20"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
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
