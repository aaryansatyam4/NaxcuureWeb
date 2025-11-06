import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageName, Language } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MenuIcon, CloseIcon, GlobeIcon, ChevronDownIcon } from './icons';

interface HeaderProps {
  currentPage?: PageName;
  setPage?: (page: PageName) => void;
}

const LanguageSwitcher: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 transition-colors focus:outline-none text-black hover:text-gray-700`}
      >
        <GlobeIcon className="w-5 h-5" />
        <span className="hidden md:inline font-sans text-sm font-medium">
          {language.toUpperCase()}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-lg rounded-md shadow-lg z-20 border border-gray-200">
          <ul className="py-1">
            {languages.map(({ code, name }) => (
              <li key={code}>
                <button
                  onClick={() => {
                    setLanguage(code);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-sans ${
                    language === code ? 'text-primary font-semibold' : 'text-gray-800'
                  } hover:bg-gray-100 transition-colors`}
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

const Header: React.FC<HeaderProps> = ({ currentPage: propCurrentPage, setPage: propSetPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  // react-router hooks (used if propSetPage isn't provided)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // map PageName to href path
  const pageToPath = (page: PageName) => {
    switch (page) {
      case 'Home':
        return '/';
      case 'About':
        return '/About';
      case 'Products':
        return '/Product';
      case 'Quality':
        return '/Quality';
      case 'Career':
        return '/Career';
      default:
        return '/';
    }
  };

  const navItems: { page: PageName; label: string }[] = [
    { page: 'Home', label: t.nav.home },
    { page: 'About', label: t.nav.about },
    { page: 'Products', label: t.nav.products },
    { page: 'Quality', label: t.nav.quality },
    { page: 'Career', label: t.nav.career },
  ];

  // determine current page based on props (if provided) or location.pathname
  const resolvedCurrentPage = (() => {
    if (propCurrentPage) return propCurrentPage;
    const path = location.pathname.toLowerCase();
    if (path === '/' || path === '') return 'Home';
    if (path.startsWith('/about')) return 'About';
    if (path.startsWith('/product')) return 'Products';
    if (path.startsWith('/quality')) return 'Quality';
    if (path.startsWith('/career')) return 'Career';
    return 'Home';
  })();

  const handleNavigateTo = (page: PageName) => {
    // prefer propSetPage if provided (backwards compatibility)
    if (propSetPage) {
      propSetPage(page);
    } else {
      const path = pageToPath(page);
      navigate(path);
    }
    // close mobile menu if open
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavLinks = ({
    className = '',
    onLinkClick,
  }: {
    className?: string;
    onLinkClick?: () => void;
  }) => (
    <nav className={className}>
      {navItems.map((item) => {
        const isActive = resolvedCurrentPage === item.page;
        return (
          <button
            key={item.page}
            onClick={() => {
              handleNavigateTo(item.page);
              onLinkClick?.();
            }}
            className={`relative text-base font-sans font-medium transition-colors duration-300 group focus:outline-none px-1 py-1 ${
              isActive
                ? 'text-primary font-semibold'
                : 'text-gray-700 hover:text-black'
            }`}
          >
            {item.label}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigateTo('Home')}
              className="focus:outline-none flex items-center"
              aria-label="Go to home"
            >
              <img
                src="/Logo.png"
                alt="Naxcuure Logo"
                className={`h-12 w-auto object-contain transition-transform duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <NavLinks className="flex items-center space-x-10" />
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-black p-2`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full h-screen shadow-xl">
          <div className="flex flex-col items-center justify-center h-2/3 space-y-10">
            <NavLinks
              className="flex flex-col items-center space-y-8 text-xl"
              onLinkClick={() => setIsMenuOpen(false)}
            />
            <LanguageSwitcher isScrolled={true} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
