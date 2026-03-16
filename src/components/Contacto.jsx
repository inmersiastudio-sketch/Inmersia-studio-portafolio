import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Send, MessageCircle, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const WHATSAPP_NUMBER = '3517018328';
const WHATSAPP_MESSAGE = 'Hi, I saw your portfolio and I\'m interested in talking about a VR/AR project.';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/tuusuario' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/tuusuario' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/inmersia_studio' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/tuusuario' },
];

export default function Contacto() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="relative py-20 lg:py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#1877f2] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877f2]"></span>
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's talk about your project
          </h2>
          <p className="text-lg text-gray-600">
            Have an architectural project you want to take to the next level?
            I'm here to help you create impactful immersive experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:inmersiastudio@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1877f2]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                    <div className="text-gray-900 font-medium">inmersiastudio@gmail.com</div>
                  </div>
                </a>

                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-green-600 uppercase tracking-wide">WhatsApp</div>
                    <div className="text-gray-900 font-medium">+54 9 3517018328</div>
                  </div>
                </button>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1877f2]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{t('contacto', 'info').location}</div>
                    <div className="text-gray-900 font-medium">Remote / Cordoba Capital</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-500 mb-4">
                Follow me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877f2] hover:text-white transition-all"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('contacto', 'form').send}
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="btn-secondary gap-2 border-green-300 text-green-600 hover:bg-green-50 hover:border-green-400"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
