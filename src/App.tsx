import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { InquiryModal } from './components/InquiryModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { VisitPage } from './pages/VisitPage';
import { CareGuidePage } from './pages/CareGuidePage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';

function getInitialRoute(): PageRoute {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (path.includes('shop') || hash.includes('shop')) return 'shop';
  if (path.includes('visit') || hash.includes('visit')) return 'visit';
  if (path.includes('care') || path.includes('animals') || hash.includes('care')) return 'care';
  if (path.includes('contact') || hash.includes('contact')) return 'contact';
  if (path.includes('polic') || hash.includes('polic')) return 'policies';
  
  return 'home';
}

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute());
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('Animal Availability');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    const newPath = route === 'home' ? '/' : `/${route}.html`;
    try {
      window.history.pushState({}, '', newPath);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (topic = 'Animal Availability') => {
    setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-jungle-950 text-slate-100 selection:bg-reptile-500 selection:text-jungle-950 relative overflow-x-hidden subtle-grid">
      
      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry('General Inquiry')}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentRoute === 'shop' && (
          <ShopPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentRoute === 'visit' && (
          <VisitPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentRoute === 'care' && (
          <CareGuidePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
        {currentRoute === 'policies' && (
          <PoliciesPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry('General Inquiry')}
      />

      {/* Mobile Sticky Navigation */}
      <MobileBottomNav
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry('Keeper Inquiry')}
      />

      {/* Interactive Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialTopic={inquiryTopic}
      />
    </div>
  );
};

export default App;
