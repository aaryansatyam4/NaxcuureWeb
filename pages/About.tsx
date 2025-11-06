import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import FlipCard from '../components/FlipCard';
import { ShieldCheckIcon, LightBulbIcon, UsersIcon, HeartIcon } from '../components/icons';


const About = () => {
  const { t } = useLanguage();
  const valueIcons = [
    <ShieldCheckIcon className="w-8 h-8" />,
    <LightBulbIcon className="w-8 h-8" />,
    <UsersIcon className="w-8 h-8" />,
    <HeartIcon className="w-8 h-8" />,
  ]

  return (
    <div className="bg-light-bg text-gray-800">
      <PageHero 
        title={t.about.title} 
        subtitle="Science, perseverance, and a deep-rooted commitment to human health."
        backgroundImage="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
            <AnimatedSection>
                 <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                     <div className="md:pr-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.about.journeyTitle}</h2>
                        <div className="text-lg text-gray-700 font-sans space-y-6 leading-relaxed">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                        </div>
                    </div>
                    <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <img src="/img4.jpg" />
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection>
                 <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="order-2 md:order-1 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <img src="/img5.jpg" />
                    </div>
                     <div className="order-1 md:order-2 md:pl-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.about.cultureTitle}</h2>
                        <div className="text-lg text-gray-700 font-sans space-y-6 leading-relaxed">
                            <p>{t.about.p3}</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto bg-white p-12 rounded-lg shadow-xl border border-gray-200/60">
                    <div className="text-left">
                        <h2 className="text-3xl font-serif text-primary mb-4">{t.about.missionTitle}</h2>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">{t.about.missionText}</p>
                    </div>
                    <div className="text-left">
                        <h2 className="text-3xl font-serif text-primary mb-4">{t.about.visionTitle}</h2>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">{t.about.visionText}</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-16">{t.about.valuesTitle}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {t.about.values.map((value, index) => (
                        <FlipCard 
                            key={index} 
                            title={value.title} 
                            text={value.text} 
                            icon={valueIcons[index]}
                        />
                    ))}
                </div>
            </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default About;
