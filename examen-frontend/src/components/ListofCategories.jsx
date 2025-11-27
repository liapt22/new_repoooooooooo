import Product from "./Product";
export default function ListOfCategories({ list = [] }) {
  return (
    <section className="flex flex-col gap-5">
      {list.map((item) => (
        <article className="flex flex-col gap-3" key={item.documentId}>
          <h2 className="text-2xl font-bold">{item.name_ro}</h2>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
            {item.products.map((product) => (
              <Product key={product.documentId} product={product} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
