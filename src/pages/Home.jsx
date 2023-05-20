import AboutService from "../components/home/AboutService";
import Banner from "../components/home/Banner";
import CategoryTabs from "../components/home/CategoryTabs";
import FlashSell from "../components/home/FlashSell";
import FlatDiscount from "../components/home/FlatDiscount";
import Gallery from "../components/home/Gallery";
import SpecialDiscount from "../components/home/SpecialDiscount";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutService />
      <FlashSell />
      <FlatDiscount />
      <CategoryTabs />
      <SpecialDiscount />
      <Gallery />
    </>
  );
};

export default Home;
