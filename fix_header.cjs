const fs = require('fs');

let code = fs.readFileSync('src/components/Header.jsx', 'utf8');

if (!code.includes('useLanguage')) {
    code = code.replace(`import { useState, useEffect } from 'react';`, `import { useState, useEffect } from 'react';\nimport { useLanguage } from '../context/LanguageContext';\nimport { Globe } from 'lucide-react';`);
    code = code.replace(`export default function Header() {`, `export default function Header() {\n  const { language, toggleLanguage, translations } = useLanguage();`);

    code = code.replace(
      /<nav className="hidden md:flex items-center gap-8">[\s\S]*?<\/nav>/,
      `<nav className="hidden md:flex items-center gap-8">
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
                className="text-sm font-medium text-gray-600 hover:text-[#1877f2] transition-colors"
              >
                {translations.nav[key]}
              </a>
            )})}
            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#1877f2] transition-colors ml-4 mr-0">
              <Globe className="w-5 h-5" />
              {language.toUpperCase()}
            </button>
          </nav>`
    );

    code = code.replace(/Hire Me/g, `{translations.nav.hireMe}`);
    
    code = code.replace(
      /<div className="px-4 py-4 bg-white\/95 backdrop-blur-md border-b border-gray-200\/50 space-y-2">[\s\S]*?<div className="pt-2">/,
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
            </button>
          <div className="pt-2">`
    );
}

fs.writeFileSync('src/components/Header.jsx', code);
