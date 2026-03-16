const fs = require('fs');
let codeL = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');

if (!codeL.includes("cta: {")) {
  codeL = codeL.replace(/servicios: {/g, `servicios: {
      cta: {
        title: '¿Tienes un proyecto en mente?',
        desc: 'Hablemos sobre cómo la realidad virtual puede transformar la presentación de tus proyectos arquitectónicos.',
        btn: 'Programar una llamada'
      },
`);
  codeL = codeL.replace(/servicios: \{([\s\S]*?)cta: \{([\s\S]*?)btn: 'Programar una llamada'/g, `servicios: {$1cta: {
        title: 'Have a project in mind?',
        desc: "Let's talk about how virtual reality can transform the presentation of your architectural projects.",
        btn: 'Schedule a Call'`);
}

if (!codeL.includes("contacto: {")) {
  codeL = codeL.replace(/servicios: {/g, `contacto: {
      badge: 'CONTACTO',
      title: 'Hablemos de tu proyecto',
      desc: '¿Tienes un proyecto arquitectónico que quieres llevar al siguiente nivel? Estoy aquí para ayudarte a crear experiencias inmersivas impactantes.',
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
      btnWhatsapp: 'WhatsApp'
    },
    servicios: {`);
  codeL = codeL.replace(/contacto: \{([\s\S]*?)servicios: \{/g, `contacto: {
      badge: 'CONTACT',
      title: "Let's talk about your project",
      desc: "Have an architectural project you want to take to the next level? I'm here to help you create impactful immersive experiences.",
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
      btnWhatsapp: 'WhatsApp'
    },
    servicios: {`);
}

fs.writeFileSync('src/context/LanguageContext.jsx', codeL);
