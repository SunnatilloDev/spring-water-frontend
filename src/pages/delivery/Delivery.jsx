import {axios} from "axios";
import { useTranslation } from "react-i18next";
import deliveryVan from "../../assets/imgs/deliverguy.png";

const Delivery = () => {
  const SendMessage = (event) => {
    event.preventDefault();
    const token = "8407813211:AAEIxYNruJGZu7Z8I7EegdCPXNK5Dbmldcw";
    const chat_id = 67006091019;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chat_id,
        "text": name,
      },
    })
      .then((res) => {
        alert("Muvaffaqiyatli yuborildi");
      })
      .catch((error) => {
        alert("Yuborishda xatolik",error);
      });
  };

  const { t } = useTranslation();

  return (
    <div className="delivery-page">
      <div className="container">
        <div className="delivery-content">
          <div className="delivery-image">
            <img src={deliveryVan} alt="Water Delivery" />
          </div>
          <div className="delivery-form">
            <h2 className="delivery-title">
              {t("deliveryTitle") || "Buyurtma berish"}
            </h2>

            <form id="MyForm" onSubmit={SendMessage}>
              <div>
                <input type="text" id="name" />
              </div>
              <div>
                <input type="text" id="surname" />
              </div>
              <div>
                <button type="submit">Yuborish</button>
              </div>
            </form>

            {/* <form className="order-form" onSubmit={SendMessage}>
              <div className="form-group">
                <input
                  id="name"
                  type="text"
                  placeholder={t("name") || "Ismingiz"}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  id="surname"
                  type="tel"
                  placeholder={t("phone") || "Telefon"}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">
                  Yuborish
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
