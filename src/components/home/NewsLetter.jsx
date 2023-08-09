const NewsLetter = () => {
  return (
    <section className="p-4 py-10 mb-10 bg-mainColor lg:py-20 lg:p-0">
      <div className="flex flex-col items-center justify-center gap-3 lg:gap-10">
        <h4 className="text-2xl font-bold text-white uppercase lg:text-5xl font-head">
          Newsletter
        </h4>
        <div className="flex items-center justify-center gap-10 px-4 py-2 mx-auto bg-white rounded-full lg:w-1/2">
          <input
            type="text"
            className="w-full p-1 text-lg rounded-full lg:p-4 text-mainColor font-head focus:outline-none"
            placeholder="Your email address"
          />
          <button className="px-3 py-1 text-xs font-semibold text-white uppercase rounded-full lg:font-bold lg:text-lg lg:px-5 lg:py-3 bg-mainColor">
            Subscribe
          </button>
        </div>
        <p className="text-white">*Only for first time users</p>
      </div>
    </section>
  );
};

export default NewsLetter;
