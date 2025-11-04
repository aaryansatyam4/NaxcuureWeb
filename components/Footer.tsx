import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageName } from '../types';

interface FooterProps {
  setPage: (page: PageName) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
    const { t } = useLanguage();

    const navItems: { page: PageName; label: string }[] = [
        { page: 'Home', label: t.nav.home },
        { page: 'About', label: t.nav.about },
        { page: 'Products', label: t.nav.products },
        { page: 'Quality', label: t.nav.quality },
        { page: 'Career', label: t.nav.career },
    ];

    return (
        <footer className="bg-primary border-t border-white/10 text-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-4xl font-serif">Naxcuure</h2>
                        <p className="text-gray-400 mt-2 text-sm">Innovating for a Healthier Tomorrow</p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-white tracking-wider uppercase">Navigation</h3>
                            <ul className="mt-4 space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.page}>
                                        <button
                                            onClick={() => setPage(item.page)}
                                            className="text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold text-white tracking-wider uppercase">Legal</h3>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
