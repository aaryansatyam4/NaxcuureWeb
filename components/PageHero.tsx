import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  /** Label shown after "Home /" in the breadcrumb */
  crumb?: string;
  /** Focal point used on large screens, where the photo fills a wide frame */
  imagePosition?: string;
  /** Natural width / height of the photo — used on phones so the whole picture is shown, uncropped */
  imageRatio?: number;
}

/**
 * Inner-page hero.
 * - Large screens: full-bleed photo with the title over it.
 * - Phones/tablets: the photo is shown at its natural shape (nothing cut off) with the title below it.
 */
const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage, crumb, imagePosition = 'center', imageRatio = 1.5 }) => {
  const { t } = useLanguage();
  return (
    <section className="frame pt-2 sm:pt-3 lg:pt-4">
      <div className="grain relative isolate overflow-hidden rounded-4xl bg-primary-900 px-3 pb-3 pt-24 sm:px-4 sm:pt-28 lg:flex lg:h-[78svh] lg:max-h-[820px] lg:min-h-[560px] lg:items-end lg:rounded-5xl lg:p-0">
        <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl lg:hidden" />
        <div className="relative overflow-hidden rounded-3xl lg:absolute lg:inset-0 lg:-z-10 lg:rounded-none" style={{ aspectRatio: imageRatio }}>
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover lg:animate-kenburns"
            style={{ objectPosition: imagePosition }}
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25 lg:block" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-primary-900/70 via-primary-900/20 to-transparent lg:block" />

        <div className="w-full px-3 pb-6 pt-8 sm:px-5 lg:mx-auto lg:max-w-[1320px] lg:px-10 lg:pb-16 lg:pt-0">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8 animate-fade-up">
              <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 lg:mb-5">
                <Link to="/" className="transition hover:text-white">{t.nav.home}</Link>
                {crumb && (
                  <>
                    <span className="text-accent">/</span>
                    <span className="text-white/90">{crumb}</span>
                  </>
                )}
              </div>
              <h1 className="display text-[2.1rem] min-[400px]:text-[2.4rem] sm:text-6xl lg:text-7xl xl:text-[5.2rem] text-white text-balance">{title}</h1>
            </div>
            <div className="lg:col-span-4 animate-fade-up [animation-delay:200ms]">
              <p className="border-l-2 border-accent pl-5 text-base font-light leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
