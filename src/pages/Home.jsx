import AboutService from "../components/home/AboutService";
import Banner from "../components/home/Banner";
import CategoryTabs from "../components/home/CategoryTabs";
import FlashSell from "../components/home/FlashSell";
import FlatDiscount from "../components/home/FlatDiscount";
import Gallery from "../components/home/Gallery";
import SpecialDiscount from "../components/home/SpecialDiscount";
import SpecialProducts from "../components/home/SpecialProducts";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner />
      <AboutService />
      <FlashSell />
      <FlatDiscount />
      <CategoryTabs />
      <SpecialDiscount />
      <SpecialProducts />
      <Gallery />
    </>
  );
};

export default Home;
