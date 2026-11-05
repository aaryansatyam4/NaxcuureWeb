import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { CatalogueProduct } from '../data/catalogue';
import { categories, dosageForms } from '../data/categories';
import { ArrowUpRightIcon, TabletIcon, CapsuleIcon, SachetIcon, FlaskIcon } from './icons';

export const FormIcon: React.FC<{ form: CatalogueProduct['form']; className?: string }> = ({ form, className }) => {
  if (form === 'tablet') return <TabletIcon className={className} />;
  if (form === 'capsule') return <CapsuleIcon className={className} />;
  if (form === 'sachet') return <SachetIcon className={className} />;
  return <FlaskIcon className={className} />;
};

export const categoryLabel = (id: string, lang: keyof (typeof categories)[number]['label']) =>
  categories.find((c) => c.id === id)?.label[lang] ?? '';

const ProductCard: React.FC<{ product: CatalogueProduct }> = ({ product }) => {
  const { language, u } = useLanguage();
  return (
    <Link
      to={`/Product/${product.id}`}
      className="group card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(57,49,133,0.35)] hover:ring-primary/20"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
          <FormIcon form={product.form} className="h-3.5 w-3.5" />
          {product.form ? dosageForms[product.form][language] : '—'}
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-canvas text-ink/50 transition-all duration-300 group-hover:-rotate-45 group-hover:bg-accent group-hover:text-white">
          <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-primary">{product.name}</h3>
      {product.strength && (
        <p className="mt-2 text-sm text-ink/55">
          <span className="text-ink/35">{u.strength}: </span>
          {product.strength}
        </p>
      )}
      <div className="mt-auto pt-5">
        <span className="inline-block rounded-full border border-accent/30 bg-accent-50 px-3 py-1 text-[11px] font-medium text-accent-600">
          {categoryLabel(product.category, language)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
