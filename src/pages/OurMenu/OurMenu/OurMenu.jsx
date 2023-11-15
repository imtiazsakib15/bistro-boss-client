import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import menuImg from "../../../assets/menu/banner3.jpg";
import TodaysOffer from "../TodaysOffer/TodaysOffer";

const OurMenu = () => {
  return (
    <>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>
      </Helmet>
      <PageCover
        img={menuImg}
        title={"Our menu"}
        subtitle={"Would you like to try our dish?"}
      />
      <TodaysOffer />
    </>
  );
};

export default OurMenu;
