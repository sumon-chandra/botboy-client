import { NavLink } from "react-router-dom";

const NavItem = ({ value, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "nav-btn text-white bg-mainColor"
          : "nav-btn hover:text-mainColor"
      }
      to={to}
    >
      {value}
    </NavLink>
  );
};

export default NavItem;
