import marvel from "../../assets/marvel.png";
import dc from "../../assets/dc.png";
import spiderman from "../../assets/spiderman.png";

const CategoryCard = () => {
  return (
    <section className="grid-cols-3 gap-5 px-4 py-8 space-y-6 lg:space-y-0 lg:px-72 lg:grid">
      <div className="p-10 hover:bg-secColor group rounded-lg cursor-pointer bg-white lg:h-[400px] shadow-lg flex flex-col justify-between">
        <img src={dc} alt="" />
        <div>
          <h3 className="py-3 text-2xl font-black text-center uppercase group-hover:text-white font-head text-mainColor">
            DC Specials
          </h3>
          <p className="text-center">
            Accessories that are made with safe plastics
          </p>
        </div>
      </div>
      <div className="flex hover:bg-secColor group flex-col justify-between p-10 lg:h-[400px] shadow-lg bg-white rounded-lg cursor-pointer">
        <img src={spiderman} alt="" className="" />
        <div>
          <h3 className="py-3 text-2xl font-black text-center uppercase group-hover:text-white font-head text-mainColor">
            Spider-man Specials
          </h3>
          <p className="text-center">
            Accessories that are made with safe plastics
          </p>
        </div>
      </div>
      <div className="flex hover:bg-secColor group flex-col justify-between p-10 lg:h-[400px] shadow-lg bg-white rounded-lg cursor-pointer">
        <img src={marvel} alt="" className="" />
        <div>
          <h3 className="py-3 text-2xl font-black text-center uppercase group-hover:text-white font-head text-mainColor">
            Marvel Specials
          </h3>
          <p className="text-center">
            Accessories that are made with safe plastics
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
