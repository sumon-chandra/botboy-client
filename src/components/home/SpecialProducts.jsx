import { useEffect, useState } from "react";
import ToyCard from "./../ToyCard";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const SpecialProducts = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://botboy.vercel.app/toys/only-for-you")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <section className="lg:px-20 px-4 lg:py-20 py-10">
      <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
        <p className="text-[12px]">Special Toys</p>
        <h4 className="lg:text-5xl text-2xl font-bold text-mainColor">
          Only For You !
        </h4>
      </div>
      <div className="mt-8 lg:grid grid-cols-4 gap-x-4 gap-y-6">
        {toys.map((toy) => (
          <ToyCard toy={toy} />
        ))}
      </div>
      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        to="/all-toys"
        className="underline w-24 mt-8 text-sm text-mainColor justify-end items-center flex gap-x-2 cursor-pointer"
      >
        <span>See More</span>
        <BsArrowUpRightSquare />
      </Link>
    </section>
  );
};

export default SpecialProducts;
