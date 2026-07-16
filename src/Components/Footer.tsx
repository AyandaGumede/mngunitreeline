import logo from "./Images/logo.png";

const Footer = () => {
    
  return (
    <footer className="bg-[#033f24] px-4 pb-8 pt-16 text-[#a4bcae] sm:px-6 md:px-12">
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="flex h-18 w-20 items-center justify-center rounded-full text-[#033f24]">
               <img src={logo} alt="Mnguni Tree-Line Farm logo" className="h-18 w-20" />
            </div>
            <div>
            <h1 className="font-serif text-m italic font-normal leading-[1.15] text-[white]">
              Mnguni Tree Line Farm
            </h1>
            <p className="text-[10px] uppercase tracking-[4px] text-[#d3a24c]">
              South Africa
            </p>
          </div>
          </div>
          <p className="max-w-[260px] text-sm leading-relaxed text-[#a4bcae]">
            A family-led South African farm rooted in sustainability, premium agriculture, and long-term growth.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-[#dfa637]">Contact</h4>
            <p className="text-sm text-[#a4bcae]">For wholesale, export, and commercial partnerships.</p>
          </div>
          <div className="space-y-1 text-xs font-semibold text-white/90">
            <p>+27 82 000 0000</p>
            <p className="transition hover:text-[#dfa637]">
              <a href="mailto:hello@mngunitreeline.co.za">hello@mngunitreeline.co.za</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#0b4d31] pt-6 text-xs md:flex-row">
        <p>&copy; 2026 Mnguni Tree-Line Farm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;