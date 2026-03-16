import { Code, Box, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  'Unity 3D / 2D ',
  'Unreal Engine',
  'WebXR / Three.js',
  'React / Next.js',
  'ARKit / ARCore',
  'Blender',
  'C# / C++',
  'Sketchup',

];

export default function SobreMi() {
  const { t, language, tRaw } = useLanguage();
  return (
    <section id="sobre-mi" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#1877f2] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
              {t('sobreMi', 'badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('sobreMi', 'title1')}{' '}
              <span className="gradient-text">{t('sobreMi', 'title2')}</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t('sobreMi', 'p1_1')}{' '}
                <span className="text-gray-900 font-medium">
                  {t('sobreMi', 'p1_2')}
                </span>{' '}
                {t('sobreMi', 'p1_3')}
              </p>
              <p>
                {t('sobreMi', 'p2_1')}{' '}
                <span className="text-gray-900 font-medium">
                  {t('sobreMi', 'p2_2')}
                </span>.
              </p>
              <p>
                {t('sobreMi', 'p3')}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {tRaw(language || 'es', 'sobreMi', 'stats').map((sInfo, i) => { const arr = [
                { icon: Code, ...sInfo },
                { icon: Box, ...sInfo },
                { icon: Award, ...sInfo },
              ]; return arr[i]; }).map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center"
                  >
                    <IconComponent className="w-6 h-6 text-[#1877f2] mx-auto mb-2" />
                    <div className="text-xl font-bold text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills & Visual Column */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/POercilo.jpeg"
                  alt="Erik Villegas"
                  className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Erik Villegas</h3>
                  <p className="text-gray-500">{t('sobreMi', 'role1')}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <GraduationCap className="w-5 h-5 text-[#1877f2]" />
                  <span>{t('sobreMi', 'role2')} </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Code className="w-5 h-5 text-[#1877f2]" />
                  <span>{t('sobreMi', 'role3')}</span>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('sobreMi', 'core')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-[#1877f2] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* {t('sobreMi', 'certs')} */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-500 mb-3">
                {t('sobreMi', 'certs')}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
                  Unity Certified Developer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
                  Meta Spark AR Pro
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
