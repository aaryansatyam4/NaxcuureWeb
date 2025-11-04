import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { MegaphoneIcon } from '../components/icons';

const heroSlides = [
    { type: 'video', src: 'https://videos.pexels.com/video-files/4433904/4433904-hd_1920_1080_25fps.mp4' },
    { type: 'image', src: 'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { type: 'image', src: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { type: 'image', src: 'https://images.pexels.com/photos/7174411/pexels-photo-7174411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];


const Announcement = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-gradient-to-r from-primary via-blue-900 to-primary py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                        <MegaphoneIcon className="w-10 h-10 text-accent mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0" />
                        <div>
                            <h2 className="text-lg font-sans font-bold text-accent uppercase tracking-wider">{t.home.announcement.title}</h2>
                            <p className="text-2xl md:text-3xl font-serif text-white mt-1">{t.home.announcement.text}</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

const ContactFormSection = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    <AnimatedSection>
                        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.628882434538!2d-73.98784168459388!3d40.74844097932791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a4c33095%3A0x285f3640266e7c10!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684321543210!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Naxcuure Headquarters Location"
                            ></iframe>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay="200ms">
                         <div>
                            <h2 className="text-4xl md:text-5xl font-serif text-primary">{t.home.contactSection.title}</h2>
                            <p className="mt-4 text-lg text-gray-600 font-sans">{t.home.contactSection.subtitle}</p>
                        </div>
                        <div className="mt-8">
                             <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                                <div>
                                    <label htmlFor="home-name" className="block text-sm font-medium text-gray-700 font-sans mb-1">{t.home.contactSection.formName}</label>
                                    <input type="text" id="home-name" className="mt-1 block w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-sans" />
                                </div>
                                <div>
                                    <label htmlFor="home-email" className="block text-sm font-medium text-gray-700 font-sans mb-1">{t.home.contactSection.formEmail}</label>
                                    <input type="email" id="home-email" className="mt-1 block w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-sans" />
                                </div>
                                <div>
                                    <label htmlFor="home-message" className="block text-sm font-medium text-gray-700 font-sans mb-1">{t.home.contactSection.formMessage}</label>
                                    <textarea id="home-message" rows={5} className="mt-1 block w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-sans"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 font-sans">
                                        {t.home.contactSection.formSubmit}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-light-bg text-gray-800">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                 {heroSlides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {slide.type === 'video' ? (
                             <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                                src={slide.src}
                            />
                        ) : (
                            <div 
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.src})` }}
                            ></div>
                        )}
                    </div>
                ))}
                
                <div className="absolute top-0 left-0 w-full h-full bg-primary/70 z-10"></div>
                <div className="relative z-20 text-center px-4">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{t.home.heroTitle}</h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto font-sans font-light">{t.home.heroSubtitle}</p>
                    </AnimatedSection>
                </div>
            </div>

            {/* Announcement Section */}
            <Announcement />

            {/* Content Sections */}
            <div className="py-24 md:py-32 bg-light-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                             <div className="md:pr-10">
                                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.home.section1Title}</h2>
                                <div className="text-lg text-gray-600 font-sans leading-relaxed space-y-4">
                                    <p>{t.home.section1Text}</p>
                                    <p>{t.home.section1P2}</p>
                                </div>
                            </div>
                            <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Science and Research" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="order-2 md:order-1 md:pl-10">
                                <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.home.section2Title}</h3>
                                <p className="text-lg text-gray-600 font-sans leading-relaxed">{t.home.section2Text}</p>
                            </div>
                            <div className="order-1 md:order-2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Global Presence" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </AnimatedSection>

                     <AnimatedSection>
                         <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                                <div className="w-full h-full">
                                    <iframe 
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/2--c6QPOMmY?si=k1gTzJzL8Yv-yvN-&autoplay=1&mute=1&loop=1&playlist=2--c6QPOMmY&controls=0&modestbranding=1&showinfo=0&rel=0" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                             <div className="md:pl-10">
                                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t.home.section3Title}</h2>
                                <p className="text-lg text-gray-600 font-sans leading-relaxed">{t.home.section3Text}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
            
            {/* Contact Form Section */}
            <ContactFormSection />
        </div>
    );
};

export default Home;