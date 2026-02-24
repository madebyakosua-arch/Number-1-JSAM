
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

import HomePage from './pages/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CareersPage from './pages/CareersPage';
import SearchResultsPage from './pages/SearchResultsPage';

const App: React.FC = () => {
  const [route, setRoute] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setRoute(newHash);
      
      const homepageAnchors = ['why-us', 'best-sellers', 'about-us', 'testimonials', 'location', 'superclass-iron'];
      const hashId = newHash.substring(1).split('?')[0];

      if (!homepageAnchors.includes(hashId)) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial call to handle route on load
    handleHashChange(); 
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    const [path, queryString] = route.split('?');

    if (path === '#privacy') {
      return <PrivacyPolicy />;
    }
    
    if (path === '#terms-of-service') {
        return <TermsOfService />;
    }

    if (path === '#careers') {
        return <CareersPage />;
    }

    if (path === '#search') {
      const params = new URLSearchParams(queryString);
      const query = params.get('q') || '';
      return <SearchResultsPage query={query} />;
    }

    return <HomePage />;
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <div className="sticky top-0 z-50">
        <Header />
        
      </div>
      <main>
        {renderContent()}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;