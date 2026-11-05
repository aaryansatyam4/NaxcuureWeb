import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { TrendingUpIcon, HeartIcon, BookIcon, UsersIcon, AwardIcon, SparkleIcon, BriefcaseIcon, MapPinIcon, ArrowUpRightIcon } from '../components/icons';

const BENEFIT_ICONS = [TrendingUpIcon, HeartIcon, BookIcon, UsersIcon, AwardIcon, SparkleIcon];

const Career: React.FC = () => {
  const { t } = useLanguage();
  const c = t.career;

  return (
    <>
      <PageHero title={c.title} subtitle={c.heroSubtitle} backgroundImage="/images/team-cphi.webp" crumb={t.nav.career} imagePosition="center 35%" />

      {/* Intro */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection className="lg:col-span-5">
            <SectionHeading index="01" label={t.nav.career} title={c.introTitle} />
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7" delay="120ms">
            <p className="text-xl font-medium leading-relaxed text-ink sm:text-2xl lg:pt-10">{c.introText}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Life at Naxcuure */}
      <section className="shell pb-16 sm:pb-24">
        <div className="grid gap-5 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-5">
            <div className="relative isolate flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-4xl p-8 sm:p-10">
              <img src="/images/career-team.webp" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-900/95 via-primary-900/30 to-transparent" />
              <h2 className="display text-4xl text-white sm:text-5xl">{c.benefitsTitle}</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {c.benefits.map((b, i) => {
              const Ico = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <AnimatedSection key={b} delay={`${i * 70}ms`}>
                  <div className="group card flex h-full items-start gap-5 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-primary sm:p-7">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-50 text-accent transition-colors group-hover:bg-white/15 group-hover:text-white">
                      <Ico className="h-5 w-5" />
                    </span>
                    <p className="pt-1 text-base font-semibold leading-snug text-ink transition-colors group-hover:text-white">{b}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="shell pb-24 sm:pb-32">
        <AnimatedSection>
          <SectionHeading index="02" label={t.nav.career} title={c.openingsTitle} />
        </AnimatedSection>
        <div className="mt-12 space-y-4">
          {c.jobs.map((job, i) => (
            <AnimatedSection key={job.id} delay={`${i * 80}ms`}>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex flex-col gap-6 p-7 transition-all duration-500 hover:bg-ink sm:p-9 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary transition-colors group-hover:bg-white/10 group-hover:text-accent">
                    <BriefcaseIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-white sm:text-2xl">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm">
                      <span className="rounded-full bg-canvas px-3 py-1 text-ink/60 transition-colors group-hover:bg-white/10 group-hover:text-white/70">{job.department}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-canvas px-3 py-1 text-ink/60 transition-colors group-hover:bg-white/10 group-hover:text-white/70">
                        <MapPinIcon className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors group-hover:bg-white group-hover:text-ink md:self-center">
                  {c.openingsButton}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default Career;
