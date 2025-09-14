import Products from "./components/product/Products";
import Banner from "./components/swiper/Banner";
import Card from "./pages/Card";
import Kontact from "./pages/kontact/Kontact";
import OurColleagues from "./pages/section/OurColleagues";
import VideoCards from "./components/videos/VideoCards";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <main>
        <Banner />
        <Products />
        <VideoCards />

        <OurColleagues />
        <Card />
        <Kontact />
      </main>
      <Toaster />
    </>
  );
}

export default App;
