import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidber = () => {
  const { setIsActive } = useContext(ModalContext);
  const { t } = useTranslation();

  return (
    <div>
      <div className="sidber">
        <div>
          <Link to={"/"} onClick={() => setIsActive(false)}>
            <h2>{t("main")}</h2>
          </Link>
        </div>
        <div>
          <Link to={"/company"} onClick={() => setIsActive(false)}>
            <h2>{t("about")}</h2>
          </Link>
        </div>
        <div>
          <Link
            to="/#products"
            onClick={() => {
              setIsActive(false);
              setTimeout(() => {
                const productsSection = document.getElementById("products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            <h2>{t("brand")}</h2>
          </Link>
        </div>
        <div>
          <Link to={"/delivery"} onClick={() => setIsActive(false)}>
            <h2>{t("delivery")}</h2>
          </Link>
        </div>
        <div>
          <Link to={"/contacts"} onClick={() => setIsActive(false)}>
            <h2>{t("contact")}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidber;
