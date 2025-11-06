import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary border-t border-white/10 text-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <p className="text-lg font-medium">
                    {t.footer.footer1}
                </p>
                <p className="text-gray-300 mt-2 text-sm">
                    {t.footer.footer2}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
