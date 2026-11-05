import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { MapPinIcon, PhoneIcon, MailIcon } from '../components/icons';

const Contact: React.FC = () => {
  const { t, u } = useLanguage();
  const [params] = useSearchParams();
  const product = params.get('product') ?? '';
  const c = t.contact;

  const items = [
    { icon: MapPinIcon, label: u.address, value: c.address, href: 'https://www.google.com/maps/search/?api=1&query=Naxcuure+Healthcare+Pvt.+Ltd.' },
    { icon: PhoneIcon, label: u.phone, value: c.phone, href: `tel:${c.phone.replace(/\s/g, '')}` },
    { icon: MailIcon, label: u.email, value: c.email, href: `mailto:${c.email}` },
  ];

  return (
    <>
      <PageHero title={c.title} subtitle={c.p1} backgroundImage="/images/factory-aerial.webp" crumb={u.contact} />

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <AnimatedSection key={it.label} delay={`${i * 80}ms`}>
              <a
                href={it.href}
                target={it.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group card flex h-full flex-col gap-6 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-primary sm:p-8"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white">
                  <it.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40 transition-colors group-hover:text-white/50">{it.label}</div>
                  <p className="mt-2 font-medium leading-relaxed text-ink transition-colors group-hover:text-white">{it.value}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-7">
            <div className="card h-full p-8 sm:p-12">
              <h2 className="mb-8 text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl">{u.sendMessage}</h2>
              <ContactForm idPrefix="contact" product={product || undefined} defaultMessage={product ? `${u.enquireProduct}: ${product}\n\n` : ''} />
            </div>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay="120ms">
            <div className="h-full min-h-[380px] overflow-hidden rounded-4xl bg-primary-50 ring-1 ring-ink/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.3567747385462!2d72.4614479149002!3d23.320080999785503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c25a04ef22995%3A0x2c486bf920f7be43!2sNaxcuure%20Healthcare%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762334985724!5m2!1sen!2sin"
                className="h-full min-h-[380px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Naxcuure Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
