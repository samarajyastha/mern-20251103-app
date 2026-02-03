import TeamCard from "@/components/about/TeamCard";
import Link from "next/link";
import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

export const metadata = {
  title: "About | Techno",
};

const AboutPage = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-primary/30 to-blue-300 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white pb-6">
                We&apos;re on a mission to <br />
                <span className="ml-3 bg-linear-to-r from-primary to-pink-700 bg-clip-text text-transparent">
                  Simplify Technology
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-700 mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                necessitatibus illum animi nulla. Accusantium amet minima vero.
                Itaque laudantium voluptatem sit suscipit a perferendis soluta
                reprehenderit! Animi ut provident esse voluptas possimus, illum
                velit debitis maxime officiis repellendus. Error doloremque
                minima veniam voluptas id. Voluptatibus pariatur aut vitae
                maxime et.
              </p>

              <Link
                href="#our-story"
                className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="our-story"
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="w-full h-96 bg-linear-to-r from-primary/60 to-pink-600 rounded-2xl flex items-center justify-center">
              <FaLightbulb className="text-9xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-8">Introduction</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                vero veniam ex, doloribus rem ipsa illo possimus aspernatur
                voluptates maiores soluta facilis iure aliquid tenetur,
                excepturi sit delectus, blanditiis perspiciatis voluptatum quae
                id tempora deserunt. Minima maxime dolor aut impedit.
              </p>

              <p className="text-gray-600 mb-4 dark:text-gray-400">
                dolore fuga accusamus quod. Similique ipsum voluptatem quos quia
                nisi dignissimos placeat minima, et unde beatae veniam. Tenetur,
                nesciunt quia sit error culpa, ad modi eveniet delectus quis
                illum officia placeat veniam. Odio repellendus eaque mollitia
                inventore consequatur id asperiores quo?
              </p>

              <div className="flex items-center gap-2">
                <FaBullseye className="p-3 rounded-full bg-primary/10 text-primary text-lg min-w-10 h-10" />
                <div>
                  <h4 className="font-semibold">Our Mission</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, placeat!
                  </p>
                </div>
                <FaEye className="p-3 rounded-full bg-pink-100 text-pink-700 text-lg min-w-10 h-10" />
                <div>
                  <h4 className="font-semibold">Our Vision</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, placeat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
