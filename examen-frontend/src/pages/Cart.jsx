import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingBag, FaChevronLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const { cart } = useCartContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cart.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productPromises = cart.map((item) =>
          axios.get(`http://localhost:1337/api/produse/${item.id}?populate=images`)
        );
        const responses = await Promise.all(productPromises);
        const fetchedProducts = responses.map((res, idx) => ({
          ...res.data.data,
          quantity: cart[idx].quantity,
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [cart]);

  const totalPrice = products.reduce(
    (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
    0
  );

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaShoppingBag className="w-10 h-10 text-pink-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any products yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-500 mb-6 transition-colors"
        >
          <FaChevronLeft className="w-3 h-3" />
          <span>Continue shopping</span>
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  {product.images?.[0] && (
                    <img
                      src={`http://localhost:1337${product.images[0].url}`}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">
                    {product.title}
                  </h3>
                  <p className="text-pink-500 font-semibold mt-1">
                    {product.price} MDL
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Qty: {product.quantity}
                  </p>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors self-start">
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{totalPrice} MDL</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>{totalPrice} MDL</span>
                  </div>
                </div>
              </div>

              <Link
                to="/order"
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
