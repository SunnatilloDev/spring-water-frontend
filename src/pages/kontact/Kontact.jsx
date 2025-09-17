import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Kontact = () => {
  const { t } = useTranslation();
  const [loading, setloading] = useState(false);
  function handleSubmit(e) {
    setloading(true);
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const token = "8313036544:AAGg9qbi3u389Dj-IRB0KY_IazRdapZOG_o";
    const chatId = "-4641622084";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `Ism: ${name} \nTelofon: ${phone}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: message,
      },
    })
      .then((res) => {
        toast.success("Muvaffaqiyatli yuborldi!");
        e.target[0].value = "";
        e.target[1].value = "";
      })
      .catch((err) => {
        toast.error("Yuborishda xatolik!");
        console.log(err);
      })
      .finally(() => setloading(false));
  }

  return (
    <div className="kontact">
      <div className="container">
        <div className="kontact_left_rigth">
          <div className="kontact_children_item">
            <div className="kontact_left">
              <div>
                <span className="kontact_left_text">{t("communication")}</span>
              </div>
              <div className="kontact_icons_tel">
                <div>
                  <BsTelephone size={25} />
                </div>
                <div>
                  <span className="kontact_tel">
                    <Link to={"tel:+998999608877"}>+998999608877</Link>
                  </span>
                </div>
              </div>
              <div className="kontact_email">
                <div>
                  <MdOutlineMailOutline size={29} />
                </div>
                <div>
                  <span className="kontact_email_text">info@spring.uz</span>
                </div>
              </div>
            </div>
            <div className="kontact_children" id="btn">
              <form onSubmit={handleSubmit}>
                <div className="kontact_form_children">
                  <div className="kontact_form">
                    <h1 className="kontact_form_text">{t("order")}</h1>
                    <div className="kontact_input">
                      <input
                        placeholder={t("name")}
                        className="kontact_input_children"
                        required
                        type="name"
                      />
                    </div>
                    <div className="kontact_input">
                      <input
                        placeholder={t("phone")}
                        className="kontact_input_children"
                        pattern="[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
                        required
                        type="number"
                        id="phone"
                      />
                    </div>
                  </div>
                  <div className="kontact_btn">
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="kontact_btn_btn"
                      >
                        {loading ? "Yuborilmoqda..." : "Yuborish"}
                      </button>
                    </div>
                    <div>
                      <svg
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.2813 4.88911L2.99038 11.4584C2.79444 11.5136 2.62003 11.6274 2.49047 11.7844C2.36091 11.9415 2.28237 12.1343 2.26534 12.3372C2.24832 12.5401 2.29362 12.7433 2.39519 12.9197C2.49676 13.0962 2.64977 13.2374 2.83376 13.3246L13.5351 18.3936C13.7438 18.4925 13.9119 18.6605 14.0108 18.8693L19.0798 29.5706C19.167 29.7546 19.3082 29.9076 19.4846 30.0092C19.6611 30.1108 19.8643 30.1561 20.0672 30.139C20.2701 30.122 20.4629 30.0435 20.6199 29.9139C20.777 29.7843 20.8907 29.6099 20.946 29.414L27.5153 6.12302C27.5635 5.95194 27.5653 5.77108 27.5204 5.59908C27.4755 5.42708 27.3856 5.27015 27.2599 5.14446C27.1342 5.01876 26.9773 4.92884 26.8053 4.88396C26.6333 4.83908 26.4524 4.84086 26.2813 4.88911Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.8579 18.5465L19.5148 12.8896"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontact;
