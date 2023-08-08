import { useEffect, useState } from "react";
import ToyCard from "./../ToyCard";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const SpecialProducts = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://botboy.vercel.app/only-for-you")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20">
      <div className="text-center">
        <p className="text-[12px]">Special Toys</p>
        <h4 className="text-2xl font-bold lg:text-5xl text-mainColor font-head">
          Only For You !
        </h4>
      </div>
      <div className="grid-cols-3 mt-8 lg:grid gap-x-4 gap-y-6">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        to="/all-toys"
        className="flex items-center justify-end w-24 mt-8 text-sm underline cursor-pointer text-mainColor gap-x-2"
      >
        <span>See More</span>
        <BsArrowUpRightSquare />
      </Link>
    </section>
  );
};

export default SpecialProducts;
