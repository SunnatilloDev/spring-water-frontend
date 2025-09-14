import ProductCard from "./ProductCard";
import spring from "../assets/imgs/spring-removebg-preview(1).png";
import epidimiologik from "../assets/imgs/epidimiologik.jpg";
import ekbaklashka from "../assets/imgs/ekbaklashka.jpg";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();
  return (
    <div className="card" id="card">
      <div className="container">
        <div className="card_text">
          <h2>{t("why")}</h2>
        </div>
        <div className="cards">
          <div className="card_1">
            <div className="card_1_children">
              <div className="card_1_children_img">
                <img
                  className="card_1_children_img_children"
                  draggable={false}
                  src={spring}
                  alt="rasm..."
                />
              </div>
              <div>
                <p className="card_1_children_text">{t("whytext")}</p>
              </div>
            </div>
          </div>
          <div className="card_1">
            <div className="card_1_children">
              <div className="card_1_children_img">
                <img
                  className="card_1_children_img_children"
                  draggable={false}
                  src={ekbaklashka}
                  alt="rasm..."
                />
              </div>
              <div>
                <p className="card_1_children_text">{t("whytext1")}</p>
              </div>
            </div>
          </div>
          <div className="card_1">
            <div className="card_1_children">
              <div className="card_1_children_img">
                <img
                  className="card_1_children_img_children"
                  draggable={false}
                  src={epidimiologik}
                  alt="rasm..."
                />
              </div>
              <div>
                <p className="card_1_children_text">{t("whytext2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductCard />
    </div>
  );
};

export default Card;
