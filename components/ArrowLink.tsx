import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from './icons';

interface ArrowLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  external?: boolean;
}

/** Pill button with a round orange arrow — the signature CTA of the site. */
const ArrowLink: React.FC<ArrowLinkProps> = ({ to, children, variant = 'dark', className = '', external }) => {
  const cls = `${variant === 'light' ? 'btn-light' : 'btn-dark'} group ${className}`;
  const inner = (
    <>
      <span className="py-2">{children}</span>
      <span className="btn-icon">
        <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.2} />
      </span>
    </>
  );
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link to={to} className={cls}>{inner}</Link>
  );
};

export default ArrowLink;
