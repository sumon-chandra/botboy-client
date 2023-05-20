const FlatDiscount = () => {
  return (
    <section className="lg:px-20 px-4 lg:flex gap-5 py-8">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative bg-indigo-100 cursor-pointer select-none rounded-xl mb-4 lg:mb-0"
      >
        <img
          src="https://i.ibb.co/qpT5k1N/discount-5.jpg"
          alt=""
          className="w-full hover:scale-150 duration-[3000ms] rounded-xl"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-[#ffffffd0] to-[#03030343] text-right lg:pt-20 pt-14 px-6 rounded-xl">
          <p>15% Flat Discount</p>
          <p className="lg:text-4xl text-2xl font-bold">
            Happy Christmas <br /> Day
          </p>
          <p className="text-mainColor underline font-bold mt-5">Shop Now</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="relative bg-indigo-100 cursor-pointer select-none rounded-xl mb-4 lg:mb-0"
      >
        <img
          src="https://i.ibb.co/mTx1Lxn/discount-6.jpg"
          alt=""
          className="w-full hover:scale-150 duration-[3000ms] rounded-xl"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-[#ffffffd0] to-[#03030343] text-right lg:pt-20 pt-14 px-6 rounded-xl">
          <p>20% Flat Discount</p>
          <p className="lg:text-4xl text-2xl font-bold">
            Luvlap Baby <br /> Stroller
          </p>
          <p className="text-mainColor underline font-bold mt-5">Shop Now</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="relative bg-indigo-100 cursor-pointer select-none rounded-xl mb-4 lg:mb-0"
      >
        <img
          src="https://i.ibb.co/5cXsbr8/discount-4.jpg"
          alt=""
          className="w-full hover:scale-150 duration-[3000ms] rounded-xl"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-[#ffffffd0] to-[#03030343] text-right lg:pt-20 pt-14 px-6 rounded-xl">
          <p>30% Flat Discount</p>
          <p className="lg:text-4xl text-2xl font-bold">
            Little Supermen <br /> Toys
          </p>
          <p className="text-mainColor underline font-bold mt-5">Shop Now</p>
        </div>
      </div>
    </section>
  );
};

export default FlatDiscount;
