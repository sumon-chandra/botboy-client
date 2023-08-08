import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BsArrowUpRightSquare } from "react-icons/bs";
import Countdown from "../Countdown";
import ToyCard from "../ToyCard";

const FlashSell = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://botboy.vercel.app/discount")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="m-4 lg:mx-20 lg:my-20">
      <div className="flex items-start justify-between">
        <div className="lg:flex gap-x-2">
          <h4 className="mb-4 text-2xl font-bold lg:text-5xl text-mainColor font-head">
            Flash Sale
          </h4>
          <Countdown duration={1 * 24 * 60 * 60 * 1000} />
        </div>
        <p className="flex items-center justify-end text-sm underline cursor-pointer text-mainColor gap-x-2">
          <span>See More</span>
          <BsArrowUpRightSquare />
        </p>
      </div>

      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{ padding: "1rem !important" }}
        className="items-center justify-between border lg:flex border-mainColor"
      >
        {toys?.map((toy) => (
          <SwiperSlide key={toy._id} className="py-4">
            <ToyCard toy={toy} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSell;
