import { Outlet } from "react-router";

const ProductsLayout = () => {
  return (
    <>
      <img
        src="https://i.ytimg.com/vi/RXLHiG9QdAY/hq720.jpg"
        className="w-full h-96 object-cover"
      />
      <Outlet />
    </>
  );
};

export default ProductsLayout;
