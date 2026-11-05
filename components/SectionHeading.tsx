import React from 'react';

interface SectionHeadingProps {
  index?: string;
  label?: string;
  title: string;
  className?: string;
  light?: boolean;
  center?: boolean;
}

/** Reference-style heading: small "01 / Label" eyebrow followed by a large uppercase title. */
const SectionHeading: React.FC<SectionHeadingProps> = ({ index, label, title, className = '', light = false, center = false }) => (
  <div className={`${center ? 'text-center mx-auto' : ''} ${className}`}>
    {(index || label) && (
      <div className={`eyebrow mb-5 ${light ? '!text-white/60' : ''} ${center ? 'justify-center' : ''}`}>
        <span className="eyebrow-dot" />
        {index && <span className={light ? 'text-white' : 'text-ink'}>{index}</span>}
        {index && label && <span>/</span>}
        {label && <span>{label}</span>}
      </div>
    )}
    <h2 className={`h-section text-balance ${light ? '!text-white' : ''}`}>{title}</h2>
  </div>
);

export default SectionHeading;
