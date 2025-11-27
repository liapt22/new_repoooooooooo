import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Category from "./Category";
export default function Header() {
  return (
    <div className="p-10 w-7xl m-auto px-4 py-2 rounded bg-gray-100 text-white ">
      <nav className="flex  items-center text-gray-700 px-4 py-2 text-center">
        <ul className="flex gap-4 text-center">
          <li>
            <Link to={`/`}>
              <p>Lili Beauty</p>
            </Link>
          </li>
          <li>
            <Link to={`/category/:id`}>Categorii</Link>
          </li>
          <li>
            <Link to={`/product/:id`}>Product</Link>
          </li>
          <li>
            <Link to={`/cart`}>Cart</Link>
          </li>
          <li>
            <Link to={`/order`}>Order</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
