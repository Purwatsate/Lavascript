import { NavLink } from "react-router"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-red-500 font-bold" : "text-gray-500 hover:text-gray-800"

export const Header = () => {
  return (
    <div>
      <NavLink to="/" className={navLinkClass}>
        Go to Home
      </NavLink>
      <br />
      <NavLink to="/about" className={navLinkClass}>
        Go to About Page
      </NavLink>
      <br />
      <NavLink to={"/users"} className={navLinkClass}>
        Go to Users Page</NavLink>
    </div>
  )
}
