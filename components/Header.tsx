import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MenuIcon, CloseIcon, GlobeIcon, ChevronDownIcon, ArrowUpRightIcon, PhoneIcon, MailIcon } from './icons';

const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];

const LanguageSwitcher: React.FC<{ solid: boolean }> = ({ solid }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-11 items-center gap-1.5 rounded-full px-4 text-xs font-semibold uppercase tracking-wider transition-colors ${
          solid ? 'bg-ink/5 text-ink hover:bg-ink/10' : 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/20'
        }`}
      >
        <GlobeIcon className="h-4 w-4" />
        {language}
        <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute right-0 top-full mt-2 w-44 origin-top-right overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-ink/5 transition-all duration-200 ${
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
        role="listbox"
      >
        {LANGUAGES.map(({ code, name }) => (
          <button
            key={code}
            role="option"
            aria-selected={language === code}
            onClick={() => {
              setLanguage(code);
              setOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
              language === code ? 'bg-primary-50 font-semibold text-primary' : 'text-ink/75 hover:bg-canvas'
            }`}
          >
            {name}
            <span className="text-[10px] uppercase tracking-wider text-ink/40">{code}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const { t, u } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 400 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 400) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const path = location.pathname.toLowerCase();
  const navItems = [
    { to: '/', label: t.nav.home, active: path === '/' },
    { to: '/about', label: t.nav.about, active: path.startsWith('/about') },
    { to: '/Product', label: t.nav.products, active: path.startsWith('/product') },
    { to: '/quality', label: t.nav.quality, active: path.startsWith('/quality') },
    { to: '/career', label: t.nav.career, active: path.startsWith('/career') },
  ];

  const solid = scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="frame pt-2 sm:pt-3 lg:pt-4">
          <div
            className={`mx-auto flex h-[72px] items-center justify-between gap-4 rounded-full pl-5 pr-2 sm:pl-7 transition-all duration-500 lg:h-20 ${
              solid ? 'mt-1 bg-white/85 shadow-[0_8px_30px_-12px_rgba(15,14,36,0.25)] ring-1 ring-ink/5 backdrop-blur-xl lg:mx-2' : 'bg-transparent'
            }`}
          >
            <Link to="/" aria-label="Naxcuure — Home" className="relative flex h-9 w-[150px] shrink-0 items-center sm:h-10 sm:w-[190px]">
              <img
                src="/images/logo-white.png"
                alt="Naxcuure Healthcare"
                className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ${solid ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src="/images/logo.png"
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ${solid ? 'opacity-100' : 'opacity-0'}`}
              />
            </Link>

            <nav
              className={`hidden items-center gap-1 rounded-full p-1.5 transition-colors duration-500 lg:flex ${
                solid ? 'bg-ink/[0.04]' : 'bg-white/10 ring-1 ring-white/20 backdrop-blur-md'
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 xl:px-5 ${
                    item.active
                      ? solid
                        ? 'bg-ink text-white'
                        : 'bg-white text-ink'
                      : solid
                        ? 'text-ink/70 hover:text-ink'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <LanguageSwitcher solid={solid} />
              </div>
              <Link
                to="/contact"
                className={`group hidden items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5 text-[13px] font-semibold transition-all duration-300 lg:flex ${
                  solid ? 'bg-ink text-white hover:bg-primary' : 'bg-white text-ink hover:bg-accent hover:text-white'
                }`}
              >
                {u.contact}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={u.menu}
                aria-expanded={menuOpen}
                className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
                  solid ? 'bg-ink text-white' : 'bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md'
                }`}
              >
                {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col">
            {[...navItems, { to: '/contact', label: u.contact, active: path.startsWith('/contact') }].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-3xl font-semibold uppercase tracking-tight transition-all duration-500 ${
                  item.active ? 'text-accent' : 'text-white'
                } ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : '0ms' }}
              >
                {item.label}
                <ArrowUpRightIcon className="h-6 w-6 text-white/40" />
              </Link>
            ))}
          </nav>
          <div className="space-y-5">
            <LanguageSwitcherInline />
            <div className="space-y-2 text-sm text-white/60">
              <a href={`tel:${t.home.contactSection.phone.replace(/\s/g, '')}`} className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" /> {t.home.contactSection.phone}
              </a>
              <a href={`mailto:${t.home.contactSection.email}`} className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" /> {t.home.contactSection.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LanguageSwitcherInline: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex flex-wrap gap-2">
      {LANGUAGES.map(({ code, name }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`rounded-full px-4 py-2 text-sm transition-colors ${
            language === code ? 'bg-white text-ink font-semibold' : 'bg-white/10 text-white/80'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Header;
