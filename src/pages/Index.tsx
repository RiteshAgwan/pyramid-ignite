import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustMetrics } from '@/components/home/TrustMetrics';
import { InstitutionLogos } from '@/components/home/InstitutionLogos';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms';
import { VisionMission } from '@/components/home/VisionMission';
import { Testimonials } from '@/components/home/Testimonials';
import { CoreValues } from '@/components/home/CoreValues';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustMetrics />
        <InstitutionLogos />
        <WhatWeDo />
        <FeaturedPrograms />
        <VisionMission />
        <Testimonials />
        <CoreValues />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
