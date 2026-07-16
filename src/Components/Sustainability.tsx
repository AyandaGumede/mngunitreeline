const Sustainability = () => {
  const points = [
    {
      title: "Water Conservation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
        </svg>
      )
    },
    {
      title: "Eco-Friendly Farming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z"/>
          <path d="M9 10a5 5 0 0 0 5 5"/>
        </svg>
      )
    },
    {
      title: "Renewable Energy",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      )
    },
    {
      title: "Soil Protection",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 20H4v-3a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3z"/>
          <path d="M12 3v8M8 6l4-3 4 3"/>
        </svg>
      )
    },
    {
      title: "Reduced Waste",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
        </svg>
      )
    },
    {
      title: "Responsible Practices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto bg-[#033f24] rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Right Side: Copy & Content Grid */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          {/* Badge */}
          <span className="self-start inline-flex items-center gap-1.5 bg-[#165137] text-[#dfa637] text-[11px] font-bold tracking-[1.5px] px-3.5 py-1.5 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            SUSTAINABILITY
          </span>

          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal leading-[1.15] mb-6">
            Farming that gives more than it takes
          </h2>

          {/* Description */}
          <p className="text-[#a4bcae] text-sm sm:text-base leading-relaxed mb-10">
            We measure success not just in yield, but in the health of our soil, water and community. Every practice is chosen with tomorrow in mind.
          </p>

          {/* Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((item, index) => (
              <div 
                key={index}
                className="bg-[#04331e]/50 border border-[#0b4d31] rounded-2xl p-3.5 px-4 flex items-center gap-3"
              >
                {/* Gold Circle Icon */}
                <div className="bg-[#dfa637] text-[#033f24] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                {/* Title */}
                <span className="text-white text-sm font-medium tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Sustainability;