import { NavLink } from "react-router-dom"

const NavItem = ({value, to}) => {
  return (
   <NavLink className={({ isActive }) =>
   isActive
     ? "bg-transparent text-secColor shadow font-semibold  lg:mt-0 mt-4"
     : "bg-transparent text-gray-800 hover:shadow hover:text-mainColor font-semibold rounded lg:mt-0 mt-4"
 } to={to}>{value}</NavLink>
  )
}

export default NavItem
