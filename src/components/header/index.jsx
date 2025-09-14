import { Link } from "react-router-dom";
import string from "../../assets/imgs/spring-removebg-preview(1).png";
import { useTranslation } from "react-i18next";
import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../context/ModalContext";
import Sidber from "./Sidber";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
function Header({ changeLang }) {
  const { isActive, setIsActive } = useContext(ModalContext);
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-row">
            <div className="header-logo-icons">
              <div className="header-logo">
                <Link to={"/"}>
                  <img
                    className="header_logo"
                    src={string}
                    alt="Spring Taste"
                  />
                </Link>
              </div>
              <div className="icons">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className="header-icons"
                >
                  {isActive ? (
                    <MdClose size={30} />
                  ) : (
                    <IoMdMenu className="menu" size={30} />
                  )}
                </button>
                <div className={`sibeder ${isActive ? "open" : "hide"}`}>
                  <Sidber />
                </div>
              </div>
            </div>

            <div className="header-nav">
              <div className="header-link_rigth">
                <Link className="header-link" to="/">
                  {t("main")}
                </Link>
                <Link to={"/company"} className="header-link">
                  {t("about")}
                </Link>
                <a className="header-link" href="#products">
                  {t("brand")}
                </a>
                <Link className="header-link" to="/delivery">
                  {t("delivery")}
                </Link>
                <Link to={"/contacts"} className="header-link">
                  {t("contact")}
                </Link>
              </div>

              <div className="language-selector">
                <select className="section" onChange={changeLangHandler}>
                  <option className="option" value="uz">
                    Uz
                  </option>
                  <option className="option" value="en">
                    En
                  </option>
                  <option className="option" value="Ru">
                    Ru
                  </option>
                </select>
                <IoIosArrowDown className="dropdown-icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
