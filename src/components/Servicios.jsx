import { Glasses, Box, Smartphone, Monitor, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const servicios = [
  {
    id: 1,
    titulo: 'Immersive VR Portfolios',
    descripcion:
      'Complete virtual tours of architectural projects. Clients can explore spaces before construction with real-time material changes.',
    icon: Glasses,
  },
  {
    id: 2,
    titulo: 'Advanced 3D Visualization',
    descripcion:
      'High-quality interactive renders and 3D experiences for pre-sale presentations, real estate marketing, and project approvals.',
    icon: Box,
  },
  {
    id: 3,
    titulo: 'Augmented Reality Apps',
    descripcion:
      'AR solutions for visualizing furniture, finishes, and designs in real spaces. Perfect for furniture sales and decision-making.',
    icon: Smartphone,
  },
  {
    id: 4,
    titulo: 'WebXR Experiences',
    descripcion:
      '3D visualizations accessible directly from the browser, no app downloads needed. Ideal for marketing and online portfolios.',
    icon: Monitor,
  },
  {
    id: 5,
    titulo: 'XR Technology Consulting',
    descripcion:
      'Advisory on implementing immersive technologies in architectural workflows, from BIM to VR integration.',
    icon: Sparkles,
  },
  {
    id: 6,
    titulo: 'Workshops & Training',
    descripcion:
      'Training for architecture teams on using VR/AR tools and creating immersive content.',
    icon: Users,
  },
];

export default function Servicios() {
  const { t } = useLanguage();
  return (
    <section id="servicios" className="relative py-20 lg:py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#1877f2] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solutions for the AEC Industry
          </h2>
          <p className="text-lg text-gray-600">
            Custom technological experiences for architects, developers, and construction brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio) => {
            const IconComponent = servicio.icon;
            return (
              <div
                key={servicio.id}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="w-7 h-7 text-[#1877f2]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1877f2] to-blue-600 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Have a project in mind?
              </h3>
              <p className="text-blue-100 max-w-xl">
                Let's talk about how virtual reality can transform the presentation
                of your architectural projects.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#1877f2] font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
