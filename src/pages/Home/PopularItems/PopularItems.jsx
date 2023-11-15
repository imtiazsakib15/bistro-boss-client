import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularItems = () => {
  const { menu } = useMenu();

  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div className="pb-10">
      <SectionContainer>
        <SectionTitle subtitle={"Check it out"} title={"Popular items"} />
        {popularItems?.length > 0 ? (
          <MenuItems items={popularItems} />
        ) : (
          <div className="text-center text-xl sm:text-4xl font-semibold py-14">
            No Item Found
          </div>
        )}
        <div className="text-center pt-8 sm:pt-12">
          <button className="uppercase sm:text-lg font-medium border-b-2 border-black px-5 py-2 rounded-md hover:bg-slate-400">
            View full menu
          </button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PopularItems;
