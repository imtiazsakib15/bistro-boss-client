import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const OrderOnline = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle
          subtitle={"From 11:00am to 10:00pm"}
          title={"Order online"}
        />
        <div className="py-12 text-center mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <img className="w-full" src={slide1} alt="" />
                <span className="text-2xl text-white absolute bottom-4">
                  Salad
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="w-full" src={slide2} alt="" />
                <span className="text-2xl text-white absolute bottom-4">
                  Pizza
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="w-full" src={slide3} alt="" />
                <span className="text-2xl text-white absolute bottom-4">
                  Soup
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="w-full" src={slide4} alt="" />
                <span className="text-2xl text-white absolute bottom-4">
                  Dessert
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img className="w-full" src={slide5} alt="" />
                <span className="text-2xl text-white absolute bottom-4">
                  Salad
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </SectionContainer>
    </>
  );
};

export default OrderOnline;
