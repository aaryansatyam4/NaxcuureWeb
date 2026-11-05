import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ArrowLink from './ArrowLink';
import { MapPinIcon, PhoneIcon, MailIcon, ArrowUpRightIcon } from './icons';

const Footer: React.FC = () => {
  const { t, u } = useLanguage();
  const c = t.home.contactSection;
  const { pathname } = useLocation();
  // Home and Contact already end with a full contact section — skip the repeat CTA there.
  const showCta = !['/', '/contact'].includes(pathname.toLowerCase());

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/Product', label: t.nav.products },
    { to: '/quality', label: t.nav.quality },
    { to: '/career', label: t.nav.career },
    { to: '/contact', label: u.contact },
  ];

  return (
    <footer className="frame pb-2 sm:pb-3 lg:pb-4">
      <div className="grain relative isolate overflow-hidden rounded-4xl bg-ink text-white lg:rounded-5xl">
        <div className="absolute -left-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/50 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[120px]" />

        <div className={`shell ${showCta ? 'pt-16 sm:pt-20 lg:pt-24' : 'pt-4'}`}>
          {/* CTA */}
          {showCta && (
          <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-5 !text-white/50">
                <span className="eyebrow-dot" /> Naxcuure Healthcare
              </div>
              <h2 className="display text-5xl sm:text-6xl lg:text-8xl">{c.title}</h2>
            </div>
            <div className="space-y-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-white/60">{c.subtitle}</p>
              <ArrowLink to="/contact" variant="light">{u.enquire}</ArrowLink>
            </div>
          </div>
          )}

          {/* Columns */}
          <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
            <div className="lg:col-span-4">
              <img src="/images/logo-white.png" alt="Naxcuure Healthcare" className="h-10 w-auto" loading="lazy" />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">{t.footer.footer2}</p>
            </div>
            <div className="lg:col-span-3">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white">
                      {l.label}
                      <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 text-sm sm:col-span-2 lg:col-span-5">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><MapPinIcon className="h-4 w-4 text-accent" /></span>
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/40">{u.address}</div>
                  <p className="leading-relaxed text-white/75">{c.address}</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex gap-4 group">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-accent"><PhoneIcon className="h-4 w-4 text-accent group-hover:text-white" /></span>
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/40">{u.phone}</div>
                    <span className="text-white/75 group-hover:text-white">{c.phone}</span>
                  </div>
                </a>
                <a href={`mailto:${c.email}`} className="flex gap-4 group">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-accent"><MailIcon className="h-4 w-4 text-accent group-hover:text-white" /></span>
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/40">{u.email}</div>
                    <span className="text-white/75 group-hover:text-white">{c.email}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
          <div className="shell">
            <div
              className="translate-y-[18%] text-center font-display text-[19vw] font-extrabold uppercase leading-none tracking-tightest text-transparent lg:text-[15.5rem]"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
            >
              Naxcuure
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="shell flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Naxcuure Healthcare Pvt. Ltd. {u.rights}</span>
            <span>{t.footer.footer1}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
