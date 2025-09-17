import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { MdOutlineSms } from "react-icons/md";
import string from "../../assets/imgs/spring-removebg-preview(1).png";

import { HiOutlineMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_children">
          <div className="footer_networks">
            <div>
              <img
                className="footer_logo"
                draggable={false}
                src={string}
                alt="rasm"
              />
            </div>
            <div className="footer_icons">
              <div className="footer_telegrom">
                <FaTelegramPlane />
              </div>
              <div className="footer_instogrom">
                <FaInstagram />
              </div>
              <div className="footer_facebook">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="footer_children_1">
            <div className="footer_children___1">
              <div className="footer_1_icon">
                <HiOutlineMapPin className="footer_1_icons" size={45} />
              </div>
              <div className="footer-1">
                <div className="footer_1_children">
                  <p className="footer_1_children_text">{t("Tous")}</p>
                </div>
                <div className="footer_2">
                  <div className="footer_2_children">
                    <p className="footer_2_text">{t("call")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_3">
              <div className="footer_3_icon">
                <MdOutlineSms size={30} />
              </div>
              <div className="footer_3_children">
                <div>
                  <p className="footer_3_children_text_1">info@spring.uz</p>
                </div>
                <div>
                  <p className="footer_3_children_text_2">{t("mail")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <iframe
              className="footer_maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.427221585889!2d60.60275398975296!3d41.55999751122483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc998d0f9aa1d%3A0xdea142db89a830e4!2zRVZPUy3QlNCw0YDQuNGC0LDQuw!5e0!3m2!1sru!2s!4v1720378830117!5m2!1sru!2s"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
