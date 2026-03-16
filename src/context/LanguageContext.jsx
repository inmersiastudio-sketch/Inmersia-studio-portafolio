import React, { createContext, useContext, useState } from 'react';

const translations = {
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
      viewAll: 'Ver Todos los Proyectos'
    },
    servicios: {
      badge: 'Especialidades',
      title: 'Servicios de Visualización y Desarrollo VR/AR',
      description: 'Ofrecemos soluciones integrales, desde renders fotorrealistas hasta aplicaciones interactivas en realidad virtual.'
    },
    sobreMi: {
      badge: 'Sobre Nosotros',
      title: 'Elevando el Diseño mediante Tecnología',
      description: 'En ARCHVR Studio combinamos principios de diseño arquitectónico con el desarrollo de software avanzado para crear experiencias espaciales inolvidables.',
      button: 'Descargar CV / Dossier'
    },
    contacto: {
      badge: 'Ponte en contacto',
      title: '¿Listo para Construir el Futuro?',
      description: 'Cuéntanos sobre tu próximo proyecto arquitectónico y veamos cómo la realidad virtual puede elevar tus presentaciones.',
      form: { name: 'Nombre', email: 'Correo Electrónico', message: 'Mensaje', send: 'Enviar Mensaje' },
      info: { title: 'Información de Contacto', chat: 'Chatea con nosotros', email: 'Escríbenos', location: 'Ubicación' }
    },
    footer: {
      description: 'Creando experiencias de próxima generación que unen la arquitectura con la realidad virtual.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      connect: 'Conecta',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', services: 'Services', contact: 'Contact', hireMe: 'Hire Me' },
    hero: {
      badge: 'Next-Gen Visualization',
      title1: 'Designing Future',
      title2: 'Realities',
      title3: 'for Architects',
      description: 'Specializing in high-end VR/AR experiences that bring architectural blueprints to life with immersive depth and cutting-edge technology.',
      portfolio: 'View Portfolio',
      quote: 'Get a Quote',
      stats: { projects: 'Projects', clients: 'Clients', years: 'Years' }
    },
    proyectos: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      description: 'A selection of immersive experiences developed for architecture studios, real estate developers, and design brands.',
      view: 'View',
      viewAll: 'View All Projects'
    },
    servicios: {
      badge: 'Expertise',
      title: 'Visualization & Development Services',
      description: 'We provide end-to-end solutions from photorealistic rendering to fully interactive VR applications.'
    },
    sobreMi: {
      badge: 'About Us',
      title: 'Elevating Design through Technology',
      description: 'At ARCHVR Studio, we combine architectural design principles with advanced software development to create unforgettable spatial experiences.',
      button: 'Download CV / Portfolio'
    },
    contacto: {
      badge: 'Get in touch',
      title: 'Ready to Build the Future?',
      description: 'Tell us about your next architectural project and let\'s see how VR can elevate your presentations.',
      form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send Message' },
      info: { title: 'Contact Information', chat: 'Chat with us', email: 'Email us', location: 'Location' }
    },
    footer: {
      description: 'Crafting next-generation experiences that bridge architecture and virtual reality.',
      quickLinks: 'Quick Links',
      services: 'Services',
      connect: 'Connect',
      rights: 'All rights reserved.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default spanish now
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (section, key) => {
    return translations[language][section][key] || key;
  };

  const tRaw = (languageKey, section, key) => {
    return translations[languageKey][section][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tRaw, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
