const FlatDiscount = () => {
  return (
    <section className="gap-5 px-4 py-8 lg:px-20 lg:flex">
      <div className="relative mb-4 bg-indigo-100 cursor-pointer select-none rounded-xl lg:mb-0">
        <img
          src="https://i.ibb.co/qpT5k1N/discount-5.jpg"
          alt=""
          className="w-full hover:scale-150 duration-[3000ms] rounded-xl"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-[#ffffffd0] to-[#03030343] text-right lg:pt-20 pt-14 px-6 rounded-xl">
          <p>15% Flat Discount</p>
          <p className="text-2xl font-bold lg:text-4xl font-head">
            Happy Christmas <br /> Day
          </p>
          <p className="mt-5 font-bold underline text-mainColor">Shop Now</p>
        </div>
      </div>
      <div className="relative mb-4 bg-indigo-100 cursor-pointer select-none rounded-xl lg:mb-0">
        <img
          src="https://i.ibb.co/mTx1Lxn/discount-6.jpg"
          alt=""
          className="w-full hover:scale-150 duration-[3000ms] rounded-xl"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-[#ffffffd0] to-[#03030343] text-right lg:pt-20 pt-14 px-6 rounded-xl">
          <p>20% Flat Discount</p>
          <p className="text-2xl font-bold lg:text-4xl font-head">
            Luvlap Baby <br /> Stroller
          </p>
          <p className="mt-5 font-bold underline text-mainColor">Shop Now</p>
        </div>
      </div>
      <div className="relative mb-4 bg-indigo-100 cursor-pointer select-none rounded-xl lg:mb-0">
        <img
          src="https://i.ibb.co/5cXsbr8/discount-4.jpg"
          alt=""
          className="w-full hover:scale-150 duration-[3000ms] rounded-xl"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-[#ffffffd0] to-[#03030343] text-right lg:pt-20 pt-14 px-6 rounded-xl">
          <p>30% Flat Discount</p>
          <p className="text-2xl font-bold lg:text-4xl font-head">
            Little Supermen <br /> Toys
          </p>
          <p className="mt-5 font-bold underline text-mainColor">Shop Now</p>
        </div>
      </div>
    </section>
  );
};

export default FlatDiscount;
