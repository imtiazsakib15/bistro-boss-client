import PageCover from "../Shared/PageCover/PageCover";
import shopBg from "../../assets/shop/banner2.jpg";

const OurShop = () => {
  return (
    <>
      <PageCover
        img={shopBg}
        title={"Our shop"}
        subtitle={"Would you like to try a dish?"}
      />
    </>
  );
};

export default OurShop;
