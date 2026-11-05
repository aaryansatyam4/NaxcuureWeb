import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ArrowLink from '../components/ArrowLink';
import CategoryCard from '../components/CategoryCard';
import ContactForm from '../components/ContactForm';
import DotGlobe from '../components/DotGlobe';
import { categories } from '../data/categories';
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, MegaphoneIcon, MapPinIcon, PhoneIcon, MailIcon } from '../components/icons';

const SLIDES = [
  { src: '/images/factory-aerial.webp', position: 'center' },
  { src: '/images/factory-front.webp', position: 'center 60%' },
  { src: '/images/team-cphi.webp', position: 'center 40%' },
  { src: '/images/lab-qc.webp', position: 'center' },
];
const SLIDE_MS = 7000;
const HERO_CATEGORIES = ['anti-infective', 'pain-inflammation', 'anti-hypertensive', 'gastrointestinal', 'allergy-respiratory', 'neurology'];

const pad = (n: number) => String(n).padStart(2, '0');

const Hero: React.FC = () => {
  const { t, u, language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => setCurrent((c) => (c + 1) % SLIDES.length), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [current, tick]);

  const go = (dir: number) => {
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);
    setTick((x) => x + 1);
  };

  const chips = HERO_CATEGORIES.map((id) => categories.find((c) => c.id === id)!).filter(Boolean);

  return (
    <section className="frame pt-2 sm:pt-3 lg:pt-4">
      <div className="grain relative isolate h-[100svh] max-h-[980px] min-h-[680px] overflow-hidden rounded-4xl bg-primary-900 lg:rounded-5xl">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== current}
          >
            <img
              src={s.src}
              alt=""
              className={`h-full w-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
              style={{ objectPosition: s.position }}
              fetchPriority={i === 0 ? 'high' : 'low'}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />

        <div className="shell relative flex h-full flex-col justify-between pb-6 pt-32 sm:pb-8 lg:pb-10 lg:pt-40">
          {/* Title + intro */}
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 ring-1 ring-white/20 backdrop-blur-md animate-fade-up">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Naxcuure Healthcare
              </div>
              <h1
                key={language}
                className="display text-[2.9rem] text-white sm:text-7xl lg:text-[5.6rem] xl:text-[6.4rem] text-balance animate-fade-up [animation-delay:120ms]"
              >
                {t.home.heroTitle}
              </h1>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/80 sm:text-lg lg:hidden animate-fade-up [animation-delay:240ms]">
                {t.home.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:320ms]">
                <ArrowLink to="/Product" variant="light">{u.exploreProducts}</ArrowLink>
                <Link
                  to="/about"
                  className="rounded-full px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition hover:bg-white/10"
                >
                  {t.nav.about}
                </Link>
              </div>
            </div>
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:flex lg:flex-col lg:justify-center">
              <p className="text-lg font-light leading-relaxed text-white/85 animate-fade-up [animation-delay:300ms]">{t.home.heroSubtitle}</p>
              {/* Slide counter */}
              <div className="mt-10 flex items-center gap-4 text-xs font-semibold tracking-widest text-white/80">
                <button onClick={() => go(-1)} aria-label={u.prev} className="transition hover:text-accent">
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <span>{pad(current + 1)}</span>
                <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
                  <div
                    key={`${current}-${tick}`}
                    className="absolute inset-0 origin-left bg-white animate-progress"
                    style={{ animationDuration: `${SLIDE_MS}ms` }}
                  />
                </div>
                <span className="text-white/50">{pad(SLIDES.length)}</span>
                <button onClick={() => go(1)} aria-label={u.next} className="transition hover:text-accent">
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom row: category chips + CPHI card */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-wrap gap-2">
              {chips.map((c, i) => (
                <Link
                  key={c.id}
                  to={`/Product?category=${c.id}`}
                  className={`${i === 0 ? 'chip border-white bg-white text-ink hover:bg-accent hover:border-accent hover:text-white' : 'chip-glass'} ${i > 3 ? 'hidden sm:inline-flex' : ''}`}
                >
                  {c.label[language]}
                </Link>
              ))}
            </div>
            <a
              href="#cphi"
              className="group hidden w-[360px] shrink-0 items-center gap-4 rounded-3xl bg-white p-3 pr-5 shadow-2xl transition-transform duration-300 hover:-translate-y-1 xl:flex animate-float"
            >
              <img src="/images/team-cphi.webp" alt="" className="h-20 w-24 rounded-2xl object-cover" loading="lazy" />
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  <MegaphoneIcon className="h-3.5 w-3.5" /> CPHI India 2026
                </div>
                <p className="line-clamp-2 text-sm font-semibold leading-snug text-ink">{t.home.announcement.title}</p>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-hover:-rotate-45 group-hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Announcement: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="cphi" className="shell scroll-mt-28 py-16 sm:py-24">
      <AnimatedSection>
        <div className="relative isolate grid overflow-hidden rounded-4xl bg-primary lg:grid-cols-2 lg:rounded-5xl">
          <div className="absolute -left-20 -top-20 -z-10 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white">
                <MegaphoneIcon className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent-100">{t.home.announcement.title}</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-[2.1rem] text-balance">{t.home.announcement.text}</p>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[440px]">
            <img src="/images/team-cphi.webp" alt="Naxcuure team at CPHI India" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/10 to-transparent lg:via-transparent" />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const Commitment: React.FC = () => {
  const { t, u } = useLanguage();
  return (
    <section className="shell py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <AnimatedSection className="lg:col-span-7">
          <SectionHeading index="01" label={t.nav.about} title={t.home.section1Title} />
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-5 lg:pt-12" delay="120ms">
          <p className="lead">{t.home.section1Text}</p>
        </AnimatedSection>
      </div>

      <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12">
        <AnimatedSection className="lg:col-span-7">
          <div className="group relative h-[340px] overflow-hidden rounded-4xl sm:h-[460px] lg:h-full lg:min-h-[520px]">
            <img src="/images/factory-aerial.webp" alt="Naxcuure manufacturing facility" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <img src="/images/logo-white.png" alt="" className="absolute bottom-7 left-7 h-8 w-auto opacity-90" loading="lazy" />
          </div>
        </AnimatedSection>
        <div className="grid gap-5 lg:col-span-5">
          <AnimatedSection delay="120ms">
            <div className="card p-8 sm:p-10">
              <p className="body">{t.home.section1P2}</p>
              <div className="mt-8">
                <ArrowLink to="/about">{u.learnMore}</ArrowLink>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay="200ms">
            <div className="grid grid-cols-2 gap-5">
              <div className="h-44 overflow-hidden rounded-4xl sm:h-56">
                <img src="/images/lab-research.webp" alt="Research laboratory" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="h-44 overflow-hidden rounded-4xl sm:h-56">
                <img src="/images/lab-digital.webp" alt="Pharmaceutical innovation" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  const { t, u, language } = useLanguage();
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 680), behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <AnimatedSection className="lg:col-span-7">
            <SectionHeading index="02" label={t.nav.products} title={t.products.title} />
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay="120ms">
            <p className="body">{t.products.intro}</p>
          </AnimatedSection>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <ArrowLink to="/Product">{u.exploreProducts}</ArrowLink>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label={u.prev} className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition hover:bg-primary">
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button onClick={() => scroll(1)} aria-label={u.next} className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:bg-ink hover:text-white">
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:scroll-px-8 sm:px-8 lg:scroll-px-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:px-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]"
      >
        {categories.map((c, i) => (
          <CategoryCard key={c.id} id={c.id} label={c.label[language]} index={i} className="w-[78vw] shrink-0 snap-start sm:w-[300px]" />
        ))}
      </div>
    </section>
  );
};

const GlobalPresence: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="frame py-6 sm:py-10">
      <div className="grain relative isolate overflow-hidden rounded-4xl bg-ink lg:rounded-5xl">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[140px]" />
        <div className="shell grid items-center gap-6 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <AnimatedSection>
            <SectionHeading index="03" label="Naxcuure" title={t.home.section2Title} light />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">{t.home.section2Text}</p>
          </AnimatedSection>
          <AnimatedSection delay="150ms" className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[6%] rounded-full ring-1 ring-white/10" />
            <div className="absolute inset-[-2%] rounded-full border border-dashed border-white/10 animate-spinslow" />
            <DotGlobe className="absolute inset-0 h-full w-full" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Purpose: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="shell py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <AnimatedSection className="lg:col-span-6">
          <div className="relative">
            <div className="h-[380px] overflow-hidden rounded-4xl sm:h-[520px]">
              <img src="/images/lab-qc.webp" alt="Quality control laboratory" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-3 hidden h-40 w-56 overflow-hidden rounded-3xl border-[6px] border-canvas shadow-xl sm:block lg:-right-10">
              <img src="/images/factory-wing.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-6" delay="120ms">
          <SectionHeading index="04" label={t.about.missionTitle} title={t.home.section3Title} />
          <p className="lead mt-8">{t.home.section3Text}</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  const { t, u } = useLanguage();
  const c = t.home.contactSection;
  return (
    <section className="shell py-16 sm:py-24">
      <div className="grid gap-5 lg:grid-cols-12">
        <AnimatedSection className="lg:col-span-5">
          <div className="flex h-full flex-col gap-5">
            <div className="card p-8 sm:p-10">
              <SectionHeading index="05" label={u.contact} title={c.title} />
              <p className="body mt-6">{c.subtitle}</p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-50 text-primary"><MapPinIcon className="h-4 w-4" /></span>
                  <p className="leading-relaxed text-ink/70">{c.address}</p>
                </div>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-ink/70 hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-50 text-primary"><PhoneIcon className="h-4 w-4" /></span>
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="flex items-center gap-4 text-ink/70 hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-50 text-primary"><MailIcon className="h-4 w-4" /></span>
                  {c.email}
                </a>
              </div>
            </div>
            <div className="min-h-[260px] flex-1 overflow-hidden rounded-4xl bg-primary-50 ring-1 ring-ink/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.3567747385462!2d72.4614479149002!3d23.320080999785503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c25a04ef22995%3A0x2c486bf920f7be43!2sNaxcuure%20Healthcare%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762334985724!5m2!1sen!2sin"
                className="h-full min-h-[260px] w-full grayscale-[35%]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Naxcuure Headquarters Location"
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-7" delay="120ms">
          <div className="card h-full p-8 sm:p-12">
            <h3 className="mb-8 text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl">{u.sendMessage}</h3>
            <ContactForm idPrefix="home" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Home: React.FC = () => (
  <>
    <Hero />
    <Announcement />
    <Commitment />
    <Portfolio />
    <GlobalPresence />
    <Purpose />
    <ContactSection />
  </>
);

export default Home;
