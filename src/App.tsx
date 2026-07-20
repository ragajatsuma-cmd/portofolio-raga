import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeyRound, Sun, Moon } from 'lucide-react';
import IDCard from './components/IDCard';
import PortfolioDetail from './components/PortfolioDetail';
import { portfolioData } from './data';

type ViewState = 'landing' | 'portfolio';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [isOpening, setIsOpening] = useState(false);
  
  // Load and store current theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'light';
  });

  // Trigger the unlock animation sequence
  const handleOpenPortfolio = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Smooth transition delay to let the ID card unlock/shrink animation finish
    setTimeout(() => {
      setView('portfolio');
      setIsOpening(false);
    }, 1100);
  };

  const handleBackToLanding = () => {
    setView('landing');
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen flex flex-col relative overflow-x-hidden select-none font-sans transition-colors duration-300 ${
      isLight ? 'bg-[#f1f5f9] text-slate-800' : 'bg-[#05070f] text-slate-100'
    }`}>
      
      {/* Floating Theme Switcher Button */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          id="theme-toggle-btn"
          onClick={handleToggleTheme}
          className={`p-2.5 rounded-xl border flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-md ${
            isLight
              ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800'
          }`}
          title={isLight ? 'Ubah ke Mode Gelap' : 'Ubah ke Mode Terang'}
        >
          {isLight ? <Moon size={16} /> : <Sun size={16} className="text-amber-400" />}
        </button>
      </div>
      
      {/* Decorative Ambient Radial Glows (Background) */}
      {!isLight ? (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-550/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        </>
      )}
      
      {/* Cyber-grid pattern background */}
      <div className={`absolute inset-0 opacity-10 pointer-events-none -z-10 ${
        isLight ? 'grid-pattern-light' : 'grid-pattern'
      }`}></div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10 w-full">
        <AnimatePresence mode="wait">
          
          {/* ================= LANDING VIEW ================= */}
          {view === 'landing' && (
            <motion.div
              key="landing-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center justify-center py-10 px-4 min-h-[90vh]"
            >
              {/* Subtle Elegant Space */}
              <div className="h-4"></div>

              {/* Float-able / Drag-able ID Card Component */}
              <IDCard 
                data={portfolioData} 
                onOpenPortfolio={handleOpenPortfolio} 
                isOpening={isOpening}
                theme={theme}
              />

              {/* Bottom Instructions Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.6 }}
                className={`mt-6 flex items-center gap-1.5 text-xs font-mono pointer-events-none select-none ${
                  isLight ? 'text-slate-600' : 'text-slate-500'
                }`}
              >
                <KeyRound size={12} className={isLight ? 'text-indigo-500' : 'text-slate-600'} />
                <span>Klik "Buka Portofolio" untuk melihat profil lengkap</span>
              </motion.div>
            </motion.div>
          )}

          {/* ================= PORTFOLIO DETAILS VIEW ================= */}
          {view === 'portfolio' && (
            <motion.div
              key="portfolio-screen"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className="w-full py-6"
            >
              <PortfolioDetail 
                data={portfolioData} 
                onBack={handleBackToLanding}
                theme={theme}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {view === 'portfolio' && (
        <footer className={`py-6 border-t text-center text-[10px] font-mono shrink-0 relative z-10 select-none transition-colors ${
          isLight ? 'border-slate-200 text-slate-500 bg-white' : 'border-slate-900/40 text-slate-600'
        }`}>
          <p>© 2026 Raga Jatsuma. Semua hak cipta dilindungi.</p>
        </footer>
      )}
    </div>
  );
}
