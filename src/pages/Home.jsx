import AboutService from "../components/AboutService";
import Banner from "../components/Banner";
import CategoryTabs from "../components/CategoryTabs";
import FlatDiscount from "../components/FlatDiscount";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutService />
      <FlatDiscount />
      <CategoryTabs />
      <Gallery />
    </>
  );
};

export default Home;
