import {
  FaCreditCard,
  FaHeadset,
  FaReply,
  FaShippingFast,
} from "react-icons/fa";
import Hero from "./components/home/Hero";
import WhyChooseUsCard from "./components/home/WhyChooseUsCard";
import { Link } from "react-router";
import ProductCard from "./components/home/ProductCard";

function App() {
  return (
    <>
      <Hero />

      {/* Why choose us  */}
      <section className="dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseUsCard
              title="Free Shipping"
              subtitle="Free Shipping for all orders over Rs.500. Fast delivery service
                to your doorstep."
              icon={<FaShippingFast className="text-2xl text-primary" />}
              iconBg="bg-blue-100"
            />
            <WhyChooseUsCard
              title="Secure Payment"
              subtitle="Your payment information is safe with our encrypted system."
              icon={<FaCreditCard className="text-2xl text-green-500" />}
              iconBg="bg-green-100"
            />
            <WhyChooseUsCard
              title="24/7 Support"
              subtitle="Our customer support team is available around the clock to help you."
              icon={<FaHeadset className="text-2xl text-orange-500" />}
              iconBg="bg-orange-100"
            />
            <WhyChooseUsCard
              title="Easy Return"
              subtitle="Hassle free return policy. Just let us know if you are not satisfied with our product."
              icon={<FaReply className="text-2xl text-red-500" />}
              iconBg="bg-red-100"
            />
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Popular Products
            </h2>
            <Link to="/products" className="text-primary hover:text-secondary">
              View all
            </Link>
          </div>
          <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard
              imgUrl="https://images.unsplash.com/photo-1759588071895-6b5efd5502af?q=80&w=800"
              name="Iphone 17 Pro Max"
              price={999}
              originalPrice={1299}
              ratingsCount={259}
              badge={
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Sale
                </span>
              }
            />
            <ProductCard
              imgUrl="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=800"
              name="Wireless Headphone"
              price={399}
              originalPrice={599}
              ratingsCount={50}
              badge={
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Popular
                </span>
              }
            />
            <ProductCard
              imgUrl="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800"
              name="Apple Watch"
              price={899}
              originalPrice={999}
              ratingsCount={452}
              badge={
                <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Top rated
                </span>
              }
            />
            <ProductCard
              imgUrl="https://images.unsplash.com/photo-1738830246146-599b67d009db?q=80&w=800"
              name="Samsung S25 Ultra"
              price={899}
              originalPrice={1299}
              ratingsCount={1525}
              badge={
                <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Most sold
                </span>
              }
            />
            {/* <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1759588071895-6b5efd5502af?q=80&w=800"
                  alt
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Sale
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
                  Iphone 17 Pro Max
                </h3>
                <div className="flex mb-2 items-center">
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text-sm ml-2 text-gray-500 dark:">
                    (259)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      $999
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-1">
                      $1299
                    </span>
                  </div>
                  <button className="bg-primary text-white hover:bg-secondary px-2 py-1.5 rounded-full">
                    <i className="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
              <div className="relative">
                <img
                  src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=800"
                  alt
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Sale
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
                  Wireless Headphone
                </h3>
                <div className="flex mb-2 items-center">
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                  </div>
                  <span className="text-sm ml-2 text-gray-500">(15)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      $399
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-1">
                      $599
                    </span>
                  </div>
                  <button className="bg-primary text-white hover:bg-secondary px-2 py-1.5 rounded-full">
                    <i className="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800"
                  alt
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Sale
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
                  Apple Watch
                </h3>
                <div className="flex mb-2 items-center">
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text-sm ml-2 text-gray-500">(59)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      $899
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-1">
                      $999
                    </span>
                  </div>
                  <button className="bg-primary text-white hover:bg-secondary px-2 py-1.5 rounded-full">
                    <i className="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1738830246146-599b67d009db?q=80&w=800"
                  alt
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                  Sale
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-1">
                  Samsung S25 Ultra
                </h3>
                <div className="flex mb-2 items-center">
                  <div className="flex text-yellow-500">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text-sm ml-2 text-gray-500">(866)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      $899
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-1">
                      $1199
                    </span>
                  </div>
                  <button className="bg-primary text-white hover:bg-secondary px-2 py-1.5 rounded-full">
                    <i className="fas fa-shopping-cart" />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
