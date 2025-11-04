import React, { useState } from 'react';
import { Page, PageName } from './types';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Career from './pages/Career';
import ProductDetail from './pages/ProductDetail';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>({ name: 'Home' });

  const handleSetPage = (page: PageName) => {
    setCurrentPage({ name: page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleViewProduct = (productId: string) => {
    setCurrentPage({ name: 'Products', productId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderPage = () => {
    if (currentPage.name === 'Products' && currentPage.productId) {
      return <ProductDetail productId={currentPage.productId} onBack={() => handleSetPage('Products')} />;
    }
    
    switch (currentPage.name) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Products':
        return <Products onViewProduct={handleViewProduct} />;
      case 'Quality':
        return <Quality />;
      case 'Career':
        return <Career />;
      default:
        return <Home />;
    }
  };


  return (
    <LanguageProvider>
      <div className="font-sans bg-white">
        <Header currentPage={currentPage.name} setPage={handleSetPage} />
        <main>
          {renderPage()}
        </main>
        <Footer setPage={handleSetPage} />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
};

export default App;