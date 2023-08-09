import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BsArrowUpRightSquare } from "react-icons/bs";
import Countdown from "../Countdown";
import { Link } from "react-router-dom";

const FlashToyCard = ({ toy }) => {
  return (
    <Link
      to={`/toys/${toy._id}`}
      key={toy._id}
      className="relative z-0 flex items-center justify-between w-full h-64 gap-6 p-6 mb-4 bg-white border border-indigo-100 rounded-lg shadow-xl lg:mb-0"
    >
      <figure className="w-20 overflow-hidden">
        <img src={toy.picture} alt={toy.toy_name} />
      </figure>
      <div className="">
        <div className="text-xs font-bold text-mainColor">
          <p>{toy.toy_name} </p>
        </div>
        <div className="items-center justify-between py-2 ">
          {toy.discount ? (
            <p className="font-bold">
              {toy.discount_price}{" "}
              <span className="text-xs font-normal line-through">
                {toy.price}
              </span>
            </p>
          ) : (
            <p className="font-bold">{toy.price}</p>
          )}

          <p className="flex items-center justify-end text-sm font-bold gap-x-2">
            <ReactStars size={20} value={toy.rating} edit={false} />
            <span>{toy.rating}</span>
          </p>
        </div>
      </div>
      {toy.discount && (
        <div className="absolute text-xs font-bold border-0 badge right-4 top-4 bg-mainColor">
          - {toy.discount}%
        </div>
      )}
    </Link>
  );
};

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
            slidesPerView: 2,
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
        className="items-center jimport { ReactStars } from 'react-rating-stars-component';
ustify-between border lg:flex border-mainColor"
      >
        {toys?.map((toy) => (
          <SwiperSlide key={toy._id} className="py-4">
            <FlashToyCard toy={toy} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSell;
