
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Trajetória', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-nav' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-black tracking-tighter uppercase text-white">
              Controllare<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all rounded-sm">
              Proposta
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black uppercase tracking-tighter text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
