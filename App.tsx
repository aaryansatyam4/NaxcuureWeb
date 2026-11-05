import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Quality = lazy(() => import('./pages/Quality'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const Chatbot = lazy(() => import('./components/Chatbot'));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  return <ProductDetail productId={productId || ''} />;
};

const PageFallback = () => <div className="min-h-screen" />;

const App: React.FC = () => (
  <LanguageProvider>
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-canvas font-sans">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Product" element={<Products />} />
              <Route path="/Product/:productId" element={<ProductDetailPage />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        {/* The assistant is optional: if it fails to load or crashes, the rest of the site keeps working. */}
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  </LanguageProvider>
);

export default App;
