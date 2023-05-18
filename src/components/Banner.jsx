import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className=" h-56 lg:h-[500px] relative"
    >
      <SwiperSlide className="bg-[url('https://i.ibb.co/L1Jcw3T/banner-01.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute lg:right-20 right-4 lg:pt-24 pt-6 ">
          <p className=" lg:text-xl text-sm">Exclusive Offer On Toys</p>
          <h3 className="lg:text-7xl text-2xl font-bold">
            Kids Playing With <br /> Block Toys
          </h3>
          <a
            href="#"
            className="lg:px-6 lg:py-2 btn lg:btn-md btn-sm border-0 normal-case font-semibold lg:mt-6 mt-2 lg:text-xl text-xs text-white bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
          >
            Shop Now
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://i.ibb.co/TbW5yBq/banner-01-2.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute lg:right-20 right-4 lg:pt-24 pt-6 ">
          <p className=" lg:text-xl text-sm">Exclusive Offer On Toys</p>
          <h3 className="lg:text-7xl text-2xl font-bold">
            Make Kids happy <br /> & Healthy
          </h3>
          <a
            href="#"
            className="lg:px-6 lg:py-2 btn lg:btn-md btn-sm border-0 normal-case font-semibold lg:mt-6 mt-2 lg:text-xl text-xs text-white bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
          >
            Shop Now
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://i.ibb.co/8K4y5Zw/banner-01-4.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute lg:right-20 right-4 lg:pt-24 pt-6 ">
          <p className=" lg:text-xl text-sm">Exclusive Offer On Toys</p>
          <h3 className="lg:text-7xl text-2xl font-bold">
            Kids Playing With <br /> Block Toys
          </h3>
          <a
            href="#"
            className="lg:px-6 lg:py-2 btn lg:btn-md btn-sm border-0 normal-case font-semibold lg:mt-6 mt-2 lg:text-xl text-xs text-white bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
          >
            Shop Now
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://i.ibb.co/xf5tFzV/banner-01-1.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute lg:right-20 right-4 lg:pt-24 pt-6 ">
          <p className=" lg:text-xl text-sm">Exclusive Offer On Toys</p>
          <h3 className="lg:text-7xl text-2xl font-bold">
            Kids Playing With <br /> Block Toys
          </h3>
          <a
            href="#"
            className="lg:px-6 lg:py-2 btn lg:btn-md btn-sm border-0 normal-case font-semibold lg:mt-6 mt-2 lg:text-xl text-xs text-white bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
          >
            Shop Now
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
