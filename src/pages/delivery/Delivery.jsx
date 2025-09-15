import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import deliveryVan from "../../assets/imgs/deliverguy.png"; // Using a placeholder image, you can replace it

const Delivery = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Here you would typically make an API call to submit the form
    // For now, we'll just simulate it with a timeout
    setTimeout(() => {
      toast.success(t("orderSuccess") || "Your order has been received!");
      setName("");
      setPhone("");
      setLoading(false);
    }, 1000);
  };

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
            <p className="delivery-subtitle">
              {t("deliverySubtitle") ||
                "Bizda O'zbekiston bo'ylab yetkazib berish bepul!"}
            </p>
            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t("name") || "Ismingiz"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder={t("phone") || "Telefon"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? t("sending") : t("send") || "Yuborish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
