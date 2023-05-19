import AboutService from "../components/AboutService";
import Banner from "../components/Banner";
import CategoryTabs from "../components/CategoryTabs";
import FlashSell from "../components/FlashSell";
import FlatDiscount from "../components/FlatDiscount";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutService />
      <FlashSell />
      <FlatDiscount />
      <CategoryTabs />
      <Gallery />
    </>
  );
};

export default Home;
