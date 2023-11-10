import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// img
import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"Form 11.00am to 10.00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slideImg1} alt={slideImg1} />
          <h3 className="text-4xl uppercase text-center text-white -mt-20 mb-20">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg2} alt={slideImg2} />
          <h3 className="text-4xl uppercase text-center text-white -mt-20 mb-20">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg3} alt={slideImg3} />
          <h3 className="text-4xl uppercase text-center text-white -mt-20 mb-20">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg4} alt={slideImg4} />
          <h3 className="text-4xl uppercase text-center text-white -mt-20 mb-20">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg5} alt={slideImg5} />
          <h3 className="text-4xl uppercase text-center text-white -mt-20 mb-20">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
