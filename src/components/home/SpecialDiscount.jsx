const SpecialDiscount = () => {
  return (
    <div className="lg:h-[500px] h-52 w-full bg-[url('https://i.ibb.co/QMdqb1p/banner-01-1.png')] bg-fixed bg-left lg:bg-cover relative bg-no-repeat">
      <div className="absolute bg-gradient-to-l from-[#0000006c] to-[#03030300] bottom-0 top-0 right-0 lg:pr-20 pr-4 lg:pt-40 lg:space-y-4 pt-10 text-right text-white">
        <div>
          <p className="text-sm lg:text-xl">Amazing Deals Just For You!</p>
          <h3 className="text-3xl font-bold lg:text-5xl font-head">
            Children's Room On White <br />
            Wall Colors
          </h3>
          <a
            href="#"
            className="mt-4 text-xs font-semibold text-white normal-case border-0 lg:px-6 lg:py-1 btn lg:btn-md btn-sm lg:mt-6 bg-gradient-to-br from-mainColor to-secColor rounded-3xl hover:bg-gradient-to-tl"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialDiscount;
