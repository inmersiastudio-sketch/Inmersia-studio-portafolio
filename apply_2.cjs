const fs = require('fs');

const updateFile = (filePath, replacer) => {
  const code = fs.readFileSync(filePath, 'utf8');
  const newCode = replacer(code);
  if (code !== newCode) {
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

// Proyectos.jsx
updateFile('src/components/Proyectos.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    code = code.replace(`import { ExternalLink, Box, Monitor, Smartphone, Eye, X } from 'lucide-react';`, `import { ExternalLink, Box, Monitor, Smartphone, Eye, X } from 'lucide-react';\nimport { useLanguage } from '../context/LanguageContext';`);
    code = code.replace(`export default function Proyectos() {`, `export default function Proyectos() {\n  const { t } = useLanguage();`);
    
    code = code.replace(`Portfolio\n          </span>`, `{t('proyectos', 'badge')}\n          </span>`);
    code = code.replace(`Featured Projects\n          </h2>`, `{t('proyectos', 'title')}\n          </h2>`);
    code = code.replace(/A selection of immersive experiences developed for architecture studios,\s*real estate developers, and design brands\./m, `{t('proyectos', 'description')}`);
    code = code.replace(`View All Projects`, `{t('proyectos', 'viewAll')}`);
    code = code.replace(`View\n                      <ExternalLink className="w-4 h-4" />`, `{t('proyectos', 'view')}\n                      <ExternalLink className="w-4 h-4" />`);
  }
  return code;
});

// Servicios.jsx
updateFile('src/components/Servicios.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    // Servicios array contains hardcoded text, let's leave it as is or change main titles
    code = code.replace(`import { Glasses, Box, Smartphone, Monitor, Sparkles, Users } from 'lucide-react';`, `import { Glasses, Box, Smartphone, Monitor, Sparkles, Users } from 'lucide-react';\nimport { useLanguage } from '../context/LanguageContext';`);
    code = code.replace(`export default function Servicios() {`, `export default function Servicios() {\n  const { t } = useLanguage();`);
    
    code = code.replace(`Expertise\n          </span>`, `{t('servicios', 'badge')}\n          </span>`);
    code = code.replace(`Visualization & Development Services\n          </h2>`, `{t('servicios', 'title')}\n          </h2>`);
    code = code.replace(/We provide end-to-end solutions from photorealistic rendering\s*to fully interactive VR applications\./m, `{t('servicios', 'description')}`);
  }
  return code;
});

// SobreMi.jsx
updateFile('src/components/SobreMi.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    code = code.replace(`import { Code, Box, Award, GraduationCap } from 'lucide-react';`, `import { Code, Box, Award, GraduationCap } from 'lucide-react';\nimport { useLanguage } from '../context/LanguageContext';`);
    code = code.replace(`export default function SobreMi() {`, `export default function SobreMi() {\n  const { t } = useLanguage();`);
    
    code = code.replace(`About Us\n            </span>`, `{t('sobreMi', 'badge')}\n            </span>`);
    code = code.replace(`Elevating Design through Technology\n            </h2>`, `{t('sobreMi', 'title')}\n            </h2>`);
    code = code.replace(/At ARCHVR Studio, we combine architectural design principles\s*with advanced software development to create unforgettable spatial\s*experiences\./m, `{t('sobreMi', 'description')}`);
    code = code.replace(`Download CV / Portfolio`, `{t('sobreMi', 'button')}`);
  }
  return code;
});

// Contacto.jsx
updateFile('src/components/Contacto.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    code = code.replace(`import { useState } from 'react';`, `import { useState } from 'react';\nimport { useLanguage } from '../context/LanguageContext';`);
    code = code.replace(`export default function Contacto() {`, `export default function Contacto() {\n  const { t } = useLanguage();`);
    
    code = code.replace(`Get in touch\n          </span>`, `{t('contacto', 'badge')}\n          </span>`);
    code = code.replace(`Ready to Build the Future?\n          </h2>`, `{t('contacto', 'title')}\n          </h2>`);
    code = code.replace(/Tell us about your next architectural project and let's see how VR\s*can elevate your presentations\./m, `{t('contacto', 'description')}`);
    
    // Form placeholders
    code = code.replace(/placeholder="Name"/g, 'placeholder={t("contacto", "form").name}');
    code = code.replace(/placeholder="Email"/g, 'placeholder={t("contacto", "form").email}');
    code = code.replace(/placeholder="Tell us about your project..."/g, 'placeholder={t("contacto", "form").message}');
    code = code.replace(`Send Message`, `{t('contacto', 'form').send}`);
    
    // Info
    code = code.replace(`Contact Information\n              </h3>`, `{t('contacto', 'info').title}\n              </h3>`);
    code = code.replace(`Chat with us`, `{t('contacto', 'info').chat}`);
    code = code.replace(`Email us`, `{t('contacto', 'info').email}`);
    code = code.replace(`Location`, `{t('contacto', 'info').location}`);
  }
  return code;
});

// Footer.jsx
updateFile('src/components/Footer.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    code = code.replace(`import { Glasses, Heart, ArrowUp, Instagram } from 'lucide-react';`, `import { Glasses, Heart, ArrowUp, Instagram } from 'lucide-react';\nimport { useLanguage } from '../context/LanguageContext';`);
    code = code.replace(`export default function Footer() {`, `export default function Footer() {\n  const { t } = useLanguage();`);
    
    code = code.replace(/Crafting next-generation experiences that bridge architecture\s*and virtual reality\./m, `{t('footer', 'description')}`);
    code = code.replace(`Quick Links</h3>`, `{t('footer', 'quickLinks')}</h3>`);
    code = code.replace(`Services</h3>`, `{t('footer', 'services')}</h3>`);
    code = code.replace(`Connect</h3>`, `{t('footer', 'connect')}</h3>`);
    code = code.replace(/\{new Date\(\)\.getFullYear\(\)\} ARCHVR Studio\. All rights reserved\./m, `{new Date().getFullYear()} ARCHVR Studio. {t('footer', 'rights')}`);
    
    // Map links to translated version for nav
    code = code.replace(
      `{footerLinks.navigation.map((link) => (`,
      `{footerLinks.navigation.map((link) => {
                const mapKey = link.name.toLowerCase().replace(' ', '');
                const keys = {home: 'home', about: 'about', projects: 'projects', services: 'services', contact: 'contact'};
                return (`
    );
    code = code.replace(
      `{link.name}\n                  </a>\n                </li>\n              ))}`,
      `{t('nav', keys[mapKey] || link.name) || link.name}\n                  </a>\n                </li>\n              );})}`
    );
  }
  return code;
});

console.log("Translation injection step 2 done.");
