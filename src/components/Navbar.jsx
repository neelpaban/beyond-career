import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg text-slate-900'
          : 'bg-white/10 backdrop-blur-lg shadow-md text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide uppercase text-amber-400">
          Beyond Career
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:gap-10 font-serif font-semibold text-lg tracking-wide uppercase transition-all duration-300 ${
            menuOpen ? 'block mt-4 md:mt-0 space-y-4 md:space-y-0' : 'hidden'
          } md:flex`}
        >
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-amber-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
