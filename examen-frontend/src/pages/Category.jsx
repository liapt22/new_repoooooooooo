import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Product from "../components/Product";

export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1337/api/categories/${id}?populate[produses][populate]=images`)
      .then((res) => {
        setCategory(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-8">
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
        <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium"
        >
          <FaChevronLeft className="w-3 h-3" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-500 mb-4 transition-colors"
          >
            <FaChevronLeft className="w-3 h-3" />
            <span>Back to home</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {category.name_ro}
          </h1>
          <p className="mt-2 text-gray-600">
            {category.produses?.length || 0} products
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {category.produses?.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {category.produses.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </ul>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
