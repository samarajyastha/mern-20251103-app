import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({
  badge,
  name,
  price,
  originalPrice,
  ratingsCount,
  imgUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
      <div className="relative">
        <img src={imgUrl} alt className="w-full h-48 object-cover" />
        {badge}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
          {name}
        </h3>
        <div className="flex mb-2 items-center">
          <div className="flex text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-sm ml-2 text-gray-500 dark:">
            ({ratingsCount})
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              ${price}
            </span>
            <span className="text-sm text-gray-500 line-through ml-1">
              ${originalPrice}
            </span>
          </div>
          <button className="bg-primary text-white hover:bg-secondary px-3 py-1.5 rounded-md flex items-center gap-2">
            <FaShoppingCart />
            <span className="text-xs">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
