import React, { useState } from 'react';
import { FootwearStyle } from './data/storeData';
import { Navbar } from './components/Navbar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Hero } from './components/Hero';
import { CollectionSection } from './components/CollectionSection';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedStyle, setSelectedStyle] = useState<FootwearStyle | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="grain min-h-screen bg-[#f7f4ed] text-[#1c242c] selection:bg-[#d4ad58]/30 selection:text-[#11171d]">
      {/* Top Header */}
      <Navbar
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        <CollectionSection
          onSelectStyle={(s) => setSelectedStyle(s)}
          onNavigateContact={() => handleNavigate('contact')}
        />

        <AboutSection />

        <WhyUsSection />

        <ReviewsSection />

        <VisitSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Mobile-Only Sticky Bottom Bar */}
      <MobileBottomBar
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Footwear Style Reference Modal */}
      <ProductModal
        style={selectedStyle}
        onClose={() => setSelectedStyle(null)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* General Sizing & Measurement Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}

export default App;
