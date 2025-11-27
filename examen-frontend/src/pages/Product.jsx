import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaShoppingBag, FaHeart, FaChevronLeft, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/produse/${id}?populate=*`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="animate-pulse flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 aspect-square bg-gray-200 rounded-2xl"></div>
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.documentId);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-500 mb-8 transition-colors">
          <FaChevronLeft className="w-3 h-3" />
          <span>Back to products</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {product.images?.[selectedImage] && (
                <img
                  src={`http://localhost:1337${product.images[selectedImage].url}`}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {product.images?.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-pink-500"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={`http://localhost:1337${img.url}`}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-pink-500">{product.price} MDL</span>
              </div>

              {product.description_ro && (
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{product.description_ro}</p>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Quantity</h2>
                <div className="inline-flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
                >
                  <FaShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="p-4 border border-gray-200 rounded-xl text-gray-400 hover:text-pink-500 hover:border-pink-300 transition-colors">
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <FaTruck className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Free Delivery</p>
                </div>
                <div className="text-center">
                  <FaShieldAlt className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <FaUndo className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
