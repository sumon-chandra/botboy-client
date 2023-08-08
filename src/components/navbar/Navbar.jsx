import NavItem from "./NavItem";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context-providers/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => navigate("/login"));
  };
  return (
    <div className="px-4 navbar bg-slate-100 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NavItem value="Home" to="/" />
            </li>
            <li>
              <NavItem value="All Toys" to="/all-toys" />
            </li>
            {user ? (
              <>
                <li>
                  <NavItem value="Add A Toy" to="/add-toy" />
                </li>
                <li>
                  <NavItem value="My Toys" to="/my-toys" />
                </li>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white normal-case border-0 bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-lg text-white border-0 rounded-md bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
        <Link to="/" className="flex items-center text-xl select-none">
          <img className="w-10 mr-1" src={logo} alt="logo" />
          <span className="font-bold text-gray-800">Botboy</span>
        </Link>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="px-1 menu menu-horizontal gap-x-4">
          <li>
            <NavItem value="Home" to="/" />
          </li>
          <li>
            <NavItem value="All Toys" to="/all-toys" />
          </li>
          {user ? (
            <>
              <li>
                <NavItem value="Add A Toy" to="/add-toy" />
              </li>
              <li>
                <NavItem value="My Toys" to="/my-toys" />
              </li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white normal-case border-0 bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-lg text-white border-0 rounded-md bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
