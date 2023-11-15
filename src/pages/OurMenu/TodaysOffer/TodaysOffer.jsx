import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";

const TodaysOffer = () => {
  const [popularItems, setPopularItems] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "offered");
        setPopularItems(popular);
      });
  }, []);

  return (
    <div className="py-8 md:py-10">
      <SectionContainer>
        <SectionTitle subtitle={"Don't miss"} title={"Today's offer"} />
        {popularItems?.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-5 pt-12">
            {popularItems.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl sm:text-4xl font-semibold py-14">
            No Item Found
          </div>
        )}
        <div className="text-center pt-8 sm:pt-12">
          <button className="uppercase sm:text-lg font-medium border-b-2 border-black px-5 py-2 rounded-md hover:bg-slate-400">
            Order your favourite food
          </button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default TodaysOffer;
