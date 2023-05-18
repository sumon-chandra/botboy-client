import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-w-full min-h-screen grid place-items-center">
      <div className="flex items-center gap-x-6">
        <div className="text-4xl font-bold text-gray-700 border-r-8 border-gray-700 p-3 text-right">
          <p className="lg:text-7xl text-5xl">404</p>
          <p>Error</p>
        </div>
        <div className="text-2xl ">

        <p className="text-gray-500">Page not found</p>
        <p className="text-gray-500">Go to <Link to="/" className="underline font-semibold italic">homepage</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
