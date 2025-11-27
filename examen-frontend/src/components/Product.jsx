import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag, FaStar } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

export default function Product({ data }) {
  const { addToCart } = useCartContext();

  const imageUrl = data?.images?.[0]?.url
    ? `http://localhost:1337${data.images[0].url}`
    : "/placeholder.png";

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(data?.documentId);
  };

  return (
    <li className="group">
      <Link to={`/product/${data?.documentId}`} className="block">
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={imageUrl}
              alt={data?.title || "Product"}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

            {/* Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                NEW
              </span>
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                className="p-2.5 bg-white rounded-xl shadow-lg hover:bg-pink-500 hover:text-white transition-colors"
              >
                <FaHeart className="w-4 h-4" />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-2.5 bg-white rounded-xl shadow-lg hover:bg-pink-500 hover:text-white transition-colors"
              >
                <FaShoppingBag className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleAddToCart}
                className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-gray-900 font-semibold rounded-xl hover:bg-pink-500 hover:text-white transition-colors text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3 h-3 text-yellow-400" />
              ))}
              <span className="text-xs text-gray-400 ml-1">(24)</span>
            </div>

            <h3 className="font-semibold text-gray-900 truncate group-hover:text-pink-500 transition-colors">
              {data?.title}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-lg font-bold text-pink-500">
                {data?.price} MDL
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
