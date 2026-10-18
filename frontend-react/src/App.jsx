import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ServicesSection from './components/ServicesSection';
import PressOnSection from './components/PressOnSection';
import LookbookCatalog from './components/LookbookCatalog';
import PriceSimulator from './components/PriceSimulator';
import LocationAndFaq from './components/LocationAndFaq';
import AiChatbotWidget from './components/AiChatbotWidget';

export default function App() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [initialAddonRemoval, setInitialAddonRemoval] = useState(false);

  const handleSelectServiceFromMenu = (index, hasAddonRemoval = false) => {
    setSelectedServiceIndex(index);
    setInitialAddonRemoval(hasAddonRemoval);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <ServicesSection onSelectService={handleSelectServiceFromMenu} />
        <PressOnSection />
        <LookbookCatalog />
        <PriceSimulator
          selectedServiceIndex={selectedServiceIndex}
          initialAddonRemoval={initialAddonRemoval}
        />
        <LocationAndFaq />
      </main>
      <AiChatbotWidget />
    </div>
  );
}
