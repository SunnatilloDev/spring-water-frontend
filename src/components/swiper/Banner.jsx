import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import hero1 from "../../assets/imgs/hero1.png";
import hero2 from "../../assets/imgs/hero2.png";
import hero3 from "../../assets/imgs/hero3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

const Banner = () => {


  // Slider images
  const slides = [
    {
      id: 1,
      textKey: "title",
      image: hero2,
    },
    {
      id: 2,
      textKey: "title",
      image: hero1,
    },
    {
      id: 3,
      textKey: "title",
      image: hero3,
    },
  ];

  return (
    <div className="banner">
      <div className="banner-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={500}
          grabCursor={true}
          className="banner-swiper"
          style={{ height: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={`Spring Water - Slide ${index + 1}`}
                className={`hero-image hero-image-${index + 1}`}
                draggable={false}
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
