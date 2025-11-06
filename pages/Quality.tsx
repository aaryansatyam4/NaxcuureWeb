import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import FlipCard from '../components/FlipCard';
import { ShieldCheckIcon, UsersIcon } from '../components/icons';

const Quality = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-light-bg text-gray-800">
      <PageHero 
        title={t.quality.title}
        subtitle="Every pill, every batch, every time."
        backgroundImage="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
            <AnimatedSection>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Quality Control Laboratory" className="w-full h-full object-cover" />
                    </div>
                     <div className="text-lg text-gray-700 font-sans space-y-6 leading-relaxed md:pl-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.quality.stringentStandardsTitle}</h2>
                        <p>{t.quality.p1}</p>
                        <p>{t.quality.p2}</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="order-2 md:order-1 text-lg text-gray-700 font-sans space-y-6 leading-relaxed md:pr-10">
                        <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.quality.section2Title}</h3>
                        <p>{t.quality.section2Text}</p>
                        <p>{t.quality.p3}</p>
                    </div>
                    <div className="order-1 md:order-2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Manufacturing Process" className="w-full h-full object-cover" />
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16">{t.quality.commitmentTitle}</h2>
                <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <FlipCard
                        icon={<ShieldCheckIcon className="w-8 h-8"/>}
                        title={t.quality.patientSafetyTitle}
                        text={t.quality.patientSafetyText}
                    />
                    <FlipCard
                        icon={<UsersIcon className="w-8 h-8"/>}
                        title={t.quality.certificationsTitle}
                        text={t.quality.certificationsText}
                    />
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Quality;
