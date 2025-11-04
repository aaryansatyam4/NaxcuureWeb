
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 'delay-0' }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all duration-1000 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: isIntersecting ? delay : '0ms' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
