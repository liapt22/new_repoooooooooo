import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useCartContext();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Lili Beauty
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-pink-500 font-medium transition-colors rounded-lg hover:bg-pink-50"
            >
              Home
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-pink-500 font-medium transition-colors rounded-lg hover:bg-pink-50"
            >
              Categories
            </Link>
          </nav>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-3 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all"
          >
            <FaShoppingBag className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute top-1 right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
