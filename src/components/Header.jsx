import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#sobre-mi' },
  { name: 'Projects', href: '#proyectos' },
  { name: 'Services', href: '#servicios' },
];

export default function Header() {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/Perfil empresa.jpg"
              alt="Inmersia Studio"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              INMERSIA <span className="font-normal text-gray-500">STUDIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {Object.keys(translations.nav).filter(k => k !== 'contact' && k !== 'hireMe').map((key) => {
              const hrefMap = { home: '#hero', about: '#sobre-mi', projects: '#proyectos', services: '#servicios' };
              return (
              <a
                key={key}
                href={hrefMap[key]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(hrefMap[key]);
                }}
                className="text-sm font-medium text-gray-600 hover:text-[#1877f2] transition-colors"
              >
                {translations.nav[key]}
              </a>
            )})}
            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#1877f2] transition-colors ml-4 mr-0">
              <Globe className="w-5 h-5" />
              {language.toUpperCase()}
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contacto');
              }}
              className="btn-primary text-sm px-5 py-2.5"
            >
              {translations.nav.hireMe}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200/50 space-y-2">
          {Object.keys(translations.nav).filter(k => k !== 'contact' && k !== 'hireMe').map((key) => {
              const hrefMap = { home: '#hero', about: '#sobre-mi', projects: '#proyectos', services: '#servicios' };
              return (
              <a
                key={key}
                href={hrefMap[key]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(hrefMap[key]);
                }}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1877f2] hover:bg-blue-50 rounded-lg transition-all"
              >
                {translations.nav[key]}
              </a>
            )})}
            <button onClick={toggleLanguage} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1877f2] hover:bg-blue-50 rounded-lg transition-all">
              {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contacto');
              }}
              className="btn-primary w-full text-center"
            >
              {translations.nav.hireMe}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
