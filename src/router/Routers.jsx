import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Contacts from "../pages/kontact/Contacts";
import Company from "../pages/company/Company";
import Delivery from "../pages/delivery/Delivery";

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/company" element={<Company />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
};

export default Routers;
