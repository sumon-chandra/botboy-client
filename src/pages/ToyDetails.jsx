import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import SpecialProducts from "./../components/home/SpecialProducts";

const ToyDetails = () => {
  const [toy, setToy] = useState({});
  useTitle("Toy Details");
  const params = useParams();

  // !!!!!!! All toys and my-toys they are in default database. So the URL should change to navigate to right route and database.

  let url = "";
  const getUrl = `https://botboy.vercel.app/toys/${params.id}`;
  const myToysUrl = `https://botboy.vercel.app/my-toys/${params.id}`;
  const match = getUrl.match(/\/toys\/(personal)\w+/);
  if (match) {
    if (match[1] === "personal") {
      const modifiedUrl = myToysUrl.replace(/\personal/, "");
      console.log(modifiedUrl);
      url = modifiedUrl;
    }
  } else {
    url = `https://botboy.vercel.app/toys/${params.id}`;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToy(data))
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  return (
    <>
      <div className="bg-mainColor py-6">
        <h4 className="lg:text-5xl text-2xl font-bold text-white text-center">
          {toy.toy_name} - Details
        </h4>
      </div>
      <div className="lg:p-20 py-8 px-4 lg:grid grid-cols-5 gap-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="col-span-2"
        >
          <img src={toy.picture} alt="" className="w-1/2 mx-auto" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="col-span-3 mt-8 lg:mt-0 border-l-4 border-mainColor px-6"
        >
          <div className="font-bold lg:text-7xl text-2xl text-mainColor">
            <p>{toy.toy_name} </p>
            <p className="lg:text-sm text-xs lg:mt-4 text-gray-400">
              ( {toy.quantity} piece available )
            </p>
          </div>
          <h4 className="pt-3 font-bold">Category: {toy.category}</h4>
          <div className=" py-4">
            {toy.discount ? (
              <p className="text-xl font-bold">
                {toy.discount_price}{" "}
                <span className="text-xs line-through font-normal">
                  {toy.price}
                </span>
              </p>
            ) : (
              <p className="text-xl font-bold">{toy.price}</p>
            )}

            <p className="flex items-center gap-x-2 font-bold text-sm">
              <ReactStars
                activeColor={"red"}
                size={20}
                value={toy.rating}
                edit={false}
              />
              <span>{toy.rating}</span>
            </p>
          </div>
          <p className="lg:text-xl">{toy.description}</p>
          <div className="mt-4">
            <p className="font-bold">Seller Info: </p>
            <h4>Name: {toy.seller_name}</h4>
            <h4>Email: {toy.seller_email}</h4>
          </div>
        </div>
      </div>
      <SpecialProducts />
    </>
  );
};

export default ToyDetails;
