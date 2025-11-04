import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Pagination from '../components/Pagination';

const PRODUCTS_PER_PAGE = 9;

interface ProductsProps {
    onViewProduct: (productId: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onViewProduct }) => {
    const { t } = useLanguage();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filterArea, setFilterArea] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const therapeuticAreas = useMemo(() => {
        const areas = new Set(t.products.productList.map(p => p.therapeuticArea));
        return ['All', ...Array.from(areas)];
    }, [t.products.productList]);

    const filteredProducts = useMemo(() => {
        return t.products.productList
            .filter(product => 
                product.productName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter(product => 
                filterArea === 'All' || product.therapeuticArea === filterArea
            );
    }, [t.products.productList, searchTerm, filterArea]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterArea(e.target.value);
        setCurrentPage(1); 
    };
    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    }

    return (
        <div className="bg-light-bg">
            <PageHero 
                title={t.products.title}
                subtitle="A diverse and robust portfolio across key therapeutic areas."
                backgroundImage="https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <div className="py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="max-w-4xl mb-12 text-left">
                             <p className="text-lg text-gray-600 font-sans leading-relaxed">{t.products.intro}</p>
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <div className="mb-12 grid md:grid-cols-3 gap-4 items-center bg-white p-4 rounded-lg shadow-md border border-gray-200/60">
                            <input
                                type="text"
                                placeholder={t.products.searchPlaceholder}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full md:col-span-2 px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary font-sans"
                            />
                            <select
                                value={filterArea}
                                onChange={handleFilterChange}
                                className="w-full px-4 py-3 bg-light-bg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary font-sans"
                            >
                                {therapeuticAreas.map(area => (
                                    <option key={area} value={area}>
                                        {area === 'All' ? t.products.filterAll : area}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </AnimatedSection>

                    {paginatedProducts.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {paginatedProducts.map((product, index) => (
                                    <AnimatedSection key={product.id} delay={`${index * 50}ms`}>
                                        <button 
                                            onClick={() => onViewProduct(product.id)}
                                            className="w-full h-full text-left bg-white rounded-xl border border-gray-200/60 shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                                        >
                                            <h3 className="text-xl font-serif text-primary mb-3">{product.productName}</h3>
                                            <p className="font-sans text-sm text-accent bg-accent/10 px-2 py-1 rounded-full self-start">{product.therapeuticArea}</p>
                                        </button>
                                    </AnimatedSection>
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <Pagination 
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-500 font-sans">{t.products.noResults}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;