import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch, FaStar, FaGift, FaTruck, FaLeaf } from "react-icons/fa";
import Category from "../components/Category";
import Product from "../components/Product";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories")
      .then((res) => setCategories(res.data.data));

    axios
      .get("http://localhost:1337/api/produse?populate=images")
      .then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-6">
              New Collection 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your <br />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Natural Beauty</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Premium beauty products to enhance your natural glow. Curated selection of skincare, makeup, and fragrances.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border-0 focus:ring-2 focus:ring-pink-300 outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <FaTruck className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Free Delivery</p>
                <p className="text-xs text-gray-500">On orders over 500 MDL</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <FaGift className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Gift Wrapping</p>
                <p className="text-xs text-gray-500">Special packaging</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FaLeaf className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">100% Natural</p>
                <p className="text-xs text-gray-500">Organic ingredients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <FaStar className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Top Quality</p>
                <p className="text-xs text-gray-500">Premium brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Shop by Category</h2>
            <p className="text-gray-600">Browse our curated collections</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4">
            {categories?.map((category) => (
              <Category key={category.id} data={category} />
            ))}
          </ul>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked just for you</p>
            </div>
            <Link to="/cart" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
              View All
              <span>→</span>
            </Link>
          </div>

          {products ? (
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
