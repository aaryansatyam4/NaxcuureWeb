import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** CSS delay, e.g. "150ms" */
  delay?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = '0ms', as = 'div' }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const Tag = as as 'div';
  return (
    <Tag
      ref={elementRef}
      className={`${className} transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isIntersecting ? delay : '0ms' }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
