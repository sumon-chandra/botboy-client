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
    <div className="navbar bg-slate-100 lg:px-20 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavItem value="Home" to="/" />
            </li>
            <li>
              <NavItem value="All Toys" to="/all-toys" />
            </li>
            <li>
              <NavItem value="Blog" to="/blogs" />
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center select-none text-xl">
          <img className="w-10 mr-1" src={logo} alt="logo" />
          <span className="font-bold text-gray-800">Botboy</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-4">
          <li>
            <NavItem value="Home" to="/" />
          </li>
          <li>
            <NavItem value="All Toys" to="/all-toys" />
          </li>
          <li>
            <NavItem value="Blog" to="/blogs" />
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:w-20">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 menu menu-compact dropdown-content rounded w-52 lg:gap-y-2 p-4 bg-slate-100"
            >
              <li>
                <NavItem value="Add A Toy" to="/add-toy" />
              </li>
              <li>
                <NavItem value="My Toys" to="/my-toys" />
              </li>
              <button
                onClick={handleLogout}
                className="btn btn-sm px-4 py-2 normal-case text-white bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl border-0"
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 text-lg text-white bg-gradient-to-br from-mainColor to-secColor rounded-md hover:bg-gradient-to-tl border-0"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
