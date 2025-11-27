import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import { FaCartArrowDown } from "react-icons/fa";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/produse/${id}?populate=images`)
      .then((res) => setProduct(res.data.data));
  }, []);

  if (product) {
    const {addTOCart} = useCartContext()
  return (
    <section>
      <h1>{product.title}</h1>
      <p>{product.price}</p>

      <div>
        {product.images?.map((img, idx) => (
          <img
            key={idx}
            src={`http://localhost:1337${img.url}`}
            alt={product.title}
          />
        ))}
      </div>
      <Button icon={<FaCartArrowDown />} text = {"Add to cart"} onClick = {() => addTOCart(product.documentId)}/>
    </section>
  );
}
}
