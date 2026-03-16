const fs = require('fs');

const contextContent = `import React, { createContext, useContext, useState } from 'react';

export const translations = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre Mí', projects: 'Proyectos', services: 'Servicios', contact: 'Contacto', hireMe: 'Contrátame' },
    hero: {
      badge: 'Visualización VR/AR',
      title1: 'Diseñando Realidades',
      title2: 'Futuras',
      title3: ' para Arquitectos',
      description: 'Especialistas en experiencias VR/AR de alta gama que dan vida a planos de arquitectura con profundidad inmersiva y tecnología de última generación.',
      portfolio: 'Ver Portafolio',
      quote: 'Pedir Presupuesto',
      stats: { projects: 'Proyectos', clients: 'Clientes', years: 'Años' }
    },
    proyectos: {
      badge: 'Portafolio',
      title: 'Proyectos Destacados',
      description: 'Una selección de experiencias inmersivas desarrolladas para estudios de arquitectura, desarrolladoras inmobiliarias y marcas de diseño.',
      view: 'Ver',
      viewAll: 'Ver Todos los Proyectos',
      items: [
        {
          id: 0, nombre: 'Baño Moderno VR',
          descripcion: 'Experiencia inmersiva de un baño moderno con iluminación realista donde la luz brilla hermosamente en el porcelanato. Usa modelos 3D de manos para interactuar con los objetos, creando una experiencia más natural e intuitiva que los controles tradicionales.',
          tecnologia: 'Unity + VR + Manos 3D', tipoCliente: 'Proyecto personal', categoria: 'VR Interactivo'
        },
        {
          id: 1, nombre: 'Habitación Interactiva VR',
          descripcion: 'Experiencia inmersiva de una habitación donde puedes interactuar con un panel para prender y apagar las luces. Puedes mover objetos, activarlos/desactivarlos y las texturas y materiales se ven extremadamente realistas.',
          tecnologia: 'Unity + VR', tipoCliente: 'Proyecto personal', categoria: 'VR Interactivo'
        }
      ]
    },
    servicios: {
      cta: {
        title: '¿Tienes un proyecto en mente?',
        desc: 'Hablemos sobre cómo la realidad virtual puede transformar la presentación de tus proyectos arquitectónicos.',
        btn: 'Programar una llamada'
      },
      badge: 'Servicios',
      title: 'Soluciones para la Industria AEC',
      description: 'Experiencias tecnológicas personalizadas para arquitectos, desarrolladores y marcas de construcción.',
      items: [
        { titulo: 'Portafolios VR Inmersivos', descripcion: 'Recorridos virtuales completos de proyectos arquitectónicos. Los clientes pueden explorar espacios antes y cambiar materiales.' },
        { titulo: 'Visualización 3D Avanzada', descripcion: 'Renders interactivos de alta calidad y experiencias 3D para presentaciones de preventa y marketing.' },
        { titulo: 'Apps de Realidad Aumentada', descripcion: 'Soluciones AR para visualizar muebles y acabados en espacios reales. Perfecto para la toma de decisiones.' },
        { titulo: 'Experiencias WebXR', descripcion: 'Visualizaciones 3D accesibles directamente desde el navegador, sin necesidad de instalación de aplicaciones.' },
        { titulo: 'Integración BIM', descripcion: 'Conversión de modelos BIM (Revit, Archicad) a experiencias inmersivas listas para la presentación.' },
        { titulo: 'Presentaciones Multi-usuario', descripcion: 'Sesiones VR colaborativas donde arquitectos y clientes pueden recorrer el proyecto juntos a distancia.' }
      ]
    },
    sobreMi: {
      badge: 'Sobre Mí',
      title1: 'Desarrollador apasionado por el',
      title2: 'futuro de la arquitectura',
      p1_1: 'Soy un desarrollador full-stack especializado en',
      p1_2: 'experiencias de realidad virtual y aumentada',
      p1_3: 'para el sector arquitectónico. Combino mi experiencia en desarrollo de software con un profundo entendimiento del diseño.',
      p2_1: 'Creo experiencias inmersivas que',
      p2_2: 'transforman la forma en que se presentan y venden los proyectos.',
      p3: 'Mi enfoque es crear soluciones tecnológicas accesibles y de alto impacto visual que permitan a los clientes finales experimentar los espacios de manera intuitiva y memorable.',
      stats: [
        { label: '3+ años', desc: 'Desarrollo XR' },
        { label: '5+', desc: 'Proyectos Entregados' },
        { label: '100%', desc: 'Satisfacción' }
      ],
      role1: 'Desarrollador XR & Especialista 3D',
      role2: 'Ingeniero en Sistemas',
      role3: 'Desarrollador Full-stack especializado en XR',
      core: 'Tecnologías Principales',
      certs: 'Certificaciones'
    },
    contacto: {
      badge: 'CONTACTO',
      title: '¿Listo para Construir el Futuro?',
      desc: 'Cuéntanos sobre tu próximo proyecto arquitectónico y veamos cómo la realidad virtual puede elevar tus presentaciones.',
      infoTitle: 'Información de Contacto',
      email: 'EMAIL',
      whatsapp: 'WHATSAPP',
      location: 'UBICACIÓN',
      follow: 'Sígueme',
      formTitle: 'Enviar un mensaje',
      labelName: 'Nombre',
      phName: 'Tu nombre',
      labelEmail: 'Email',
      phEmail: 'tu@email.com',
      labelMessage: 'Mensaje',
      phMessage: 'Háblame de tu proyecto...',
      btnSend: 'Enviar Mensaje',
      btnWhatsapp: 'WhatsApp',
      successMsg: '¡Mensaje enviado con éxito! Te contactaré pronto.',
      errorMsg: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
    },
    footer: {
      description: 'Desarrollador de experiencias VR/AR inmersivas. Transformando la forma en que se presentan y experimentan los proyectos arquitectónicos.',
      quickLinks: 'Navegación',
      services: 'Servicios',
      connect: 'Conecta',
      rights: 'Todos los derechos reservados.',
      ready: '¿Listo para transformar tus presentaciones arquitectónicas?',
      start: 'Iniciar un Proyecto'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', services: 'Services', contact: 'Contact', hireMe: 'Hire Me' },
    hero: {
      badge: 'Next-Gen Visualization',
      title1: 'Designing Future',
      title2: 'Realities',
      title3: 'for Architects',
      description: 'Specialists in high-end VR/AR experiences that bring architectural floor plans to life with immersive depth and cutting-edge technology.',
      portfolio: 'View Portfolio',
      quote: 'Get a Quote',
      stats: { projects: 'Projects', clients: 'Clients', years: 'Years' }
    },
    proyectos: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      description: 'A selection of immersive experiences developed for architecture firms, real estate developers, and design brands.',
      view: 'View',
      viewAll: 'View All Projects',
      items: [
        {
          id: 0, nombre: 'Modern Bathroom VR',
          descripcion: 'Immersive experience of a modern bathroom with realistic lighting where light bounces beautifully on porcelain. Uses 3D hand models to interact with objects, creating a more natural and intuitive experience than traditional controllers.',
          tecnologia: 'Unity + VR + 3D Hands', tipoCliente: 'Personal project', categoria: 'Interactive VR'
        },
        {
          id: 1, nombre: 'Interactive Bedroom VR',
          descripcion: 'Immersive experience of a bedroom where you can interact with a panel to turn lights on and off. You can move objects, activate/deactivate them, and the textures and materials look extremely realistic.',
          tecnologia: 'Unity + VR', tipoCliente: 'Personal project', categoria: 'Interactive VR'
        }
      ]
    },
    servicios: {
      cta: {
        title: 'Have a project in mind?',
        desc: "Let's talk about how virtual reality can transform the presentation of your architectural projects.",
        btn: 'Schedule a Call'
      },
      badge: 'Services',
      title: 'Solutions for the AEC Industry',
      description: 'Custom technological experiences for architects, developers, and construction brands.',
      items: [
        { titulo: 'Immersive VR Portfolios', descripcion: 'Complete virtual tours of architectural projects. Clients can explore spaces before they are built and change materials in real time.' },
        { titulo: 'Advanced 3D Visualization', descripcion: 'High-quality interactive renders and 3D experiences for pre-sales presentations and marketing.' },
        { titulo: 'Augmented Reality Apps', descripcion: 'AR solutions to visualize furniture and finishes in real spaces. Perfect for decision making.' },
        { titulo: 'WebXR Experiences', descripcion: '3D visualizations accessible directly from the browser, no app installation required.' },
        { titulo: 'BIM Integration', descripcion: 'Conversion of BIM models (Revit, Archicad) to immersive experiences ready for presentation.' },
        { titulo: 'Multi-user Presentations', descripcion: 'Collaborative VR sessions where architects and clients can tour the project together remotely.' }
      ]
    },
    sobreMi: {
      badge: 'About Me',
      title1: 'Developer passionate about the',
      title2: 'future of architecture',
      p1_1: 'I am a full-stack developer specialized in',
      p1_2: 'virtual and augmented reality experiences',
      p1_3: 'for the architectural sector. I combine my software development background with a deep understanding of the architectural design process.',
      p2_1: 'I create immersive experiences that',
      p2_2: 'transform the way projects are presented and sold.',
      p3: 'My focus is on creating accessible, high visual impact technological solutions that allow end clients to experience spaces intuitively and memorably.',
      stats: [
        { label: '3+ years', desc: 'XR Development' },
        { label: '5+', desc: 'Projects Delivered' },
        { label: '100%', desc: 'Client Satisfaction' }
      ],
      role1: 'XR Developer & 3D Specialist',
      role2: 'Systems Engineer',
      role3: 'Full-stack Developer specialized in XR',
      core: 'Core Technologies',
      certs: 'Certificaciones'
    },
    contacto: {
      badge: 'CONTACT',
      title: 'Ready to Build the Future?',
      desc: 'Tell us about your next architectural project and let\\'s see how VR can elevate your presentations.',
      infoTitle: 'Contact Information',
      email: 'EMAIL',
      whatsapp: 'WHATSAPP',
      location: 'LOCATION',
      follow: 'Follow me',
      formTitle: 'Send a message',
      labelName: 'Name',
      phName: 'Your name',
      labelEmail: 'Email',
      phEmail: 'your@email.com',
      labelMessage: 'Message',
      phMessage: 'Tell me about your project...',
      btnSend: 'Send Message',
      btnWhatsapp: 'WhatsApp',
      successMsg: 'Message sent successfully! I\\'ll get back to you soon.',
      errorMsg: 'There was an error sending the message. Please try again.'
    },
    footer: {
      description: 'XR Developer. Transforming the way architectural projects are presented and experienced.',
      quickLinks: 'Quick Links',
      services: 'Services',
      connect: 'Connect',
      rights: 'All rights reserved.',
      ready: 'Ready to transform your architectural presentations?',
      start: 'Start a Project'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'es' : 'en');

  const t = (section, key, subkey) => {
    if (subkey) return translations[language][section]?.[key]?.[subkey] || subkey;
    return translations[language][section]?.[key] || key;
  };
  const tRaw = (languageKey, section, key) => translations[languageKey][section][key];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tRaw, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
`;

fs.writeFileSync('src/context/LanguageContext.jsx', contextContent);
