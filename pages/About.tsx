import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { ShieldCheckIcon, LightBulbIcon, UsersIcon, HeartIcon, SparkleIcon, TrendingUpIcon } from '../components/icons';

const VALUE_ICONS = [ShieldCheckIcon, LightBulbIcon, UsersIcon, HeartIcon];

const About: React.FC = () => {
  const { t, u } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero title={a.title} subtitle={u.aboutHeroSubtitle} backgroundImage="/images/factory-sign.webp" crumb={t.nav.about} imagePosition="center 40%" />

      {/* Journey */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <AnimatedSection>
              <SectionHeading index="01" label="Naxcuure" title={a.journeyTitle} />
            </AnimatedSection>
            <AnimatedSection delay="100ms">
              <p className="mt-10 text-xl font-medium leading-relaxed text-ink sm:text-2xl">{a.p1}</p>
              <p className="body mt-6">{a.p2}</p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="lg:col-span-6" delay="150ms">
            <div className="relative h-full min-h-[420px] sm:min-h-[560px]">
              <div className="absolute inset-0 right-[18%] overflow-hidden rounded-4xl">
                <img src="/images/factory-front.webp" alt="Naxcuure facility" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute bottom-[-6%] right-0 h-[45%] w-[48%] overflow-hidden rounded-4xl border-[6px] border-canvas shadow-2xl">
                <img src="/images/factory-wing.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute right-[6%] top-[8%] hidden h-24 w-24 place-items-center rounded-full bg-accent text-white shadow-xl sm:grid animate-float">
                <SparkleIcon className="h-9 w-9" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture — full-bleed photo */}
      <section className="frame py-4 sm:py-8">
        <AnimatedSection>
          <div className="relative isolate flex min-h-[560px] items-end overflow-hidden rounded-4xl lg:min-h-[680px] lg:rounded-5xl">
            <img src="/images/team-cphi.webp" alt="The Naxcuure team" className="absolute inset-0 -z-10 h-full w-full object-cover" style={{ objectPosition: 'center 35%' }} loading="lazy" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
            <div className="shell grid gap-8 pb-10 sm:pb-14 lg:grid-cols-12 lg:items-end lg:pb-16">
              <div className="lg:col-span-6">
                <SectionHeading index="02" label="Naxcuure" title={a.cultureTitle} light />
              </div>
              <p className="text-lg leading-relaxed text-white/80 lg:col-span-6">{a.p3}</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission & Vision */}
      <section className="shell py-16 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          <AnimatedSection>
            <article className="grain relative isolate h-full overflow-hidden rounded-4xl bg-primary p-8 text-white sm:p-12">
              <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
              <div className="mb-10 flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10"><TrendingUpIcon className="h-6 w-6 text-accent" /></span>
                <span className="font-display text-7xl font-bold leading-none text-white/10">01</span>
              </div>
              <h2 className="text-3xl font-semibold uppercase tracking-tight sm:text-4xl">{a.missionTitle}</h2>
              <p className="mt-6 text-base leading-[1.8] text-white/75 sm:text-[17px]">{a.missionText}</p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay="120ms">
            <article className="card relative h-full overflow-hidden p-8 sm:p-12">
              <div className="mb-10 flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-50"><LightBulbIcon className="h-6 w-6 text-accent" /></span>
                <span className="font-display text-7xl font-bold leading-none text-ink/[0.06]">02</span>
              </div>
              <h2 className="text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">{a.visionTitle}</h2>
              <p className="body mt-6">{a.visionText}</p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Core values */}
      <section className="shell py-16 sm:py-24">
        <AnimatedSection>
          <SectionHeading index="03" label="Naxcuure" title={a.valuesTitle} center className="max-w-3xl" />
        </AnimatedSection>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => {
            const Ico = VALUE_ICONS[i % VALUE_ICONS.length];
            return (
              <AnimatedSection key={v.title} delay={`${i * 90}ms`}>
                <div className="group card relative flex h-full flex-col overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-ink">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-50 text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                      <Ico className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-ink/30 transition-colors group-hover:text-white/40">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold uppercase tracking-tight text-ink transition-colors group-hover:text-white">{v.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/60 transition-colors group-hover:text-white/70">{v.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Leadership */}
      <section className="shell py-16 sm:py-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rotate-[-3deg] rounded-[2.5rem] bg-gradient-to-br from-accent to-primary opacity-90" />
              <div className="aspect-[4/5] overflow-hidden rounded-4xl bg-primary-50">
                <img src="/images/directors.webp" alt="Directors of Naxcuure Healthcare" className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7" delay="120ms">
            <SectionHeading index="04" label={t.nav.about} title={a.leadershipTitle} />
            <p className="mt-10 text-xl font-medium leading-relaxed text-ink sm:text-2xl">{a.leadershipText1}</p>
            <p className="body mt-6">{a.leadershipText2}</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
