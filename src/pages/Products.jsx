import ProductTop from "../components/ProductList/ProductTop";
import ProductList from "../components/ProductList/ProductList";

export default function Products() {
  return (
    <div className="products-page">
      <ProductTop />
      <section className="products-section">
        <div className="container">
          <ProductList />
        </div>
      </section>
    </div>
  );
}
