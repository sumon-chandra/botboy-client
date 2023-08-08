import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className=" h-56 lg:h-[500px] relative"
    >
      <SwiperSlide className="bg-[url('https://i.ibb.co/L1Jcw3T/banner-01.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute pt-6 text-right lg:right-20 right-4 lg:pt-24 ">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-sm lg:text-xl">Exclusive Offer On Toys</p>
            <h3 className="text-2xl font-bold lg:text-7xl font-head">
              Kids Playing With <br /> Block Toys
            </h3>
            <a
              href="#"
              className="mt-2 text-xs font-semibold text-white normal-case border-0 lg:px-6 lg:py-2 btn lg:btn-md btn-sm lg:mt-6 lg:text-xl bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://i.ibb.co/TbW5yBq/banner-01-2.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute pt-6 text-right lg:right-20 right-4 lg:pt-24 ">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-sm lg:text-xl">Exclusive Offer On Toys</p>
            <h3 className="text-2xl font-bold lg:text-7xl font-head">
              Make Kids happy <br /> & Healthy
            </h3>
            <a
              href="#"
              className="mt-2 text-xs font-semibold text-white normal-case border-0 lg:px-6 lg:py-2 btn lg:btn-md btn-sm lg:mt-6 lg:text-xl bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://i.ibb.co/8K4y5Zw/banner-01-4.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute pt-6 text-right lg:right-20 right-4 lg:pt-24 ">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-sm lg:text-xl">Exclusive Offer On Toys</p>
            <h3 className="text-2xl font-bold lg:text-7xl font-head">
              Kids Playing With <br /> Block Toys
            </h3>
            <a
              href="#"
              className="mt-2 text-xs font-semibold text-white normal-case border-0 lg:px-6 lg:py-2 btn lg:btn-md btn-sm lg:mt-6 lg:text-xl bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://i.ibb.co/xf5tFzV/banner-01-1.png')] bg-left bg-cover py-10 bg-slate-300">
        <div className="absolute pt-6 text-right lg:right-20 right-4 lg:pt-24 ">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-sm lg:text-xl">Exclusive Offer On Toys</p>
            <h3 className="text-2xl font-bold lg:text-7xl">
              Kids Playing With <br /> Block Toys
            </h3>
            <a
              href="#"
              className="mt-2 text-xs font-semibold text-white normal-case border-0 lg:px-6 lg:py-2 btn lg:btn-md btn-sm lg:mt-6 lg:text-xl bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
