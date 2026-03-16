const fs = require('fs');
let code = fs.readFileSync('src/components/SobreMi.jsx', 'utf8');

code = code.replace(`About Me`, `{t('sobreMi', 'badge')}`);
code = code.replace(`Developer passionate about the{' '}`, `{t('sobreMi', 'title1')}{' '}`);
code = code.replace(`future of architecture`, `{t('sobreMi', 'title2')}`);
code = code.replace(/I'm a full-stack developer specialized in\{' '\}\s*<span className="text-gray-900 font-medium">\s*virtual and augmented reality experiences\s*<\/span>\{' '\}\s*for the architectural sector\. I combine my software development background\s*with a deep understanding of the architectural design process\./m, `{t('sobreMi', 'p1_1')}{' '}
                <span className="text-gray-900 font-medium">
                  {t('sobreMi', 'p1_2')}
                </span>{' '}
                {t('sobreMi', 'p1_3')}`);

code = code.replace(/I create immersive experiences that\{' '\}\s*<span className="text-gray-900 font-medium">\s*transform the way projects are presented and sold\s*<\/span>\./m, `{t('sobreMi', 'p2_1')}{' '}
                <span className="text-gray-900 font-medium">
                  {t('sobreMi', 'p2_2')}
                </span>.`);

code = code.replace(/My focus is on creating accessible, high visual impact technological\s*solutions that allow end clients to experience spaces intuitively\s*and memorably\./m, `{t('sobreMi', 'p3')}`);

code = code.replace(`{[`, `{tRaw(language || 'es', 'sobreMi', 'stats').map((sInfo, i) => { const arr = [`);
code = code.replace(`{ icon: Code, label: '3+ years', desc: 'XR Development' },`, `{ icon: Code, ...sInfo },`);
code = code.replace(`{ icon: Box, label: '5+', desc: 'Projects Delivered' },`, `{ icon: Box, ...sInfo },`);
code = code.replace(`{ icon: Award, label: '100%', desc: 'Client Satisfaction' },`, `{ icon: Award, ...sInfo },`);
code = code.replace(/]\.map\(\(item, index\)/, `]; return arr[i]; }).map((item, index)`);

code = code.replace(`XR Developer & 3D Specialist`, `{t('sobreMi', 'role1')}`);
code = code.replace(`Systems Engineer`, `{t('sobreMi', 'role2')}`);
code = code.replace(`Full-stack Developer specialized in XR`, `{t('sobreMi', 'role3')}`);

code = code.replace(`Core Technologies`, `{t('sobreMi', 'core')}`);
code = code.replace(`Certifications`, `{t('sobreMi', 'certs')}`);

if (!code.includes('language, tRaw')) {
    code = code.replace(`const { t } = useLanguage();`, `const { t, language, tRaw } = useLanguage();`);
}

fs.writeFileSync('src/components/SobreMi.jsx', code);
