import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-10 w-10" />
          <span className="text-xl font-bold text-green-900">Verdant</span>
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-green-900 font-medium">
          <NavLink to="/" className="hover:text-green-700">
            Home
          </NavLink>
          <NavLink to="/menu" className="hover:text-green-700">
            Menu
          </NavLink>
          <NavLink to="/rewards" className="hover:text-green-700">
            Rewards
          </NavLink>
          <NavLink to="/about" className="hover:text-green-700">
            About
          </NavLink>
        </div>

        {/* Login Button */}
        <Link
          to="/auth"
          className="px-5 py-2 rounded-full bg-green-900 text-white hover:bg-green-800"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
