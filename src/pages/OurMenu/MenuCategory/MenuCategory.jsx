import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import MenuCover from "../MenuCover/MenuCover";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, img, title, subtitle }) => {
  return (
    <div className="py-8 md:py-10">
      <MenuCover img={img} title={title} subtitle={subtitle} />
      <SectionContainer>
        <MenuItems items={items} />
      </SectionContainer>
      <div className="text-center pt-8 sm:pt-12">
        <Link
          to={`/order/${title}`}
          className="uppercase sm:text-lg font-medium border-b-2 border-black px-5 py-2 rounded-md hover:bg-slate-400"
        >
          Order your favourite food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
