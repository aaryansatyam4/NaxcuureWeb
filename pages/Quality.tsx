import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { ShieldCheckIcon, AwardIcon, MicroscopeIcon } from '../components/icons';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';

const fda = videos.find((v) => v.tag === 'fda')!;

const Quality: React.FC = () => {
  const { t, u } = useLanguage();
  const q = t.quality;

  return (
    <>
      <PageHero title={q.title} subtitle={u.qualityHeroSubtitle} backgroundImage="/images/lab-qc.webp" crumb={t.nav.quality} imageRatio={16 / 9} />

      {/* Stringent standards */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-4xl lg:aspect-auto lg:h-[560px]">
                <img src="/images/lab-research.webp" alt="Quality control laboratory" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-3xl bg-white p-4 pr-6 shadow-2xl sm:left-10 animate-float">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-white"><ShieldCheckIcon className="h-6 w-6" /></span>
                <span className="text-sm font-semibold uppercase tracking-wide text-ink">{q.patientSafetyTitle}</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2 lg:col-span-6" delay="120ms">
            <SectionHeading index="01" label={t.nav.quality} title={q.stringentStandardsTitle} />
            <p className="mt-10 text-xl font-medium leading-relaxed text-ink sm:text-2xl">{q.p1}</p>
            <p className="body mt-6">{q.p2}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Advanced quality systems */}
      <section className="frame py-4 sm:py-8">
        <div className="grain relative isolate overflow-hidden rounded-4xl bg-ink lg:rounded-5xl">
          <div className="absolute -left-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/50 blur-[130px]" />
          <div className="shell grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <AnimatedSection className="lg:col-span-7">
              <SectionHeading index="02" label={t.nav.quality} title={q.section2Title} light />
              <p className="mt-10 text-lg leading-relaxed text-white/75">{q.section2Text}</p>
              <p className="mt-6 text-base leading-[1.8] text-white/55">{q.p3}</p>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay="150ms">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-4xl">
                  <img src="/images/lab-digital.webp" alt="Advanced quality systems" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <span className="absolute -right-3 -top-3 grid h-24 w-24 place-items-center rounded-full bg-accent text-white shadow-2xl animate-spinslow [animation-duration:30s]">
                  <MicroscopeIcon className="h-9 w-9" />
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FDA video */}
      <section className="shell pt-16 sm:pt-24 lg:pt-32">
        <AnimatedSection>
          <div className="eyebrow mb-6">
            <span className="eyebrow-dot" />
            <span>{u.videos}</span> / <span className="text-ink">FDA</span>
          </div>
          <VideoCard id={fda.id} label="FDA" playLabel={u.playVideo} className="mx-auto max-w-5xl" />
        </AnimatedSection>
      </section>

      {/* Quality promise */}
      <section className="shell py-16 sm:py-24 lg:py-32">
        <AnimatedSection>
          <SectionHeading index="03" label={t.nav.quality} title={q.commitmentTitle} center className="max-w-4xl" />
          <p className="lead mx-auto mt-8 max-w-3xl text-center">{q.commitmentText}</p>
        </AnimatedSection>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <AnimatedSection>
            <article className="group card relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 sm:p-12">
              <ShieldCheckIcon className="absolute -right-10 -top-10 h-56 w-56 text-primary/[0.05]" strokeWidth={1} />
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-white"><ShieldCheckIcon className="h-7 w-7" /></span>
              <h3 className="mt-10 text-3xl font-semibold uppercase tracking-tight text-ink">{q.patientSafetyTitle}</h3>
              <p className="body mt-5">{q.patientSafetyText}</p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay="120ms">
            <article className="grain relative isolate h-full overflow-hidden rounded-4xl bg-gradient-to-br from-accent to-[#C95C08] p-8 text-white sm:p-12">
              <AwardIcon className="absolute -right-10 -top-10 -z-10 h-56 w-56 text-white/10" strokeWidth={1} />
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-accent"><AwardIcon className="h-7 w-7" /></span>
              <h3 className="mt-10 text-3xl font-semibold uppercase tracking-tight">{q.certificationsTitle}</h3>
              <p className="mt-5 text-base leading-[1.8] text-white/85 sm:text-[17px]">{q.certificationsText}</p>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Quality;
