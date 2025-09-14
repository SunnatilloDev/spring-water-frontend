import React from "react";
import { useTranslation } from "react-i18next";
import waterDropImage from "../../assets/imgs/aboutimg.jpg"; // Using a placeholder water drop image
import litr05 from "../../assets/imgs/0.5-poland-spring.png";
import litr1 from "../../assets/imgs/1-poland-spring.png";
import litr15 from "../../assets/imgs/1__5litr_poland_spring.png";
import litr5 from "../../assets/imgs/5l-poland-spring.png";

function Company() {
  const { t } = useTranslation();

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
            <div className="company-products-grid">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
