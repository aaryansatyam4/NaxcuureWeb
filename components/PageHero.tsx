import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[55vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/80 to-primary/50 z-10"></div>
      <div className="relative z-20 text-center px-4">
        <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-sans font-light">{subtitle}</p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PageHero;