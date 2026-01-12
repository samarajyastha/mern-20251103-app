const ProductByIdPage = async ({ params }) => {
  const id = (await params).id;

  return <div className="text-9xl">Product of id: {id}</div>;
};

export default ProductByIdPage;
