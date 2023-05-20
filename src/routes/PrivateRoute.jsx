import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { AuthContext } from "../context-providers/AuthProvider";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(loading);
  console.log(user);

  return !loading ? (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
