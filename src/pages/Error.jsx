import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Error = () => {
  useTitle("Error");
  return (
    <div className="grid min-w-full min-h-screen place-items-center">
      <div className="flex items-center gap-x-6">
        <div className="p-3 text-4xl font-bold text-right text-gray-700 border-r-8 border-gray-700 font-head">
          <p className="text-5xl lg:text-7xl">404</p>
          <p>Error</p>
        </div>
        <div className="text-2xl ">
          <p className="text-gray-500">Page not found</p>
          <p className="text-gray-500">
            Go to{" "}
            <Link to="/" className="italic font-semibold underline">
              homepage
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
