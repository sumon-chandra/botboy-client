import NavItem from "./NavItem";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context-providers/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const navOptions = (
    <>
      <li>
        <NavItem value="Home" to="/" />
      </li>
      <li>
        <NavItem value="All Toys" to="/all-toys" />
      </li>
      {user && (
        <>
          <li>
            <NavItem value="Add A Toy" to="/add-toy" />
          </li>
          <li>
            <NavItem value="My Toys" to="/my-toys" />
          </li>
        </>
      )}
    </>
  );
  const handleLogout = () => {
    logout().then(() => navigate("/login"));
  };
  return (
    <div className="justify-between px-4 navbar bg-slate-100 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="bg-red-300 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="flex flex-col items-center justify-center gap-6 p-2 mt-3 shadow w- dropdown-content bg-base-100 rounded-box w-[90vw]"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="flex items-center select-none ps-4 lg:ps-0">
          <img className="w-8 mr-1" src={logo} alt="logo" />
          <span className="text-xl font-bold text-gray-800 uppercase lg:text-3xl font-head">
            Botboy
          </span>
        </Link>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="flex items-center justify-center gap-6 pr-6">
          {navOptions}
        </ul>
      </div>
      {user ? (
        <button
          onClick={handleLogout}
          className="px-6 py-2 text-xs font-bold text-white uppercase rounded-full lg:text-sm bg-mainColor hover:bg-secColor"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="px-6 py-2 text-xs font-bold text-white uppercase rounded-full lg:text-sm bg-mainColor hover:bg-secColor"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
