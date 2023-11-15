import SectionContainer from "../../Shared/SectionContainer/SectionContainer";

const About = () => {
  return (
    <>
      <SectionContainer>
        <div className="bg-about bg-fixed bg-no-repeat bg-center bg-cover px-4 py-12 sm:px-20 sm:py-24 mb-12 sm:mb-16 md:mb-20 sm:mt-4">
          <div className="bg-white text-center px-4 py-6 sm:px-10 sm:py-14 md:px-20 md:py-20">
            <h3 className="uppercase text-2xl sm:text-4xl font-cinzel">
              Bistro boss
            </h3>
            <p className="pt-2 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default About;
