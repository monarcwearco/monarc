import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-monarc-black/95 backdrop-blur-sm border-b border-monarc-text-secondary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif tracking-widest hover:text-monarc-accent transition-colors duration-300"
          >
            MØNARC
          </button>

          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('shop')}
              className="text-sm tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-sm tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="text-sm tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
            >
              Archive
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-monarc-text transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-monarc-text transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-monarc-text transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 border-b border-monarc-text-secondary/10' : 'max-h-0'
        } bg-monarc-black`}
      >
        <div className="px-6 py-8 space-y-6">
          <button
            onClick={() => scrollToSection('shop')}
            className="block text-lg tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
          >
            Shop
          </button>
          <button
            onClick={() => scrollToSection('philosophy')}
            className="block text-lg tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('shop')}
            className="block text-lg tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
          >
            Archive
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block text-lg tracking-wider uppercase hover:text-monarc-accent transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
