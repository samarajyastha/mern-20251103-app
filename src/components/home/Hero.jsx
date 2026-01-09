const Hero = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero content */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-gray-200">
              Innovative <span className="text-primary">Techno</span> Products
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              cupiditate et est facilis nisi mollitia harum aspernatur excepturi
              doloremque earum.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary font-medium transition duration-300">
                Shop Now
              </button>
              <button className="border border-primary text-primary px-6 py-2 rounded-lg dark:text-white hover:bg-primary hover:text-white font-medium transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -left-4 -top-4 w-full h-full bg-primary/20 rounded-2xl" />
              <img
                className="rounded-2xl shadow-lg object-cover relative"
                src="https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/i/p/iphone-17-price-in-nepal_1.webp"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
