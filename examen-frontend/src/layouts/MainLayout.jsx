import { Outlet, Link } from "react-router-dom"
import Header from "../components/Header"
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa"

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold">Lili Beauty</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Your destination for premium beauty products. Discover your natural glow with our curated collection.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors">Home</Link></li>
                <li><Link to="/cart" className="text-gray-400 hover:text-pink-400 transition-colors">Shop</Link></li>
                <li><Link to="/cart" className="text-gray-400 hover:text-pink-400 transition-colors">Categories</Link></li>
                <li><Link to="/cart" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Returns</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Chisinau, Moldova</li>
                <li>+373 XX XXX XXX</li>
                <li>contact@lilibeauty.md</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Lili Beauty. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}