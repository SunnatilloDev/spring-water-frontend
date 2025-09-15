import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

// Import slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import waterDropImage from "../../assets/imgs/aboutimg.jpg"; // Using a placeholder water drop image
import litr05 from "../../assets/imgs/bottles/bottle_0.5l.png";
import litr1 from "../../assets/imgs/bottles/bottle_1l_1_5l.png";
import litr15 from "../../assets/imgs/bottles/bottle_1l_1_5l.png";
import litr5 from "../../assets/imgs/bottles/bottle_5l.png";
import litr10 from "../../assets/imgs/bottles/bottle_10l.png";
import litr19 from "../../assets/imgs/bottles/bottle_19l.png";

function Company() {
  const { t } = useTranslation();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="company">
      <div className="container">
        <div className="company-row">
          {/* Hero image section */}
          <div className="company-img">
            <img src={waterDropImage} alt="Water Drop" />
          </div>

          {/* Company description section */}
          <div className="company-text">
            <p>{t("title")}</p>
          </div>

          {/* Products section */}
          <div className="company-products">
            <h2 className="company-products-title">{t("products")}</h2>
            <div className="company-products-slider">
              <Slider {...settings}>
                <div className="company-product-card">
                  <img src={litr05} alt="0.5L Water" />
                  <div className="company-product-info">
                    <p className="company-product-name">{t("text1")}</p>
                    <p className="company-product-price">{t("price")}</p>
                  </div>
                </div>

                <div className="company-product-card">
                  <img src={litr1} alt="1L Water" />
                  <div className="company-product-info">
                    <p className="company-product-name">{t("text2")}</p>
                    <p className="company-product-price">{t("price1")}</p>
                  </div>
                </div>

                <div className="company-product-card">
                  <img src={litr15} alt="1.5L Water" />
                  <div className="company-product-info">
                    <p className="company-product-name">{t("text3")}</p>
                    <p className="company-product-price">{t("price2")}</p>
                  </div>
                </div>

                <div className="company-product-card">
                  <img src={litr5} alt="5L Water" />
                  <div className="company-product-info">
                    <p className="company-product-name">{t("text4")}</p>
                    <p className="company-product-price">{t("price3")}</p>
                  </div>
                </div>

                <div className="company-product-card">
                  <img src={litr10} alt="10L Water" />
                  <div className="company-product-info">
                    <p className="company-product-name">{t("text5")}</p>
                    <p className="company-product-price">{t("price4")}</p>
                  </div>
                </div>

                <div className="company-product-card">
                  <img src={litr19} alt="19L Water" />
                  <div className="company-product-info">
                    <p className="company-product-name">{t("text6")}</p>
                    <p className="company-product-price">{t("price5")}</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
