import type { Metadata } from 'next';
import SiteFooter from '../src/components/layout/SiteFooter';
import SiteHeader from '../src/components/layout/SiteHeader';
import HeroSection from '../src/components/sections/HeroSection';
import ProjectsSection from '../src/components/sections/ProjectsSection';
import ServicesSection from '../src/components/sections/ServicesSection';
import TrustStrip from '../src/components/sections/TrustStrip';

export const metadata: Metadata = {
  title: 'Rotsi Labs | Systems, People, Impact',
  description:
    'Rotsi Labs is a product and systems studio building fintech solutions, automation tools, and digital products for Africa and the world.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  );
}
