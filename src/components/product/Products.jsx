import Slider from "react-slick";

import { useTranslation } from "react-i18next";
import litr05 from "../../assets/imgs/0.5-poland-spring.png";
import litr1 from "../../assets/imgs/1-poland-spring.png";
import litr15 from "../../assets/imgs/1__5litr_poland_spring.png";
import litr5 from "../../assets/imgs/5litr.png";
import litr10 from "../../assets/imgs/10l-poland-spring.png";
import litr19 from "../../assets/imgs/water18.9litr.png";

// import translationsUz from "../locale/translationsUz";

const Products = () => {
  const { t } = useTranslation();

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };
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
    <div className="products" id="products">
      <div className="products_text">
        <div className="products_text_top">
          <p value="en" onChange={changeLangHandler}>
            {t("offer")}
          </p>
        </div>
        <div className="products_text_bottom">
          <p value="en" onChange={changeLangHandler}>
            {t("title1")}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="products_card">
              <div>
                <div className="products_card_img_item_1">
                  <img
                    className="products_card_img"
                    src={litr05}
                    alt="rasm..."
                  />
                </div>
                <div className="product_card_text_btn">
                  <div>
                    <p className="products_card_text">{t("price")}</p>
                  </div>
                  <div>
                    <p className="products_card_title">{t("text1")}</p>
                  </div>
                  <div className="products_card_btn">
                    <button className="products_card_btn_children">
                      <a href="#btn">{t("make")}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="products_card">
              <div>
                <div className="products_card_img_item_1">
                  <img
                    className="products_card_img"
                    src={litr1}
                    alt="rasm..."
                  />
                </div>
                <div className="product_card_text_btn">
                  <div>
                    <p className="products_card_text">{t("price1")}</p>
                  </div>
                  <div>
                    <p className="products_card_title">{t("text2")}</p>
                  </div>
                  <div className="products_card_btn">
                    <button className="products_card_btn_children">
                      <a href="#btn">{t("make")}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="products_card">
              <div>
                <div className="products_card_img_item_1">
                  <img
                    className="products_card_img"
                    src={litr15}
                    alt="rasm..."
                  />
                </div>
                <div className="product_card_text_btn">
                  <div>
                    <p className="products_card_text">{t("price2")}</p>
                  </div>
                  <div>
                    <p className="products_card_title">{t("text3")}</p>
                  </div>
                  <div className="products_card_btn">
                    <button className="products_card_btn_children">
                      <a href="#btn">{t("make")}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="products_card">
              <div>
                <div className="products_card_img_item_1">
                  <img
                    className="products_card_img"
                    src={litr5}
                    alt="rasm..."
                  />
                </div>
                <div className="product_card_text_btn">
                  <div>
                    <p className="products_card_text">{t("price3")}</p>
                  </div>
                  <div>
                    <p className="products_card_title">{t("text4")}</p>
                  </div>
                  <div className="products_card_btn">
                    <button className="products_card_btn_children">
                      <a href="#btn">{t("make")}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="products_card">
              <div>
                <div className="products_card_img_item_1">
                  <img
                    className="products_card_img"
                    src={litr10}
                    alt="rasm..."
                  />
                </div>
                <div className="product_card_text_btn">
                  <div>
                    <p className="products_card_text">{t("price4")}</p>
                  </div>
                  <div>
                    <p className="products_card_title">{t("text5")}</p>
                  </div>
                  <div className="products_card_btn">
                    <button className="products_card_btn_children">
                      <a href="#btn">{t("make")}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="products_card">
              <div>
                <div className="products_card_img_item_1">
                  <img
                    className="products_card_img"
                    src={litr19}
                    alt="rasm..."
                  />
                </div>
                <div className="product_card_text_btn">
                  <div>
                    <p className="products_card_text">{t("price5")}</p>
                  </div>
                  <div>
                    <p className="products_card_title">{t("text6")}</p>
                  </div>
                  <div className="products_card_btn">
                    <button className="products_card_btn_children">
                      <a href="#btn">{t("make")}</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
