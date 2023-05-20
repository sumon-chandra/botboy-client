import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsArrowUpRightSquare } from "react-icons/bs";

const ToyCard = ({ toy, allToys }) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-duration="1000"
      to="/"
      key={toy._id}
      className="card relative w-full shadow-xl border border-indigo-100 mb-4 lg:mb-0 rounded-lg z-0"
    >
      <figure className="h-72">
        <img
          src={toy.picture}
          alt={toy.toy_name}
          className="w-1/2 hover:scale-150 duration-[3000ms] z-10"
        />
      </figure>
      <div className="card-body">
        <div className="font-bold text-lg text-mainColor">
          <p>{toy.toy_name} </p>
          {allToys && (
            <p className="text-xs text-gray-400">
              ( {toy.quantity} piece available )
            </p>
          )}
        </div>
        <div className="flex justify-between items-center py-2">
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

          <p className="flex items-center justify-end gap-x-2 font-bold text-sm">
            <ReactStars size={20} value={toy.rating} edit={false} />
            <span>{toy.rating}</span>
          </p>
        </div>
        <Link
          to="/"
          className="underline text-sm text-mainColor justify-end items-center flex gap-x-2"
        >
          <span>See Details</span>
          <BsArrowUpRightSquare />
        </Link>
        {toy.category && (
          <div>
            <p className="badge absolute left-4 top-4 text-sm bg-mainColor border-0">
              {toy.category}
            </p>
          </div>
        )}
      </div>
      {allToys && (
        <p className="p-2 font-semibold text-xs border-t-2">
          Seller - {toy.seller_name}
        </p>
      )}
      {toy.discount && (
        <div className="badge absolute right-4 top-4 font-bold text-xs bg-mainColor border-0">
          - {toy.discount}%
        </div>
      )}
    </Link>
  );
};

export default ToyCard;
