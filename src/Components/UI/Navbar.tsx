import { useState } from "react";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Story", id: "story" },
    { label: "Journey", id: "journey" },
    { label: "Vision", id: "vision" },
  ];

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-8 sm:py-8">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left transition-opacity duration-300 hover:opacity-90"
        >
          <img src={logo} alt="Mnguni Tree-Line Farm logo" className="h-14 w-14 sm:h-16 sm:w-16" />

          <div>
            <h1 className="font-serif text-lg italic font-normal leading-[1.15] text-white sm:text-xl">
              Mnguni Tree Line Farm
            </h1>
            <p className="text-[9px] uppercase tracking-[3px] text-[#d3a24c] sm:text-[10px]">
              South Africa
            </p>
          </div>
        </button>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full border border-white/40 p-2.5 text-white transition hover:border-[#d3a24c] hover:text-[#d3a24c] md:hidden"
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <button
            onClick={() => scrollToSection("partner")}
            className="rounded-full border border-white/40 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-all duration-500 hover:border-[#d3a24c] hover:bg-[#d3a24c] hover:text-[#071b0f] sm:px-5 sm:py-3"
          >
            Partner with us
          </button>
        </div>

        <ul className="hidden w-full items-center justify-center gap-6 text-sm font-light text-white md:flex md:w-auto">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)} className="transition duration-300 hover:text-[#e6b45b]">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-light text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className="block w-full text-left transition hover:text-[#e6b45b]">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;