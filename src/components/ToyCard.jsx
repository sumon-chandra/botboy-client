import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsArrowUpRightSquare } from "react-icons/bs";

const ToyCard = ({ toy, allToys }) => {
  const name =
    toy.toy_name.length >= 27
      ? `${toy.toy_name.substring(0, 27)}...`
      : toy.toy_name;
  return (
    <Link
      to={`/toys/${toy._id}`}
      key={toy._id}
      className="relative z-0 w-full mb-4 bg-white border border-indigo-100 rounded-lg shadow-xl card lg:mb-0"
    >
      <figure className="h-32">
        <img src={toy.picture} alt={toy.toy_name} className="z-10 w-20" />
      </figure>
      <div className="card-body">
        <div className="text-sm font-bold text-mainColor">
          <p>{toy.toy_name} </p>
          {allToys && (
            <p className="text-xs text-gray-400">
              ( {toy.quantity} piece available )
            </p>
          )}
        </div>
        <div className="flex items-center justify-between py-2">
          {toy.discount ? (
            <p className="text-xl font-bold">
              {toy.discount_price}{" "}
              <span className="text-xs font-normal line-through">
                {toy.price}
              </span>
            </p>
          ) : (
            <p className="text-xl font-bold">{toy.price}</p>
          )}

          <p className="flex items-center justify-end text-sm font-bold gap-x-2">
            <ReactStars size={20} value={toy.rating} edit={false} />
            <span>{toy.rating}</span>
          </p>
        </div>
        <Link
          to="/"
          className="flex items-center justify-end text-sm underline text-mainColor gap-x-2"
        >
          <span>See Details</span>
          <BsArrowUpRightSquare />
        </Link>
        {allToys && toy.category && (
          <div>
            <p className="absolute text-sm border-0 badge left-4 top-4 bg-mainColor">
              {toy.category}
            </p>
          </div>
        )}
      </div>
      {allToys && (
        <p className="p-2 text-xs font-semibold border-t-2">
          Seller - {toy.seller_name}
        </p>
      )}
      {toy.discount && (
        <div className="absolute text-xs font-bold border-0 badge right-4 top-4 bg-mainColor">
          - {toy.discount}%
        </div>
      )}
    </Link>
  );
};

export default ToyCard;
