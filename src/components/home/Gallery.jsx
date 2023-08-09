const Gallery = () => {
  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20">
      <div className="text-center">
        <p className="text-[12px]">Our Gallery</p>
        <h4 className="text-2xl font-bold lg:text-5xl text-mainColor font-head">
          Explore Our Gallery Section
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4 ">
        <div className="grid gap-4">
          <div>
            <img
              src="https://i.ibb.co/3YvLsTq/gallery-3.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/7vRP91v/gallery-2.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/TPq8mm1/gallery-1.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/wMN0dYb/gallery-9.jpg"
              alt="gallery image"
              className=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              src="https://i.ibb.co/pnS7yNx/gallery-7.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/VBW3tzx/gallery-8.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/7tv31cx/gallery-5.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/XbjBnwn/gallery-6.jpg"
              alt="gallery image"
              className=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              src="https://i.ibb.co/rvZbWNw/gallery-4.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/VBW3tzx/gallery-8.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/wMN0dYb/gallery-9.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/48bSh49/discount-3.jpg"
              alt="gallery image"
              className=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              src="https://i.ibb.co/svVQ3v7/gallery-10.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/3rTn1F6/gallery-11.jpg"
              alt="gallery image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/M1dLqJH/gallery-12.jpg"
              alt="gallery image"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
