const fs = require('fs');

let codeS = fs.readFileSync('src/components/Servicios.jsx', 'utf8');
codeS = codeS.replace(/Have a project in mind\?/, `{t('servicios', 'cta', 'title')}`);
codeS = codeS.replace(/Let's talk about how virtual reality can transform the presentation\\s*of your architectural projects\./, `{t('servicios', 'cta', 'desc')}`);
codeS = codeS.replace(/>\\s*Schedule a Call\\s*<\/a>/, `>{t('servicios', 'cta', 'btn')}</a>`);
fs.writeFileSync('src/components/Servicios.jsx', codeS);

let codeC = fs.readFileSync('src/components/Contacto.jsx', 'utf8');
codeC = codeC.replace(/>\\s*Contact\\s*<\/span>/, `>{t('contacto', 'badge')}</span>`);
codeC = codeC.replace(/>\\s*Let's talk about your project\\s*<\/h2>/, `>{t('contacto', 'title')}</h2>`);
codeC = codeC.replace(/Have an architectural project you want to take to the next level\?\\s*I'm here to help you create impactful immersive experiences\./, `{t('contacto', 'desc')}`);
codeC = codeC.replace(/>\\s*Contact Information\\s*<\/h3>/, `>{t('contacto', 'infoTitle')}</h3>`);
codeC = codeC.replace(/>\\s*EMAIL\\s*<\/div>/, `>{t('contacto', 'email')}</div>`);
codeC = codeC.replace(/>\\s*WHATSAPP\\s*<\/div>/, `>{t('contacto', 'whatsapp')}</div>`);
codeC = codeC.replace(/>\\s*LOCATION\\s*<\/div>/, `>{t('contacto', 'location')}</div>`);
codeC = codeC.replace(/>\\s*Follow me\\s*<\/h3>/, `>{t('contacto', 'follow')}</h3>`);
codeC = codeC.replace(/>\\s*Send a message\\s*<\/h3>/, `>{t('contacto', 'formTitle')}</h3>`);
codeC = codeC.replace(/>\\s*Name\\s*<\/label>/, `>{t('contacto', 'labelName')}</label>`);
codeC = codeC.replace(/placeholder="Your name"/, `placeholder={t('contacto', 'phName')}`);
codeC = codeC.replace(/>\\s*Email\\s*<\/label>/, `>{t('contacto', 'labelEmail')}</label>`);
codeC = codeC.replace(/placeholder="your@email.com"/, `placeholder={t('contacto', 'phEmail')}`);
codeC = codeC.replace(/>\\s*Message\\s*<\/label>/, `>{t('contacto', 'labelMessage')}</label>`);
codeC = codeC.replace(/placeholder="Tell me about your project..."/, `placeholder={t('contacto', 'phMessage')}`);

if (!codeC.includes('const { t } = useLanguage()')) {
    codeC = codeC.replace(`export default function Contacto() {`, `export default function Contacto() {
  const { t } = useLanguage();`);
}

fs.writeFileSync('src/components/Contacto.jsx', codeC);

let codeL = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');
if (!codeL.includes('cta: {')) {
    codeL = codeL.replace(/hero: \{\s*badge: 'ESPECIALISTA EN XR',/, `hero: {
      badge: 'ESPECIALISTA EN XR',`);
}
fs.writeFileSync('src/context/LanguageContext.jsx', codeL);
