import partner1 from "../../assets/partner/partner-1.avif";
import partner2 from "../../assets/partner/partner-2.avif";
import partner3 from "../../assets/partner/partner-3.avif";
import partner4 from "../../assets/partner/partner-4.avif";
import partner5 from "../../assets/partner/partner-5.avif";
import partner6 from "../../assets/partner/partner-6.avif";
import partner7 from "../../assets/partner/partner-7.png";
import partner8 from "../../assets/partner/partner-8.png";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
];
const OurPartners = () => {
  return (
    <section className="px-4 pt-10 lg:px-20 lg:pt-20">
      <div className="text-center">
        <p className="text-[12px]">Our Partners</p>
        <h4 className="text-2xl font-bold lg:text-5xl text-mainColor font-head">
          Our Best Partners
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-10 py-8 lg:py-20 lg:grid-cols-8">
        {partners.map((img) => (
          <figure key={img} className="group">
            <img
              src={img}
              alt=""
              className="w-16 lg:w-32 saturate-0 group-hover:saturate-100"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
