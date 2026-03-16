import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const scrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Clean white background with subtle gradient */}
      <div className="absolute inset-0 bg-white">
        {/* Subtle decorative gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-50 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1877f2]"></span>
              <span className="text-xs font-semibold tracking-widest text-[#606770] uppercase">
                {t('hero', 'badge')}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B33] leading-[1.1] mb-6">
              {t('hero', 'title1')}{' '}
              <span className="bg-gradient-to-r from-[#1877f2] via-[#A197FF] to-[#1877f2] bg-clip-text text-transparent">
                {t('hero', 'title2')}
              </span>{' '}
              {t('hero', 'title3')}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#606770] leading-relaxed mb-8 max-w-lg">
              {t('hero', 'description')}
            </p>

            {/* CTA Buttons - Meta Style */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1877f2] text-white font-semibold transition-all duration-200 hover:bg-[#166fe5] hover:shadow-lg hover:shadow-blue-500/25"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProjects();
                }}
              >
                <Sparkles className="w-4 h-4" />
                {t('hero', 'portfolio')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#E4E6EA] text-[#1C2B33] font-semibold transition-all duration-200 hover:bg-[#DADDE1]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero', 'quote')}
              </a>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end px-4 lg:px-8">
            <div className="relative w-full max-w-2xl">
              {/* Video container - rectangular/square-ish */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-black">
                {/* YouTube iframe - autoplay loop muted */}
                <iframe
                  src="https://www.youtube.com/embed/VdfWSez0AJI?autoplay=1&mute=1&loop=1&playlist=VdfWSez0AJI&controls=0&rel=0"
                  className="absolute top-0 left-0 w-full h-full pointer-events-none scale-125 lg:scale-110"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
