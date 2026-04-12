import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-montserrat text-2xl font-extrabold text-teal-dark tracking-tight">
              MEDITA EN <span className="text-teal-medium">MADRID</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#clases" className="text-brand-dark hover:text-teal-dark transition-colors text-sm font-semibold uppercase tracking-wider">Clases</a>
            <a href="#retiros" className="text-brand-dark hover:text-teal-dark transition-colors text-sm font-semibold uppercase tracking-wider">Retiros</a>
            <a href="#filosofia" className="text-brand-dark hover:text-teal-dark transition-colors text-sm font-semibold uppercase tracking-wider">Filosofía</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#miembros" className="text-brand-dark hover:text-teal-medium transition-colors text-sm font-semibold">
              Acceso Miembros
            </a>
            <a
              href="#reservar"
              className="bg-brand-yellow hover:bg-yellow-500 text-brand-dark px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Reservar Clase
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-teal-dark hover:text-teal-medium focus:outline-none"
              aria-label="Menú principal"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-teal-light/20 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <a href="#clases" className="block px-3 py-3 text-base font-bold text-brand-dark hover:bg-teal-light/10 uppercase tracking-wider">Clases</a>
            <a href="#retiros" className="block px-3 py-3 text-base font-bold text-brand-dark hover:bg-teal-light/10 uppercase tracking-wider">Retiros</a>
            <a href="#filosofia" className="block px-3 py-3 text-base font-bold text-brand-dark hover:bg-teal-light/10 uppercase tracking-wider">Filosofía</a>
            <div className="border-t border-teal-light/20 my-2 pt-2">
              <a href="#miembros" className="block px-3 py-3 text-base font-bold text-teal-medium hover:bg-teal-light/10">Acceso Miembros</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
