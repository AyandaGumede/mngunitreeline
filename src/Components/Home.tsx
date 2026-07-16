import Navbar from "./UI/Navbar";
import BackgroundImage from "./Images/Cow.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("${BackgroundImage}")` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0000]/80" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-1 items-center justify-center px-4 py-12 text-center sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="mx-auto max-w-2xl text-sm font-light uppercase tracking-[0.3em] text-[#d3a24c] sm:text-base">
              Mnguni Tree Line Farm
            </p>

            <h1 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-normal italic leading-tight text-[#f2d59f] sm:mt-6 sm:text-4xl lg:text-6xl">
              Sustainable Agriculture
              <br />
              From KZN's Heart
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:mt-8 sm:text-lg">
              Establishing premium livestock and diversified farming solutions for local and export markets while preserving the land for future generations.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#story"
                className="w-full rounded-full border border-white/50 bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-white transition duration-300 hover:border-[#d3a24c] hover:bg-[#d3a24c] hover:text-white sm:w-auto"
              >
                Follow Our Journey
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;