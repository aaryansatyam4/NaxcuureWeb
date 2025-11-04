import React from 'react';

interface FlipCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
    frontClassName?: string;
    backClassName?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ icon, title, text, frontClassName = 'bg-white', backClassName = 'bg-primary text-white' }) => {
    return (
        <div className="group h-56 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border border-gray-200/60">
                {/* Front */}
                <div className={`absolute inset-0 p-6 rounded-xl flex flex-col items-center justify-center text-center ${frontClassName} [backface-visibility:hidden]`}>
                    <div className="text-primary mb-4 w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                         {icon}
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-primary">{title}</h3>
                </div>
                {/* Back */}
                <div className={`absolute inset-0 p-6 rounded-xl flex flex-col items-center justify-center text-center ${backClassName} [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                    <h3 className="text-2xl font-serif font-semibold mb-3">{title}</h3>
                    <p className="text-base font-sans leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;