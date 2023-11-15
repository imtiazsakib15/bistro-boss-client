import { Parallax } from "react-parallax";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";

// eslint-disable-next-line react/prop-types
const MenuCover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="menu"
      strength={-200}
    >
      <SectionContainer>
        <div className="bg-no-repeat bg-center bg-cover px-4 py-12 sm:px-20 sm:py-24">
          <div className="bg-black bg-opacity-70 text-white text-center font-cinzel px-4 py-8 sm:px-10 sm:py-14 md:px-20 md:py-20">
            <h3 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold">
              {title}
            </h3>
            <p className="pt-2 text-sm sm:text-base font-medium uppercase">
              {subtitle}
            </p>
          </div>
        </div>
      </SectionContainer>
    </Parallax>
  );
};

export default MenuCover;
