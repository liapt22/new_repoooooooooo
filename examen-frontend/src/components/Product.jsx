import { Link } from "react-router-dom";

export default function Product({ data }) {

  const imageUrl = data?.images?.[0]?.url
    ? `http://localhost:1337${data.images[0].url}`: "/placeholder.png";

  return (
    <li className="w-40">
      <Link to={`/product/${data?.id}`}>
        <img
          src={imageUrl}
          alt={data?.title || "Product"}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-2 font-medium">{data?.title}</h3>
        <p className="text-gray-600">{data?.price} MDL</p>
      </Link>
    </li>
  );
}
