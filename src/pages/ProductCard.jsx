import Slider from "react-slick";

import litr05 from "../assets/imgs/0.5-poland-spring.png";
import litr1 from "../assets/imgs/1-poland-spring.png";
import litr15 from "../assets/imgs/1__5litr_poland_spring.png";
import litr5 from "../assets/imgs/5litr.png";
import litr10 from "../assets/imgs/10l-poland-spring.png";
import litr19 from "../assets/imgs/water18.9litr.png";
import { useTranslation } from "react-i18next";

const Product = [
  {
    id: 1,
    img: litr05,
  },
  {
    id: 2,

    img: litr1,
  },
  {
    id: 3,

    img: litr15,
  },
  {
    id: 4,

    img: litr5,
  },
  {
    id: 5,

    img: litr10,
  },
  {
    id: 6,

    img: litr19,
  },
];
const ProductCard = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="ProductCard">
      <div className="container">
        <div id="item" className="product_card_text">
          <h3>{t("products")}</h3>
        </div>

        <div className="products-img">
          <div className="slider-container">
            <Slider {...settings}>
              {Product.map((item) => (
                <div className="products-img_1">
                  <img
                    className="products-img_children"
                    src={item.img}
                    alt="rasm"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
