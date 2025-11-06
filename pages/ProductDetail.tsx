import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const { t } = useLanguage();
  const product = t.products.productList.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <p>Product not found.</p>
        <button onClick={onBack} className="mt-4 text-primary underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-light-bg">
      {/* Hero Section with gradient (light → deep blue) */}
      <div className="bg-gradient-to-b from-[#A0A8F5] via-[#5A52B3] to-[#3A3185] text-white pt-40 pb-16 transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <button
              onClick={onBack}
              className="mb-8 font-sans text-sm flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{t.products.backButton}</span>
            </button>

            <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-sm">
              {product.productName}
            </h1>
            <p className="mt-4 text-xl text-gray-200">{product.therapeuticArea}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200/60 max-w-4xl mx-auto">
              <div className="space-y-8 font-sans text-gray-800">
                <DetailItem
                  label={t.products.productDetails.form}
                  value={product.pharmaceuticalForm}
                />
                <DetailItem
                  label={t.products.productDetails.substance}
                  value={product.activeSubstance}
                />
                <DetailItem
                  label={t.products.productDetails.composition}
                  value={product.composition}
                />
                <DetailItem
                  label={t.products.productDetails.indications}
                  value={product.indicationsForUse}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
      {label}
    </h3>
    <p className="text-lg leading-relaxed">{value}</p>
  </div>
);

export default ProductDetail;
