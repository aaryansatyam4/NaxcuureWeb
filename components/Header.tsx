import React, { useState, useEffect } from 'react';
import { PageName, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MenuIcon, CloseIcon, GlobeIcon, ChevronDownIcon } from './icons';

interface HeaderProps {
  currentPage: PageName;
  setPage: (page: PageName) => void;
}

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
        <GlobeIcon className="w-5 h-5" />
        <span className="hidden md:inline font-sans text-sm font-medium">{language.toUpperCase()}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-primary/80 backdrop-blur-lg rounded-md shadow-lg z-20 border border-white/20">
          <ul className="py-1">
            {languages.map(({ code, name }) => (
              <li key={code}>
                <button
                  onClick={() => {
                    setLanguage(code);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-sans ${language === code ? 'text-accent' : 'text-white'} hover:bg-white/10 transition-colors`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: PageName; label: string }[] = [
    { page: 'Home', label: t.nav.home },
    { page: 'About', label: t.nav.about },
    { page: 'Products', label: t.nav.products },
    { page: 'Quality', label: t.nav.quality },
    { page: 'Career', label: t.nav.career },
  ];

  const NavLinks = ({
    className = "",
    onLinkClick
  }: {
    className?: string;
    onLinkClick?: () => void;
  }) => (
    <nav className={className}>
      {navItems.map((item) => (
        <button
          key={item.page}
          onClick={() => { setPage(item.page); onLinkClick?.(); }}
          className={`relative text-base font-sans font-medium transition-colors duration-300 group ${currentPage === item.page ? 'text-white' : 'text-gray-300 hover:text-white'}`}
        >
          {item.label}
          <span
            className={`absolute bottom-[-5px] left-0 h-[2px] bg-accent transition-all duration-300 ${
              currentPage === item.page ? 'w-1/2' : 'w-0 group-hover:w-1/2'
            }`}
          ></span>
        </button>
      ))}
    </nav>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
             <button onClick={() => setPage('Home')} className="text-white text-4xl font-serif">
              Naxcuure
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10">
             <NavLinks className="flex items-center space-x-10" />
             <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-xl absolute top-full left-0 w-full h-screen">
            <div className="flex flex-col items-center justify-center h-2/3 space-y-10">
              <NavLinks className="flex flex-col items-center space-y-8 text-xl" onLinkClick={() => setIsMenuOpen(false)} />
              <LanguageSwitcher />
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
