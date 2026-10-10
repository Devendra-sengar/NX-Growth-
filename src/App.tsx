import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MethodologySection } from './components/MethodologySection';
import { EcosystemSection } from './components/EcosystemSection';
import { RoadmapSection } from './components/RoadmapSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { TelemetrySection } from './components/TelemetrySection';
import { AudienceSection } from './components/AudienceSection';
import { AdvantageSection } from './components/AdvantageSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { IntakeModal } from './components/IntakeModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Build Growth Strategy CTA');

  const handleOpenModal = (source = 'Build Growth Strategy CTA') => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col antialiased selection:bg-[#dbe1ff] selection:text-[#00174b]">
      {/* Primary Sticky Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Full-Width Responsive Body */}
      <main className="flex-1 w-full pt-20 pb-16 lg:pb-0 overflow-x-hidden">
        <HeroSection onOpenModal={handleOpenModal} />
        <MethodologySection />
        <EcosystemSection />
        <RoadmapSection />
        <InfrastructureSection />
        <TelemetrySection />
        <AudienceSection />
        <AdvantageSection />
        <ConsultationSection onOpenModal={handleOpenModal} />
        <Footer />
      </main>

      {/* Mobile Floating Tab Navigation */}
      <MobileBottomNav onOpenModal={handleOpenModal} />

      {/* The Strategic Intake Modal triggered by all CTA buttons */}
      <IntakeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        ctaSource={modalSource}
      />
    </div>
  );
}
