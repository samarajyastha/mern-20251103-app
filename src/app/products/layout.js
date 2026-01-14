import ProductsBanner from "@/components/products/Banner";

const ProductsLayout = ({ children }) => {
  return (
    <div>
      <ProductsBanner />
      {children}
    </div>
  );
};

export default ProductsLayout;
