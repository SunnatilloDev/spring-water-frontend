import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Link } from "react-router-dom";

const Sidber = () => {
  const { setIsActive } = useContext(ModalContext);
  return (
    <div>
      <div className="sidber">
        <div>
          <Link to={"/"} onClick={() => setIsActive(false)}>
            <h2>Bosh sahifa</h2>
          </Link>
        </div>
        <div>
          <a href="#products" onClick={() => setIsActive(false)}>
            <h2>Mahsulotlar</h2>
          </a>
        </div>
        <div>
          <Link>
            <h2>Yetkazib berish</h2>
          </Link>
        </div>
        <div>
          <Link to={"/contacts"} onClick={() => setIsActive(false)}>
            <h2>Kontakt</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidber;
