import family from "./Images/Family.jpeg";

const About = () => {
  return (
    <section id="story" className="bg-[#fcfbf7] px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Image */}
        <div className="w-full">
          <img
            src={family}
            alt="A family standing in a green field looking toward the horizon"
            className="aspect-[4/3] w-full rounded-[40px] object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <span className="mb-5 inline-block w-fit rounded-full bg-[#e2e8e0] px-3 py-1 text-[13px] font-semibold uppercase tracking-[1.5px] text-[#d3a24c] sm:text-[15px]">
            Our Story
          </span>

          <h2 className="mb-6 font-serif text-[32px] font-normal leading-[1.15] text-[#0f2719] sm:text-[42px] md:text-5xl">
            A proud family-led farm shaped by authenticity, care, and the land.
          </h2>

          <p className="mb-5 max-w-[540px] text-base leading-relaxed text-[#556052]">
            Mnguni Tree-Line Farm is a proudly South African venture built on
            deep local roots, honest farming, and a long-term commitment to
            responsible growth. We are creating a commercial family enterprise
            that respects the land while preparing to supply quality food to
            both domestic and international markets.
          </p>

          <p className="mb-8 max-w-[540px] text-base leading-relaxed text-[#556052]">
            Our approach is grounded in stewardship, premium production, and
            the belief that rural farming can scale with dignity, purpose, and
            consistency.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Vision Card */}
            <div className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="font-serif text-3xl font-normal leading-snug text-black">
                Our Vision
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#556052]">
                To build a thriving South African farm known for premium
                livestock and exceptional food.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="font-serif text-3xl font-normal leading-snug text-black">
                Our Mission
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#556052]">
                To operate sustainably, grow responsibly, and create dependable
                supply chains for global markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;