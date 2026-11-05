import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  /** Label shown after "Home /" in the breadcrumb */
  crumb?: string;
  imagePosition?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage, crumb, imagePosition = 'center' }) => {
  const { t } = useLanguage();
  return (
    <section className="frame pt-2 sm:pt-3 lg:pt-4">
      <div className="grain relative isolate flex min-h-[560px] h-[78svh] max-h-[820px] items-end overflow-hidden rounded-4xl lg:rounded-5xl bg-primary-900">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover animate-kenburns"
          style={{ objectPosition: imagePosition }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-900/70 via-primary-900/20 to-transparent" />

        <div className="shell w-full pb-10 sm:pb-14 lg:pb-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 animate-fade-up">
              <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                <Link to="/" className="transition hover:text-white">{t.nav.home}</Link>
                {crumb && (
                  <>
                    <span className="text-accent">/</span>
                    <span className="text-white/90">{crumb}</span>
                  </>
                )}
              </div>
              <h1 className="display text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.2rem] text-white text-balance">{title}</h1>
            </div>
            <div className="lg:col-span-4 animate-fade-up [animation-delay:200ms]">
              <div className="flex gap-4 border-l-2 border-accent pl-5">
                <p className="text-base sm:text-lg font-light leading-relaxed text-white/85">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
