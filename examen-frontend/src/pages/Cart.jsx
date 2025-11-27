import { useCartContext} from "../context/CartContext";

export default function Cart() {
  const {cart } = useCartContext();
  return(
  <section>
    <p>{cart.length}</p>
  </section>
)
}
