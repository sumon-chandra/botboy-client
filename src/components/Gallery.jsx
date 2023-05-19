const Gallery = () => {
  return (
    <section className="lg:px-20 px-4 lg:py-20 py-10">
      <div className="text-center">
        <p className="text-[12px]">Our Gallery</p>
        <h4 className="lg:text-5xl text-2xl font-bold text-mainColor">
          Our Gallery Section
        </h4>
      </div>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="grid gap-4">
          <div>
            <img
              src="https://i.ibb.co/7vRP91v/gallery-2.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/TPq8mm1/gallery-1.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/wMN0dYb/gallery-9.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/wMN0dYb/gallery-9.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/wMN0dYb/gallery-9.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
        </div>
        <div className="grid gap-4">
        <div>
            <img
              src="https://i.ibb.co/pnS7yNx/gallery-7.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>

          <div>
            <img
              src="https://i.ibb.co/VBW3tzx/gallery-8.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          
          <div>
            <img
              src="https://i.ibb.co/7tv31cx/gallery-5.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/XbjBnwn/gallery-6.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
        </div>
        <div className="grid gap-4">
        <div>
            <img
              src="https://i.ibb.co/rvZbWNw/gallery-4.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/VBW3tzx/gallery-8.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/3YvLsTq/gallery-3.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              src="https://i.ibb.co/svVQ3v7/gallery-10.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/3rTn1F6/gallery-11.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/M1dLqJH/gallery-12.jpg"
              alt="gallery image"
              className="h-auto max-w-full duration-500 cursor-pointer hover:scale-110 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
