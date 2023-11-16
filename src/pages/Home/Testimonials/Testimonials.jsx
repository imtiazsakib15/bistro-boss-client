import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ReactStars from "react-stars";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="py-12 md:py-20">
      <SectionContainer>
        <SectionTitle
          subtitle={"What Our Clients Say"}
          title={"Testimonials"}
        />
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.length > 0 &&
              reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="text-center mt-5 md:mt-10">
                    <ReactStars
                      className="mx-auto w-max"
                      count={5}
                      value={review.rating}
                      edit={false}
                      size={32}
                      color2={"#ffbb00"}
                    />
                    <FaQuoteLeft className="text-6xl sm:text-7xl mx-auto pt-2" />
                    <p className="text-sm sm:text-base px-10 sm:px-12 md:px-16 pt-5">
                      {review.details}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-medium text-yellow-600 pt-2">
                      {review.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Testimonials;
