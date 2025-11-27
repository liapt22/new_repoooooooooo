import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Product from "../components/Product";
export default function Category() {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/categories/${id}?populate[produses][populate]=images`)
      .then((res) => setCategory(res.data.data));
  }, []);
  return (
    <div>
      {category ? (
        <section>
          <p>{category.name_ro}</p>
          <div>
            {category.products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </section>
      ) : (
        <p>404, category not found</p>
      )}
    </div>
  );
}
