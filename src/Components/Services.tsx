const Services = () => {
  const phases = [
    {
      title: "Phase 1",
      subtitle: "Land Preparation & Infrastructure",
      status: "In Progress",
      description:
        "Preparing the foundation with careful site development, and essential farm infrastructure.",
    },
    {
      title: "Phase 2",
      subtitle: "Initial Livestock Introduction",
      status: "Upcoming",
      description:
        "Introducing the first premium livestock groups as the farm moves into active production.",
    },
    {
      title: "Phase 3",
      subtitle: "Commercial & Export Scale-Up",
      status: "Future Goal",
      description:
        "Expanding into commercial supply, value addition, and regional export partnerships.",
    },
  ];

  return (
    <section
      id="journey"
      className="overflow-hidden bg-[#f4f2e6] px-5 py-24 sm:px-6"
    >
      {/* Header */}
      <div className="mx-auto mb-20 max-w-5xl text-center">

        <span className="mb-6 inline-block rounded-full bg-[#d3a24c]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#905933]">
          Our Journey
        </span>

        <h2 className="mb-6 font-serif text-[42px] font-normal leading-tight text-[#0f2719] md:text-5xl">
          Building from the ground up,
          <br />
          step by step.
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#556052] sm:text-lg">
          Our path is deliberately paced, with each stage strengthening the
          farm’s foundation and preparing it for long-term commercial success.
        </p>

      </div>


      {/* Timeline Chain */}
      <div className="mx-auto max-w-6xl">

        <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">

          {/* Connecting Line */}
          <div className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-[1px] bg-[#d3a24c]/50 md:block" />


          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >

              {/* Circle */}
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#d3a24c] bg-[#f4f2e6]">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2719]">

                  <span className="text-sm font-semibold text-[#d3a24c]">
                    0{index + 1}
                  </span>

                </div>

              </div>


              {/* Text */}
              <div className="mt-8 max-w-xs">

                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[2px] text-[#905933]">
                  {phase.title}
                </p>


                <h3 className="font-serif text-[19px] italic font-normal leading-snug text-[#0f2719]">
                  {phase.subtitle}
                </h3>


                <p className="mt-4 text-xs font-semibold uppercase tracking-[1.5px] text-[#2f5f3d]">
                  {phase.status}
                </p>


                <p className="mt-4 text-sm leading-relaxed text-black">
                  {phase.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;