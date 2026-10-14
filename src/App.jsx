import React, { useState, useEffect } from 'react';
import SiteNavigation from './components/SiteNavigation';
import ConceptA_Editorial from './components/concepts/ConceptA_Editorial';
import DedicatedSolutionPage from './components/DedicatedSolutionPage';
import MainFooter from './components/MainFooter';
import { SOLUTION_AREAS } from './data/solutionsData';

function App() {
  // 'home' or a specific solution ID ('error-detection', 'quoting', 'ai-agents', 'custom-solutions')
  const [currentView, setCurrentView] = useState('home');

  // Handle URL hash changes or browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['error-detection', 'quoting', 'ai-agents', 'custom-solutions'].includes(hash)) {
        setCurrentView(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === 'solutions' || hash === 'case-study' || hash === 'contact') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateDedicated = (solutionId) => {
    setCurrentView(solutionId);
    window.location.hash = solutionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeDedicatedArea = SOLUTION_AREAS.find((a) => a.id === currentView);

  return (
    <div className="bg-black text-white antialiased selection:bg-orange-500 selection:text-black min-h-screen flex flex-col font-sans relative">
      {/* Background Vertical Lines */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-between px-6 md:px-[48px] lg:px-[80px] xl:px-[120px] max-w-[1920px] mx-auto">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%)',
              opacity: 0.9
            }}
          ></div>
        ))}
      </div>

      {/* Main Site Navigation */}
      <SiteNavigation
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateDedicated={handleNavigateDedicated}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10" id="main">
        {currentView === 'home' ? (
          <ConceptA_Editorial
            onNavigateDedicated={handleNavigateDedicated}
          />
        ) : (
          <DedicatedSolutionPage
            area={activeDedicatedArea}
            onBack={handleNavigateHome}
            onSelectSolution={handleNavigateDedicated}
          />
        )}
      </main>

      {/* Refined Industrial Footer */}
      <div className="relative z-10">
        <MainFooter
          onNavigateDedicated={handleNavigateDedicated}
          onNavigateHome={handleNavigateHome}
        />
      </div>
    </div>
  );
}

export default App;
