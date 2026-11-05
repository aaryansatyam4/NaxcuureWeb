import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import ProductCard, { FormIcon } from '../components/ProductCard';
import { catalogue, categories, dosageForms, DosageForm } from '../data/catalogue';
import { SearchIcon, CloseIcon } from '../components/icons';

const PAGE_SIZE = 24;
const FORMS: Exclude<DosageForm, ''>[] = ['tablet', 'capsule', 'sachet'];

const Products: React.FC = () => {
  const { t, u, language } = useLanguage();
  const [params, setParams] = useSearchParams();
  const category = params.get('category') ?? '';
  const form = (params.get('form') ?? '') as DosageForm;
  const [query, setQuery] = useState(params.get('q') ?? '');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  // keep ?q= in sync without spamming history
  useEffect(() => {
    const id = window.setTimeout(() => updateParam('q', query.trim()), 300);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => setVisible(PAGE_SIZE), [category, form, query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogue
      .filter((p) => (!category || p.category === category) && (!form || p.form === form))
      .filter((p) => !q || p.name.toLowerCase().includes(q) || p.strength.toLowerCase().includes(q))
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [category, form, query]);

  const hasFilters = Boolean(category || form || query);

  return (
    <>
      <PageHero title={t.products.title} subtitle={u.productsHeroSubtitle} backgroundImage="/images/lab-research.webp" crumb={t.nav.products} imageRatio={16 / 9} />

      <section className="shell pt-16 sm:pt-24">
        <AnimatedSection>
          <div className="eyebrow mb-5">
            <span className="eyebrow-dot" />
            <span className="text-ink">01</span> / <span>{t.nav.products}</span>
          </div>
          <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-[2.4rem] text-balance">{t.products.intro}</p>
        </AnimatedSection>
      </section>

      {/* Filters */}
      <div className="sticky top-2 z-30 mt-12 sm:top-3">
        <div className="shell">
          <div className="rounded-[1.75rem] bg-white/90 p-3 shadow-[0_20px_50px_-25px_rgba(15,14,36,0.35)] ring-1 ring-ink/5 backdrop-blur-xl sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label className="relative flex-1">
                <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/35" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.products.searchPlaceholder}
                  className="field rounded-full !py-3.5 pl-14"
                  aria-label={t.products.searchPlaceholder}
                />
              </label>
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                <div className="flex shrink-0 rounded-full bg-canvas p-1 ring-1 ring-ink/10">
                  <button
                    onClick={() => updateParam('form', '')}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${!form ? 'bg-ink text-white' : 'text-ink/60 hover:text-ink'}`}
                  >
                    {u.allForms}
                  </button>
                  {FORMS.map((f) => (
                    <button
                      key={f}
                      onClick={() => updateParam('form', f)}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition ${form === f ? 'bg-ink text-white' : 'text-ink/60 hover:text-ink'}`}
                    >
                      <FormIcon form={f} className="h-4 w-4" />
                      {dosageForms[f][language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category chips */}
      <div className="shell mt-6">
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          <button
            onClick={() => updateParam('category', '')}
            className={`chip shrink-0 ${!category ? 'border-primary bg-primary text-white' : 'border-ink/10 bg-white text-ink/70 hover:border-primary hover:text-primary'}`}
          >
            {t.products.filterAll}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => updateParam('category', category === c.id ? '' : c.id)}
              className={`chip shrink-0 ${category === c.id ? 'border-primary bg-primary text-white' : 'border-ink/10 bg-white text-ink/70 hover:border-primary hover:text-primary'}`}
            >
              {c.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <section className="shell pb-24 pt-10 sm:pb-32">
        {filtered.length > 0 ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.slice(0, visible).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {visible < filtered.length && (
              <div className="mt-14 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="rounded-full bg-ink px-10 py-4 text-sm font-semibold text-white transition hover:bg-primary"
                >
                  {u.loadMore}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="card flex flex-col items-center gap-6 px-6 py-20 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-primary-50 text-primary"><SearchIcon className="h-7 w-7" /></span>
            <p className="text-lg text-ink/60">{t.products.noResults}</p>
          </div>
        )}
        {hasFilters && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                setQuery('');
                setParams(new URLSearchParams(), { replace: true });
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/50 transition hover:text-primary"
            >
              <CloseIcon className="h-4 w-4" /> {u.clearFilters}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
