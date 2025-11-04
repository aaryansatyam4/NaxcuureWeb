import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const Career = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-light-bg">
      <PageHero 
        title={t.career.title}
        subtitle={t.career.heroSubtitle}
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.career.introTitle}</h2>
                    <p className="text-lg text-gray-700 font-sans leading-relaxed">{t.career.introText}</p>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                         <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team collaborating" className="w-full h-full object-cover"/>
                    </div>
                    <div className="md:pl-10">
                         <h3 className="text-3xl font-serif text-primary mb-6">{t.career.benefitsTitle}</h3>
                         <ul className="space-y-4">
                            {t.career.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center font-sans text-lg text-gray-800">
                                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-12">{t.career.openingsTitle}</h2>
                    <div className="space-y-6">
                        {t.career.jobs.map((job) => (
                            <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200/60 flex flex-col md:flex-row justify-between items-start md:items-center transition-shadow hover:shadow-xl">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-2xl font-serif text-primary">{job.title}</h3>
                                    <p className="font-sans text-gray-600 mt-1">{job.department} &middot; {job.location}</p>
                                </div>
                                <button className="font-sans text-base font-semibold text-white bg-primary hover:bg-accent px-6 py-3 rounded-md transition-colors duration-300 flex-shrink-0">
                                    {t.career.openingsButton}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Career;
