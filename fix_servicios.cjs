const fs = require('fs');

let c = fs.readFileSync('src/components/Servicios.jsx', 'utf8');

c = c.replace(/const servicios = \[[\s\S]*?\];/g, '');
c = c.replace(`export default function Servicios() {\n  const { t } = useLanguage();`, `export default function Servicios() {\n  const { t, language, tRaw } = useLanguage();\n  const serviciosMap = tRaw(language, "servicios", "items");\n  const icons = [Glasses, Box, Smartphone, Monitor, Sparkles, Users];\n  const servicios = serviciosMap.map((item, id) => ({ ...item, id: id + 1, icon: icons[id] }));`);

fs.writeFileSync('src/components/Servicios.jsx', c);
