
const Gallery = () => {
  return (
    <section className="bg-white py-20 px-5 font-sans">
        
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="mt-5 inline-flex items-center gap-2 rounded-full mb-12 border border-gray/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[5px] text-black backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              GALLERY
            </div>
        {/* Main Heading */}
        <h2 className="font-serif text-[46px] md:text-6xl text-[#0f2719] leading-tight font-normal mb-6">
          Scenes from <span className="italic text-[#905933]">our farms</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#556052] leading-relaxed max-w-2xl mx-auto">
          Real moments from the fields, greenhouses, <br/> and pastures that feed our communities.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
        
        {/* Column 1: Aerial Green Field */}
        <div className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" 
            alt="Aerial view of green crop fields" 
            className="w-full h-[500px] object-cover rounded-[32px] shadow-sm"
          />
        </div>

        {/* Column 2: Tractor at Sunset */}
        <div className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=600" 
            alt="Tractor working field during sunset" 
            className="w-full h-[500px] object-cover rounded-[32px] shadow-sm"
          />
        </div>

        {/* Column 3: Stacked Micro-Grid (Hands & Workers) */}
        <div className="flex flex-col gap-6 justify-between">
          <img 
            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600" 
            alt="Hands holding young soil plant seedling" 
            className="w-full h-[238px] object-cover rounded-[32px] shadow-sm"
          />
          <img 
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
            alt="Farmers working together in fields" 
            className="w-full h-[238px] object-cover rounded-[32px] shadow-sm"
          />
        </div>

        {/* Column 4: Commercial Greenhouse */}
        <div className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600" 
            alt="Interior of modern agricultural greenhouse structure" 
            className="w-full h-[500px] object-cover rounded-[32px] shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}

export default Gallery;