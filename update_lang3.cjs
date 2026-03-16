const fs = require('fs');
let text = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');

const regexEsContacto = /contacto:\s*\{[\s\S]*?footer:\s*\{/g;
text = text.replace(regexEsContacto, `contacto: {
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
      labelEmail: 'Email',
      labelMessage: 'Mensaje',
      phName: 'Tu nombre',
      phEmail: 'tu@email.com',
      phMessage: 'Háblame de tu proyecto...',
      btnSend: 'Enviar Mensaje',
      btnWhatsapp: 'WhatsApp',
      successMsg: '¡Mensaje enviado con éxito! Te contactaré pronto.',
      errorMsg: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
    },
    footer: {`);

const regexEnContacto = /contacto:\s*\{[\s\S]*?footer:\s*\{/;
text = text.replace(regexEnContacto, `contacto: {
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
      labelEmail: 'Email',
      labelMessage: 'Message',
      phName: 'Your name',
      phEmail: 'your@email.com',
      phMessage: 'Tell me about your project...',
      btnSend: 'Send Message',
      btnWhatsapp: 'WhatsApp',
      successMsg: 'Message sent successfully! I\\'ll get back to you soon.',
      errorMsg: 'There was an error sending the message. Please try again.'
    },
    footer: {`);

// Now fix `servicios` CTA english vs spanish
const regexEsServicios = /servicios:\s*\{\s*cta:\s*\{[\s\S]*?btn:\s*'Schedule a Call'[\s\S]*?\},/g;
text = text.replace(regexEsServicios, `servicios: {
      cta: {
        title: '¿Tienes un proyecto en mente?',
        desc: 'Hablemos sobre cómo la realidad virtual puede transformar la presentación de tus proyectos arquitectónicos.',
        btn: 'Programar una llamada'
      },`);

const regexEnServicios = /servicios:\s*\{\s*cta:\s*\{[\s\S]*?btn:\s*'Programar una llamada'[\s\S]*?\},/g;
// actually maybe both got set to schedule a call previously? Let's check with regex replacement by just finding the first and second matches:
fs.writeFileSync('src/context/LanguageContext2.jsx', text);
