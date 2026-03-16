import { Glasses, Heart, ArrowUp, Instagram } from 'lucide-react';

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
    { name: 'WebXR', href: '#servicios' },
    { name: 'Consulting', href: '#servicios' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href="#hero" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#1877f2] flex items-center justify-center">
                  <Glasses className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900 tracking-tight">
                  INMERSIA <span className="font-normal text-gray-500">STUDIO</span>
                </span>
              </a>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Developer of immersive VR/AR experiences for the architectural sector.
                Transforming the way architectural projects are presented and experienced.
              </p>

              <a
                href="https://instagram.com/inmersia_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#1877f2] hover:text-[#166fe5] font-medium"
              >
                <Instagram className="w-4 h-4" />
                @inmersia_studio
              </a>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
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

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Services</h4>
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

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-500 mb-4">
                Subscribe to receive updates on new projects and technologies.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1877f2] transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#1877f2] text-white text-sm font-semibold hover:bg-[#166fe5] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 flex items-center gap-1">
              © {new Date().getFullYear()} Inmersia Studio.
            </p>

            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-[#1877f2] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877f2] hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
