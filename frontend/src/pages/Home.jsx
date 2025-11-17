import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";

// IMPORT IMAGES
import heroImg from "../assets/hero-coffee.jpg";
import matcha from "../assets/featured-1.jpg";
import caramel from "../assets/featured-2.jpg";
import coldbrew from "../assets/featured-3.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImg})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Every Sip <br /> Tells a Story
          </h1>

          <p className="max-w-xl text-lg mb-8">
            Discover ethically-sourced, handcrafted coffee that connects you to
            nature's finest flavors.
          </p>

          <button className="bg-green-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition">
            Explore Menu →
          </button>
        </div>
      </section>

      {/* Featured Favorites Section */}
      <section className="py-20 bg-[#f2ebdf]">
        <h2 className="text-center text-4xl font-bold text-green-900 mb-3">
          Featured Favorites
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Handcrafted beverages made with premium ingredients and care
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <FeaturedCard
            image={matcha}
            title="Matcha Latte"
            desc="Smooth ceremonial-grade matcha with silky steamed milk"
            price="5.95"
          />
          <FeaturedCard
            image={caramel}
            title="Caramel Macchiato"
            desc="Espresso with vanilla and caramel, finished with a caramel drizzle"
            price="5.45"
          />
          <FeaturedCard
            image={coldbrew}
            title="Cold Brew"
            desc="Slow-steeped for 20 hours, smooth and naturally sweet"
            price="4.95"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#f2ebdf]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow text-center">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Only the finest beans, sourced directly from sustainable farms
              around the world.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow text-center">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600">
              Committed to ethical sourcing and environmental responsibility in
              every cup.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow text-center">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              Crafted with Care
            </h3>
            <p className="text-gray-600">
              Every beverage is handcrafted by skilled baristas who love what
              they do.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
