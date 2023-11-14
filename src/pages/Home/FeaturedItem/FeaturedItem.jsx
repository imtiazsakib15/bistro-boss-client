import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import moment from "moment/moment";

const FeaturedItem = () => {
  const date = moment().format("MMMM D, YYYY");

  return (
    <div className="bg-featured bg-fixed bg-no-repeat bg-cover mt-5 sm:mt-10 lg:mt-14">
      <div className="bg-black w-full h-full opacity-80 py-20 text-white">
        <SectionContainer>
          <SectionTitle subtitle={"Check it out"} title={"Featured item"} />
          <div className="pt-12 flex flex-col md:flex-row items-center gap-10">
            <div>
              <img src={featuredImg} alt="" />
            </div>
            <div className="text-center md:text-left">
              <p>{date}</p>
              <h3 className="text-2xl sm:text-3xl font-medium uppercase mt-1">
                Where can i get some?
              </h3>
              <p className="text-sm sm:text-base pt-2.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="uppercase sm:text-lg font-medium border-b-2 border-white px-5 py-2 rounded-md mt-4 hover:bg-slate-900">
                Read more
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default FeaturedItem;
