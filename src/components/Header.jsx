import {
  FaBars,
  FaLaptop,
  FaMoon,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 shadow z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Logo  */}
          <h1 className="text-xl font-semibold text-primary dark:text-white">
            <Link to="/" className="flex items-center gap-2">
              <FaLaptop /> Techno
            </Link>
          </h1>
          {/* Navbar */}
          <nav className="hidden md:flex gap-5">
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/blogs"
              className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
              <FaMoon />
            </button>
            <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
              <FaShoppingCart />
            </button>
            <button className="text-gray-700 p-1 dark:text-gray-300 hover:text-primary">
              <FaUser />
            </button>
            <button className="block md:hidden text-gray-700 p-1 dark:text-gray-300">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
