import type { Metadata } from 'next';
import SiteFooter from '../src/components/layout/SiteFooter';
import SiteHeader from '../src/components/layout/SiteHeader';
import HeroSection from '../src/components/sections/HeroSection';
import LabsSection from '../src/components/sections/LabsSection';
import ProjectsSection from '../src/components/sections/ProjectsSection';
import ServicesSection from '../src/components/sections/ServicesSection';
import TrustStrip from '../src/components/sections/TrustStrip';

export const metadata: Metadata = {
  title: 'Business Automation Systems, Custom Platforms & Workflow Infrastructure',
  description:
    'Rotsi builds business automation systems, custom platforms, ecommerce workflows, CRM tools, and internal operations software for growing businesses.',
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
        <LabsSection />
      </main>
      <SiteFooter />
    </>
  );
}
