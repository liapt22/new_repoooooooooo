import { Link } from "react-router-dom";

export default function Category({ data }) {
  return (
    <li>
      <Link
        to={`/category/${data.documentId}`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 rounded-2xl font-semibold text-gray-700 hover:border-pink-400 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
        {data.name_ro}
      </Link>
    </li>
  );
}