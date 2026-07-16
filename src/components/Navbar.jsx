import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À Propos", href: "#apropos" },
    { name: "Expertises", href: "#expertises" },
    { name: "Projets", href: "#projets" },
    { name: "Galerie", href: "#galerie" },
    { name: "Équipe", href: "#equipe" },
    { name: "Adhésion", href: "#adhesion" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#accueil" className="flex items-center gap-2.5">
                <img src={logo} alt="TAL Hub Logo" className="h-10 w-10 object-contain rounded-full border border-slate-200 dark:border-slate-700" />
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-wider text-tal-navy dark:text-white leading-none">
                    TAL Hub
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-0.5 leading-none">
                    Communities
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-750 hover:text-tal-orange dark:text-slate-200 dark:hover:text-tal-orange transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions: Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-350 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  // Sun Icon
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.05a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-.707-8.485a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Moon Icon
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-350 dark:hover:bg-slate-800 md:hidden focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {/* Menu Icon (Hamburger) */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-in Mobile Drawer Menu */}
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Container (Right-aligned drawer) */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-[290px] sm:max-w-[320px] bg-white dark:bg-slate-900 p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div>
          {/* Header of drawer */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="TAL Hub Logo" className="h-8 w-8 object-contain rounded-full" />
              <div className="flex flex-col">
                <span className="font-extrabold text-tal-navy dark:text-white leading-none">TAL Hub</span>
                <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5 leading-none">Communities</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-105 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
              aria-label="Fermer le menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links of drawer */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-tal-orange dark:text-slate-200 dark:hover:bg-slate-800/40 dark:hover:text-tal-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Footer branding of drawer */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
            Tech &bull; Arts &bull; Languages
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
