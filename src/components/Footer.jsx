import { Glasses, Heart, ArrowUp, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#sobre-mi' },
    { name: 'Projects', href: '#proyectos' },
    { name: 'Services', href: '#servicios' },
    { name: 'Contact', href: '#contacto' },
  ],
  services: [
    { name: 'VR Portfolios', href: '#servicios' },
    { name: '3D Visualization', href: '#servicios' },
    { name: 'AR Apps', href: '#servicios' },
    { name: 'Web Experiences', href: '#servicios' },
  ],
};

export default function Footer() {
  const { t } = useLanguage();
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20 flex flex-col items-center text-center">
          <div className="flex justify-center w-full mb-12">
            <div className="w-1/3 max-w-sm">
                <img
                    src="/jojo.mp4"
                    alt="Logo animado"
                    className="w-full h-auto"
                  />
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">ARCHVR Studio</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {t('footer', 'description')}
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/inmersia_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-[#1877f2]/10 text-gray-500 hover:text-[#1877f2] rounded-full transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-8 text-left border-t border-gray-100 pt-16 mb-16">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">{t('footer', 'quickLinks')}</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => {
                  const mapKey = link.name.toLowerCase().replace(' ', '');
                  const keys = {home: 'home', about: 'about', projects: 'projects', services: 'services', contact: 'contact'};
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="text-sm text-gray-500 hover:text-[#1877f2] transition-colors"
                      >
                        {t('nav', keys[mapKey] || link.name) || link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">{t('footer', 'services')}</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-gray-500 hover:text-[#1877f2] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm font-bold text-gray-900 mb-4">{t('footer', 'connect')}</h4>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-sm text-gray-600 mb-4">
                 Ready to transform your architectural presentations?
                </p>
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="w-full btn-primary text-sm py-2.5"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ARCHVR Studio. {t('footer', 'rights')}
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded-full transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
