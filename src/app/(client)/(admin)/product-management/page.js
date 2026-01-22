import Link from "next/link";

const ProductManagementPage = () => {
  return (
    <div>
      <h4>ProductManagementPage</h4>
      <Link href="/product-management/add">Add product</Link>
    </div>
  );
};

export default ProductManagementPage;
