import { Mail, Phone, Linkedin } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sbrsharan@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 88282-76595',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sabarisharan-surendra-264433280',
  },
];

export default function Contact() {
  return (
    <section className="bg-bg pt-24 pb-16 md:pt-20 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text mb-3 md:mb-4">Contact</h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-10">Looking forward to hearing from you</p>
            <div className="space-y-6 md:space-y-8">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <div>
                    <p className="font-bold text-text text-sm">{item.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 w-full">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Feel free to reach out through any of the channels on the left. I'm always
                open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
