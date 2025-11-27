import { useState, useEffect } from "react";
import axios from "axios";
import Category from "../components/Category";
import Product from "../components/Product";
import Header from "../components/Header";
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
      <section>
        <ul>
          {categories &&
            categories.map((category) => (
              <Category key={category.id} data={category} />
            ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <ul className="flex flex-wrap gap-4">
          {products &&
            products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
        </ul>
      </section>
    </div>
  );
}
