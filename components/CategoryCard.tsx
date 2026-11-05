import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, TabletIcon, CapsuleIcon, AtomIcon, FlaskIcon, HeartIcon, ShieldCheckIcon, SparkleIcon, MicroscopeIcon } from './icons';

const THEMES = [
  { bg: 'bg-gradient-to-br from-primary via-primary-700 to-primary-900', text: 'text-white', sub: 'text-white/50', ring: 'bg-white/10' },
  { bg: 'bg-gradient-to-br from-accent via-[#E26F0E] to-[#B4520A]', text: 'text-white', sub: 'text-white/60', ring: 'bg-white/15' },
  { bg: 'bg-gradient-to-br from-[#1C1A3D] via-ink to-black', text: 'text-white', sub: 'text-white/45', ring: 'bg-white/10' },
  { bg: 'bg-gradient-to-br from-white via-primary-50 to-primary-100', text: 'text-ink', sub: 'text-ink/45', ring: 'bg-primary/10' },
];
const ICONS = [TabletIcon, CapsuleIcon, AtomIcon, FlaskIcon, HeartIcon, ShieldCheckIcon, SparkleIcon, MicroscopeIcon];

interface CategoryCardProps {
  id: string;
  label: string;
  index: number;
  className?: string;
}

/** Decorative therapeutic-category tile linking to the filtered product list. */
const CategoryCard: React.FC<CategoryCardProps> = ({ id, label, index, className = '' }) => {
  const theme = THEMES[index % THEMES.length];
  const Ico = ICONS[index % ICONS.length];
  return (
    <Link
      to={`/Product?category=${id}`}
      className={`group relative isolate flex h-[340px] flex-col justify-between overflow-hidden rounded-4xl p-7 ring-1 ring-ink/5 transition-transform duration-500 hover:-translate-y-1.5 ${theme.bg} ${className}`}
    >
      <Ico className={`absolute -right-10 -top-10 -z-10 h-56 w-56 opacity-[0.12] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 ${theme.text}`} strokeWidth={0.8} />
      <div className={`absolute -bottom-20 -left-16 -z-10 h-56 w-56 rounded-full ${theme.ring}`} />
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold tracking-[0.2em] ${theme.sub}`}>{String(index + 1).padStart(2, '0')}</span>
        <span className={`grid h-11 w-11 place-items-center rounded-full ${theme.ring} ${theme.text}`}>
          <Ico className="h-5 w-5" />
        </span>
      </div>
      <div className="flex items-end justify-between gap-4">
        <h3 className={`text-2xl font-semibold uppercase leading-[1.05] tracking-tight ${theme.text}`}>{label}</h3>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink shadow-lg transition-transform duration-300 group-hover:-rotate-45">
          <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.2} />
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
