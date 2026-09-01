import { useState, useEffect } from 'react';
import { HeaderB } from './components/HeaderB';
import { FooterB } from './components/FooterB';
import { InquiryDrawerB } from './components/InquiryDrawerB';
import { HomePageB } from './pages/HomePageB';
import { ShopPageB } from './pages/ShopPageB';
import { VisitPageB } from './pages/VisitPageB';
import { CareJournalPageB } from './pages/CareJournalPageB';
import { ContactPageB } from './pages/ContactPageB';
import { PoliciesPageB } from './pages/PoliciesPageB';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('Custom Bioactive Setup');
  const [inquiryDetails, setInquiryDetails] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    let cleanPath = path;
    if (cleanPath === '') cleanPath = '/';
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (topic: string = "Custom Bioactive Setup", details: string = "") => {
    setInquiryTopic(topic);
    setInquiryDetails(details);
    setInquiryOpen(true);
  };

  const renderPage = () => {
    const normalized = currentPath.toLowerCase();

    if (normalized.includes('shop')) {
      return <ShopPageB onOpenInquiry={handleOpenInquiry} />;
    }
    if (normalized.includes('visit')) {
      return <VisitPageB onOpenInquiry={handleOpenInquiry} />;
    }
    if (normalized.includes('care')) {
      return <CareJournalPageB onOpenInquiry={handleOpenInquiry} />;
    }
    if (normalized.includes('contact')) {
      return <ContactPageB />;
    }
    if (normalized.includes('policies') || normalized.includes('terms')) {
      return <PoliciesPageB />;
    }

    return (
      <HomePageB
        onNavigate={navigate}
        onOpenInquiry={handleOpenInquiry}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-forest-950 text-stone-100 font-sans selection:bg-copper-500 selection:text-forest-950">
      <HeaderB
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenInquiry={handleOpenInquiry}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <FooterB
        onNavigate={navigate}
        onOpenInquiry={handleOpenInquiry}
      />

      <InquiryDrawerB
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialTopic={inquiryTopic}
        initialDetails={inquiryDetails}
      />
    </div>
  );
}

export default App;
