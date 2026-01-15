import ProductsBanner from "@/components/products/Banner";

const ProductsLayout = ({ children }) => {
  return (
    <div>
      <ProductsBanner />
      <section>
        <div className="container mx-auto px-6">{children}</div>
      </section>
    </div>
  );
};

export default ProductsLayout;
