import LivestockIcon from "./Images/LivestockIcon.png";
import FruitOrchards from "./Images/Fruit orchards.png";
import Globe from "./Images/Globe.png" ;
import tractor from "./Images/tractor.png";
import tractor2 from "./Images/image4.jpg";

const WhyGrowWithUs = () => {
  const focusAreas = [
    {
      title: "Premium livestock",
      description:
        "Quality goats and cattles, formed around quality and resilience.",
      icon: LivestockIcon,
    },
    {
      title: "Fruit orchards & juices",
      description:
        "Longer term growth into orchards and on-farm processing for fresh fruit and premium juices.",
      icon: FruitOrchards,
    },
    {
      title: "Global export markets",
      description:
        "Building a trusted agricultural brand capable of reaching international buyers.",
      icon: Globe,
    },
  ];

  return (
    <section id="vision" className="bg-[#f7f3e7] px-5 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        <div>
          <span className="mb-5 inline-block rounded-full bg-[#e2e8e0] px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#0f2719]">
            Future Vision
          </span>

          <h2 className="mb-6 font-serif text-[34px] font-normal leading-tight text-[#0f2719] sm:text-[42px] md:text-5xl">
            A diversified farm built for quality, resilience, and global reach.
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#556052] lg:mx-0">
            Our vision is to grow a diversified farm that combines premium
            livestock, commercial poultry, and future orchards into a strong,
            value-driven operation. We want the farm to stand for dependable
            quality, thoughtful land stewardship, and a supply chain that can
            reach both local and international buyers with confidence.
          </p>
          <img src={tractor2} alt="Tractor in a field" className="mt-6 w-full rounded-[20px] object-cover" />
        </div>


        <div className="rounded-[32px] border border-[#e5ddca] bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">

          {focusAreas.map((item, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col items-start gap-4 rounded-[20px] bg-[#fcfbf7] p-4 sm:flex-row"
            >

              <div className="flex h-16 w-16 flex-shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>


              <div>
                <h3 className="text-lg font-semibold text-[#0f2719]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#556052]">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

          <img src={tractor} alt="Tractor in a field" className="mt-6 w-full rounded-[20px] object-cover" />
        </div>

      </div>
    </section>
  );
};

export default WhyGrowWithUs;