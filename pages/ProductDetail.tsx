import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard, { FormIcon, categoryLabel } from '../components/ProductCard';
import ArrowLink from '../components/ArrowLink';
import { catalogue, dosageForms } from '../data/catalogue';
import { ArrowLeftIcon, ShieldCheckIcon } from '../components/icons';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { t, u, language } = useLanguage();
  const product = catalogue.find((p) => p.id === productId);

  const related = useMemo(() => {
    if (!product) return [];
    return catalogue.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <section className="shell flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-32 text-center">
        <p className="text-xl text-ink/60">{t.products.noResults}</p>
        <ArrowLink to="/Product">{t.products.backButton}</ArrowLink>
      </section>
    );
  }

  const cat = categoryLabel(product.category, language);
  const formLabel = product.form ? dosageForms[product.form][language] : '—';
  const enquiryHref = `/contact?product=${encodeURIComponent(product.name + (product.strength ? ` (${product.strength})` : ''))}`;

  return (
    <>
      {/* Hero */}
      <section className="frame pt-2 sm:pt-3 lg:pt-4">
        <div className="grain relative isolate overflow-hidden rounded-4xl bg-gradient-to-br from-primary via-primary-700 to-ink lg:rounded-5xl">
          <div className="absolute -right-32 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-[120px]" />
          <FormIcon form={product.form} className="absolute -bottom-24 right-[-4rem] -z-10 h-[26rem] w-[26rem] text-white/[0.06] sm:right-10" />
          <div className="shell pb-14 pt-36 sm:pb-20 lg:pb-24 lg:pt-44">
            <Link to={`/Product?category=${product.category}`} className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
              <ArrowLeftIcon className="h-4 w-4" /> {t.products.backButton}
            </Link>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="chip-glass !cursor-default">{cat}</span>
              <span className="chip border-accent bg-accent text-white">
                <FormIcon form={product.form} className="mr-1.5 h-4 w-4" /> {formLabel}
              </span>
            </div>
            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance animate-fade-up">
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="shell py-16 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-7">
            <div className="card divide-y divide-ink/5 overflow-hidden">
              {[
                { label: u.category, value: cat },
                { label: t.products.productDetails.form, value: formLabel },
                ...(product.strength ? [{ label: u.strength, value: product.strength }] : []),
              ].map((row) => (
                <div key={row.label} className="grid gap-2 p-7 sm:grid-cols-3 sm:p-9">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">{row.label}</div>
                  <div className="text-lg font-medium text-ink sm:col-span-2">{row.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay="120ms">
            <div className="grain relative isolate flex h-full flex-col justify-between gap-8 overflow-hidden rounded-4xl bg-ink p-8 text-white sm:p-10">
              <div className="absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-primary blur-3xl" />
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-accent">
                <ShieldCheckIcon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold uppercase tracking-tight sm:text-3xl">{u.enquireProduct}</h2>
                <p className="mt-4 text-white/60">{u.enquireProductText}</p>
              </div>
              <ArrowLink to={enquiryHref} variant="light" className="self-start">{u.enquire}</ArrowLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="shell pb-24 sm:pb-32">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="h-section !text-4xl sm:!text-5xl">{u.related}</h2>
            <ArrowLink to={`/Product?category=${product.category}`}>{cat}</ArrowLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
