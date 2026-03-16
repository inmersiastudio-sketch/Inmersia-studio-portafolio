import { useState } from 'react';
import { ExternalLink, Box, Monitor, Smartphone, Eye, X } from 'lucide-react';

const proyectos = [
  {
    id: 0,
    nombre: 'Baño Moderno VR',
    descripcion:
      'Experiencia inmersiva de un baño moderno con iluminación realista donde la luz brilla beautifulmente en el porcelanato. Usa modelos 3D de manos para interactuar con los objetos, creando una experiencia más natural e intuitiva que los controles tradicionales.',
    tecnologia: 'Unity + VR + Manos 3D',
    tipoCliente: 'Proyecto personal',
    categoria: 'VR Interactivo',
    icon: Box,
    gradient: 'from-teal-400 to-cyan-500',
    video: '/Baño.mp4',
  },
  {
    id: 1,
    nombre: 'Habitación Interactiva VR',
    descripcion:
      'Experiencia inmersiva de una habitación donde puedes interactuar con un panel para prender y apagar las luces. Puedes mover objetos, activarlos/desactivarlos y las texturas y materiales se ven extremadamente realistas.',
    tecnologia: 'Unity + VR',
    tipoCliente: 'Proyecto personal',
    categoria: 'VR Interactivo',
    icon: Box,
    gradient: 'from-blue-400 to-cyan-500',
    video: '/Habitacion Room.mp4',
  },
];

export default function Proyectos() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    document.body.style.overflow = 'hidden';
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="proyectos" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#1877f2] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            A selection of immersive experiences developed for architecture studios,
            real estate developers, and design brands.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => {
            const IconComponent = proyecto.icon;
            return (
              <article
                key={proyecto.id}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Image Area */}
                <div className={`h-48 bg-gradient-to-br ${proyecto.gradient} relative overflow-hidden`}>
                  {proyecto.video ? (
                    <video
                      src={proyecto.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-14 h-14 text-white/90" />
                      </div>
                    </>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800">
                      {proyecto.categoria}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1877f2] transition-colors">
                    {proyecto.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {proyecto.descripcion}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologia.split(' + ').map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-gray-200 text-xs font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {proyecto.tipoCliente}
                    </span>
                    <button
                      onClick={() => abrirModal(proyecto)}
                      className="flex items-center gap-1 text-sm font-semibold text-[#1877f2] hover:text-[#166fe5] transition-colors"
                    >
                      View
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Projects
          </button>
        </div>

        {/* Modal de Proyecto */}
        {proyectoSeleccionado && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={cerrarModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Section */}
              <div className="relative aspect-video bg-gray-900">
                {proyectoSeleccionado.video ? (
                  <video
                    src={proyectoSeleccionado.video}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${proyectoSeleccionado.gradient} flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = proyectoSeleccionado.icon;
                      return <IconComponent className="w-24 h-24 text-white/90" />;
                    })()}
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="p-8">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1877f2]/10 text-[#1877f2] text-sm font-semibold">
                    {proyectoSeleccionado.categoria}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {proyectoSeleccionado.nombre}
                </h3>

                {/* Full Description */}
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {proyectoSeleccionado.descripcion}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proyectoSeleccionado.tecnologia.split(' + ').map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Type */}
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Tipo de Cliente
                  </h4>
                  <p className="text-gray-600">
                    {proyectoSeleccionado.tipoCliente}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
