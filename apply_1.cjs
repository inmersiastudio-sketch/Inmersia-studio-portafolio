const fs = require('fs');
const path = require('path');

// Helper
const updateFile = (filePath, replacer) => {
  const code = fs.readFileSync(filePath, 'utf8');
  const newCode = replacer(code);
  if (code !== newCode) {
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

// App.jsx
updateFile('src/App.jsx', (code) => {
  if (!code.includes('LanguageProvider')) {
    code = `import { LanguageProvider } from './context/LanguageContext';\n` + code;
    code = code.replace('<div className="min-h-screen bg-[#FAFAF9]">', '<LanguageProvider>\n      <div className="min-h-screen bg-[#FAFAF9]">');
    code = code.replace('</div>\n    </>', '</div>\n      </LanguageProvider>\n    </>');
  }
  return code;
});

// Header.jsx
updateFile('src/components/Header.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    code = code.replace(`import { useState, useEffect } from 'react';`, `import { useState, useEffect } from 'react';\nimport { useLanguage } from '../context/LanguageContext';\nimport { Globe } from 'lucide-react';`);
    code = code.replace(`export default function Header() {`, `export default function Header() {\n  const { language, toggleLanguage, translations } = useLanguage();`);
    
    // Replace navLinks dynamically
    code = code.replace(
      `{navLinks.map((link) => (`,
      `{/* Desktop Navigation */}\n          <nav className="hidden md:flex items-center gap-8">\n            {Object.keys(translations.nav).filter(k => k !== 'contact' && k !== 'hireMe').map((key) => {\n              const hrefMap = { home: '#hero', about: '#sobre-mi', projects: '#proyectos', services: '#servicios' };\n              return (\n              <a\n                key={key}\n                href={hrefMap[key]}\n                onClick={(e) => {\n                  e.preventDefault();\n                  scrollToSection(hrefMap[key]);\n                }}\n                className="text-sm font-medium text-gray-600 hover:text-[#1877f2] transition-colors"\n              >\n                {translations.nav[key]}\n              </a>\n            )})}\n          </nav>`
    );
    
    // Remote the old navLinks map
    code = code.replace(/<nav className="hidden md:flex items-center gap-8">[\s\S]*?<\/nav>/, '');
    
    // Add Language button
    const langBtn = `
          {/* Language Toggle */}
          <button onClick={toggleLanguage} className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#1877f2] transition-colors ml-4 mr-0">
            <Globe className="w-5 h-5" />
            {language.toUpperCase()}
          </button>
    `;
    code = code.replace(`{/* CTA Button Desktop */}`, `${langBtn}\n          {/* CTA Button Desktop */}`);
    
    // Hire Me desktop
    code = code.replace(/Hire Me/g, `{translations.nav.hireMe}`);
    
    // Mobile Links
    code = code.replace(
      `<div className="px-4 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200/50 space-y-2">`,
      `<div className="px-4 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200/50 space-y-2">
          {Object.keys(translations.nav).filter(k => k !== 'contact' && k !== 'hireMe').map((key) => {
              const hrefMap = { home: '#hero', about: '#sobre-mi', projects: '#proyectos', services: '#servicios' };
              return (
              <a
                key={key}
                href={hrefMap[key]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(hrefMap[key]);
                }}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1877f2] hover:bg-blue-50 rounded-lg transition-all"
              >
                {translations.nav[key]}
              </a>
            )})}
            <button onClick={toggleLanguage} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1877f2] hover:bg-blue-50 rounded-lg transition-all">
              {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>`
    );
    code = code.replace(/\{navLinks\.map\(\(link\) => \([\s\S]*?\}\)/, ''); // Remove the old mapping block
  }
  return code;
});

// Hero.jsx
updateFile('src/components/Hero.jsx', (code) => {
  if (!code.includes('useLanguage')) {
    code = code.replace(`import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';`, `import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';\nimport { useLanguage } from '../context/LanguageContext';`);
    code = code.replace(`export default function Hero() {`, `export default function Hero() {\n  const { t } = useLanguage();`);
    
    code = code.replace(`Next-Gen Visualization`, `{t('hero', 'badge')}`);
    code = code.replace(/Designing Future\s*\{\' \'\}\s*<span[\s\S]*?Realities\s*<\/span>\{\' \'\}\s*for Architects/m, 
      `{t('hero', 'title1')}{' '}
              <span className="bg-gradient-to-r from-[#1877f2] via-[#A197FF] to-[#1877f2] bg-clip-text text-transparent">
                {t('hero', 'title2')}
              </span>{' '}
              {t('hero', 'title3')}`
    );
    code = code.replace(/Specializing in high-end VR\/AR experiences[\s\S]*?cutting-edge technology\./m, `{t('hero', 'description')}`);
    code = code.replace(`View Portfolio`, `{t('hero', 'portfolio')}`);
    code = code.replace(`Get a Quote`, `{t('hero', 'quote')}`);
    code = code.replace(`Projects</div>`, `{t('hero', 'stats').projects}</div>`);
    code = code.replace(`Clients</div>`, `{t('hero', 'stats').clients}</div>`);
    code = code.replace(`Years</div>`, `{t('hero', 'stats').years}</div>`);
  }
  return code;
});

console.log("Translation injection step 1 done.");
