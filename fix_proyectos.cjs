const fs = require('fs');

let c = fs.readFileSync('src/components/Proyectos.jsx', 'utf8');

c = c.replace('export default function Proyectos() {\n  const { t } = useLanguage();', `export default function Proyectos() {\n  const { t, language, tRaw } = useLanguage();\n  const proyectosMap = tRaw(language, "proyectos", "items");\n  const proyectos = [\n    { ...proyectosMap[0], icon: Box, gradient: "from-teal-400 to-cyan-500", video: "https://www.youtube.com/embed/i0Odu65Dcks" },\n    { ...proyectosMap[1], icon: Box, gradient: "from-blue-400 to-cyan-500", video: "https://www.youtube.com/embed/8a8RTxNCTfU" }\n  ];`);

fs.writeFileSync('src/components/Proyectos.jsx', c);
