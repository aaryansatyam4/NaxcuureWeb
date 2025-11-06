import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
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

const ScrollToTop: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
};

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleViewProduct = (productId: string) => {
    navigate(`/Product/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Products onViewProduct={handleViewProduct} />;
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  return (
    <ProductDetail 
      productId={productId || ''} 
      onBack={() => navigate('/Product')} 
    />
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="font-sans bg-white min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<><ScrollToTop /><Home /></>} />
              <Route path="/about" element={<><ScrollToTop /><About /></>} />
              <Route path="/Product" element={<><ScrollToTop /><ProductsPage /></>} />
              <Route path="/Product/:productId" element={<><ScrollToTop /><ProductDetailPage /></>} />
              <Route path="/quality" element={<><ScrollToTop /><Quality /></>} />
              <Route path="/career" element={<><ScrollToTop /><Career /></>} />
              <Route path="*" element={<><ScrollToTop /><Home /></>} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
