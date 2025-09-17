import { useTranslation } from "react-i18next";
import { xamkorlarimiz } from "../../components/imgs.js";

const OurColleagues = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="section_text">
        <h3>{t("partners")}</h3>
      </div>
      <div className="section_scroll">
        <div className="section_scroll_reversed">
          {xamkorlarimiz.map((item) => (
            <img
              key={item.id}
              className="section_scroll_reversed_img"
              src={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurColleagues;
