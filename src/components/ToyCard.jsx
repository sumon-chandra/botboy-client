import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsArrowUpRightSquare } from "react-icons/bs";

const ToyCard = ({ toy }) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-duration="1000"
      to="/"
      key={toy._id}
      className="card relative w-full shadow-xl border border-indigo-100 mb-4 lg:mb-0 rounded-lg z-0"
    >
      <figure className="lg:h-72 h-52">
        <img
          src={toy.picture}
          alt={toy.toy_name}
          className="w-1/2 hover:scale-150 duration-[3000ms] z-10"
        />
      </figure>
      <div className="card-body">
        <h5 className="card-title text-lg text-mainColor">{toy.toy_name}</h5>
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
      </div>
      {toy.discount && (
        <div className="badge absolute right-4 top-4 font-bold text-xs bg-mainColor border-0">
          - {toy.discount}%
        </div>
      )}
    </Link>
  );
};

export default ToyCard;
