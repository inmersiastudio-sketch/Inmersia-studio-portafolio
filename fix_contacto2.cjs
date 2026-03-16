const fs = require('fs');
let codeC = fs.readFileSync('src/components/Contacto.jsx', 'utf8');

// Replace standard strings in Contacto.jsx manually using Regex

codeC = codeC.replace(/<span className="w-1\.5 h-1\.5 rounded-full bg-\[#1877f2\]"><\/span>\s*Contact\s*<\/span>/, `<span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
            {t('contacto', 'badge') || 'CONTACTO'}
          </span>`);

codeC = codeC.replace(/<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">\s*Let's talk about your project\s*<\/h2>/, `<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contacto', 'title') || 'Hablemos de tu proyecto'}
          </h2>`);

codeC = codeC.replace(/<p className="text-lg text-gray-600">\s*Have an architectural project you want to take to the next level\?[\s\S]*?I'm here to help you create impactful immersive experiences\.\s*<\/p>/, `<p className="text-lg text-gray-600">
            {t('contacto', 'desc') || '¿Tienes un proyecto arquitectónico que quieres llevar al siguiente nivel? Estoy aquí para ayudarte a crear experiencias inmersivas impactantes.'}
          </p>`);

codeC = codeC.replace(/<h3 className="text-xl font-bold text-gray-900 mb-6">\s*Contact Information\s*<\/h3>/, `<h3 className="text-xl font-bold text-gray-900 mb-6">
                {t('contacto', 'infoTitle') || 'Información de Contacto'}
              </h3>`);

codeC = codeC.replace(/<div className="text-xs font-semibold tracking-wider text-gray-500 mb-1">\s*EMAIL\s*<\/div>/, `<div className="text-xs font-semibold tracking-wider text-gray-500 mb-1">
                      {t('contacto', 'email') || 'EMAIL'}
                    </div>`);

codeC = codeC.replace(/<div className="text-xs font-semibold tracking-wider text-\[#25D366\] mb-1">\s*WHATSAPP\s*<\/div>/, `<div className="text-xs font-semibold tracking-wider text-[#25D366] mb-1">
                      {t('contacto', 'whatsapp') || 'WHATSAPP'}
                    </div>`);

codeC = codeC.replace(/<div className="text-xs font-semibold tracking-wider text-gray-500 mb-1">\s*LOCATION\s*<\/div>/, `<div className="text-xs font-semibold tracking-wider text-gray-500 mb-1">
                      {t('contacto', 'location') || 'UBICACIÓN'}
                    </div>`);

codeC = codeC.replace(/<h3 className="text-sm font-semibold text-gray-900 mb-4">\s*Follow me\s*<\/h3>/, `<h3 className="text-sm font-semibold text-gray-900 mb-4">
                {t('contacto', 'follow') || 'Sígueme'}
              </h3>`);

codeC = codeC.replace(/<h3 className="text-2xl font-bold text-gray-900 mb-6">\s*Send a message\s*<\/h3>/, `<h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contacto', 'formTitle') || 'Enviar un mensaje'}
              </h3>`);

codeC = codeC.replace(/<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">\s*Name\s*<\/label>/, `<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contacto', 'labelName') || 'Nombre'}
                  </label>`);

codeC = codeC.replace(/<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">\s*Email\s*<\/label>/, `<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contacto', 'labelEmail') || 'Email'}
                  </label>`);

codeC = codeC.replace(/<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">\s*Message\s*<\/label>/, `<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contacto', 'labelMessage') || 'Mensaje'}
                </label>`);

codeC = codeC.replace(/placeholder="Your name"/, 'placeholder={t("contacto", "phName") || "Tu nombre"}');
codeC = codeC.replace(/placeholder="your@email\.com"/, 'placeholder={t("contacto", "phEmail") || "tu@email.com"}');
codeC = codeC.replace(/placeholder="Tell me about your project\.\.\."/, 'placeholder={t("contacto", "phMessage") || "Háblame de tu proyecto..."}');

codeC = codeC.replace(/>\s*Enviar Mensaje\s*<\/button>/, '> {t("contacto", "btnSend") || "Enviar Mensaje"} </button>');
codeC = codeC.replace(/<span>WhatsApp<\/span>/, '<span>{t("contacto", "btnWhatsapp") || "WhatsApp"}</span>');

// Make sure `useLanguage` is imported
if (!codeC.includes('useLanguage')) {
    codeC = `import { useLanguage } from '../context/LanguageContext';\n${codeC}`;
}
if (!codeC.includes('const { t } = useLanguage();')) {
    codeC = codeC.replace(/export default function Contacto\(\) \{/, `export default function Contacto() {
  const { t } = useLanguage();`);
}

fs.writeFileSync('src/components/Contacto.jsx', codeC);

let codeS = fs.readFileSync('src/components/Servicios.jsx', 'utf8');
codeS = codeS.replace(/<h3 className="text-2xl lg:text-3xl font-bold mb-3">\s*Have a project in mind\?\s*<\/h3>/, `<h3 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('servicios', 'cta', 'title') || '¿Tienes un proyecto en mente?'}
              </h3>`);
codeS = codeS.replace(/<p className="text-blue-100 max-w-xl">\s*Let's talk about how virtual reality can transform the presentation\s*of your architectural projects\.\s*<\/p>/, `<p className="text-blue-100 max-w-xl">
                {t('servicios', 'cta', 'desc') || 'Hablemos sobre cómo la realidad virtual puede transformar la presentación de tus proyectos arquitectónicos.'}
              </p>`);
codeS = codeS.replace(/>\s*Schedule a Call\s*<\/a>/, `>
              {t('servicios', 'cta', 'btn') || 'Programar una llamada'}
            </a>`);

fs.writeFileSync('src/components/Servicios.jsx', codeS);
