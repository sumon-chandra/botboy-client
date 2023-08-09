import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.webp";

const CertifiedSection = () => {
  return (
    <section className="relative z-20 flex flex-col gap-10 px-6 py-20 bg-fixed bg-center bg-no-repeat bg-cover lg:gap-20 certified-container lg:px-0 lg:py-52 bg-certified-img">
      <div className="z-20 text-center text-white">
        <h3 className="text-3xl font-head lg:text-7xl">
          Best quality certified
        </h3>
        <p className="w-full mx-auto text-xs lg:text-lg lg:w-4/12">
          Best accessories for your baby and toddlers with safe & environment
          friendly products.
        </p>
      </div>
      <div className="z-20 items-center justify-center gap-10 space-y-6 font-head lg:flex lg:space-y-0">
        <div className="flex items-center justify-center gap-4 px-8 py-2 rounded-full shadow lg:justify-between bg-slate-200 shadow-white">
          <img src={c1} alt="" className="w-6 lg:w-10" />
          <h3 className="lg:text-2xl">Eco Friendly Materials</h3>
        </div>
        <div className="flex items-center justify-center gap-4 px-8 py-2 rounded-full shadow lg:justify-between bg-slate-200 shadow-white">
          <img src={c2} alt="" className="w-6 lg:w-10" />
          <h3 className="lg:text-2xl">Eco Solvable Links</h3>
        </div>
      </div>
    </section>
  );
};

export default CertifiedSection;
