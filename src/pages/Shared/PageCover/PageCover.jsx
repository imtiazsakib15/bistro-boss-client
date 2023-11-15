import SectionContainer from "../SectionContainer/SectionContainer";

const PageCover = ({ img, title, subtitle }) => {
  return (
    <div
      className="pt-36 pb-20 md:pt-44 md:pb-28 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <SectionContainer>
        <div className="bg-black bg-opacity-70 text-white text-center font-cinzel px-4 py-8 sm:px-10 sm:py-14 md:px-20 md:py-20">
          <h3 className="uppercase text-2xl sm:text-4xl lg:text-6xl font-bold">
            {title}
          </h3>
          <p className="pt-2 text-sm sm:text-base font-medium uppercase">
            {subtitle}
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PageCover;
