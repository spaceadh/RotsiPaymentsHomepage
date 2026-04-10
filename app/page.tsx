import type { Metadata } from 'next';
import Link from 'next/link';
import RotsiLogo from '../src/components/brand/RotsiLogo';
import Layout from '../src/components/site/Layout';
import MotionReveal from '../src/components/site/MotionReveal';
import ProjectsCarousel from '../src/components/site/ProjectsCarousel';
import SiteFooter from '../src/components/site/SiteFooter';
import SiteMobileMenu from '../src/components/site/SiteMobileMenu';
import { mainNavigationItems } from '../src/content/navigation';
import { featuredProjects } from '../src/content/projects';

export const metadata: Metadata = {
  title: 'Business Automation Systems, Custom Platforms, Workflow Infrastructure',
  description:
    'Rotsi builds business automation systems, custom platforms, and workflow infrastructure for businesses that need clear, dependable execution.',
};

const services = [
  {
    index: '01',
    title: 'Websites',
    copy:
      'Custom websites, redesigns, and digital experiences built to present your business clearly and professionally.',
  },
  {
    index: '02',
    title: 'Workflows & Automations',
    copy:
      'We turn Instagram, Meta, and WhatsApp into operational systems for inquiries, bookings, lead handling, and customer communication.',
  },
  {
    index: '03',
    title: 'Custom Platforms',
    copy:
      'We develop tailored systems for startups, internal operations, and businesses with specific technical needs.',
  },
];

const useCases = [
  'Instagram auto-DM and lead capture',
  'WhatsApp appointment booking',
  'Property listing and search flows',
  'School inquiry systems',
  'Service pricing and availability workflows',
  'Customer communication routing',
];

const process = [
  {
    icon: 'visibility',
    title: '01. UNDERSTAND',
    copy: 'We identify the real business need before building anything.',
  },
  {
    icon: 'draw',
    title: '02. DESIGN',
    copy: 'We shape the right website, workflow, or system for the use case.',
  },
  {
    icon: 'deployed_code',
    title: '03. BUILD',
    copy: 'We deliver practical technical solutions that are clear, useful, and reliable.',
  },
];

export default function HomePage() {
  const mobileNavigationItems = mainNavigationItems();

  return (
    <Layout>
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(16,24,40,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <Link href="/" className="inline-flex w-[132px] text-primary sm:w-[152px]" aria-label="Rotsi home">
            <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
          </Link>
          <nav className="hidden items-center gap-12 md:flex">
            <a
              className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600"
              href="#services"
            >
              Services
            </a>
            <a
              className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600"
              href="#work"
            >
              Work
            </a>
            <Link
              className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600"
              href="/blog"
            >
              Journal
            </Link>
            <Link
              className="font-headline font-bold uppercase tracking-tighter text-yellow-600 transition-colors duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Contact Rotsi"
              className="material-symbols-outlined hidden text-slate-900 transition-transform duration-200 hover:scale-95 md:inline-flex"
            >
              north_east
            </Link>
            <SiteMobileMenu items={mobileNavigationItems} />
          </div>
        </div>
      </header>

      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-8 pb-16 pt-10 md:px-12 md:pb-24 md:pt-14">
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1.18fr_0.82fr] xl:items-start">
            <MotionReveal>
              <div className="max-w-5xl">
                <span className="mb-6 block font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
                  Digital Infrastructure For Business
                </span>
                <h1 className="max-w-5xl font-headline text-[3rem] font-bold leading-[0.9] tracking-[-0.045em] text-primary md:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.25rem]">
                  WE BUILD WEBSITES,
                  <br />
                  AUTOMATE WORKFLOWS,
                  <br />
                  AND DESIGN CUSTOM
                  <br />
                  PLATFORMS.
                </h1>
                <p className="mt-6 max-w-2xl font-headline text-2xl font-medium uppercase leading-tight tracking-[-0.02em] text-primary md:text-3xl">
                  So businesses can focus on what they do best.
                </p>
                <p className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-secondary md:text-lg">
                  From custom websites to WhatsApp and Meta automations to tailored business
                  systems, we handle the technical side with clarity and precision.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-primary px-10 py-5 font-headline text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-primary-container active:scale-95"
                  >
                    Start A Project
                  </Link>
                  <a
                    href="/work"
                    className="inline-flex items-center justify-center border border-primary px-10 py-5 font-headline text-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    View Our Work
                  </a>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="glass-panel relative mt-2 overflow-hidden border border-primary/10 p-8 md:p-10 xl:mt-10 xl:p-12">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,24,40,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,24,40,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
                <div className="relative z-10">
                  <span className="font-label text-xs uppercase tracking-[0.35em] text-tertiary">
                    What We Build
                  </span>
                  <div className="mt-8 space-y-6">
                    <div className="border-b border-outline-variant/30 pb-6">
                      <p className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">
                        Websites
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">
                        Custom builds and revamps that strengthen how a business shows up online.
                      </p>
                    </div>
                    <div className="border-b border-outline-variant/30 pb-6">
                      <p className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">
                        Workflows
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">
                        Operational systems across Meta and WhatsApp for bookings, leads, and
                        customer journeys.
                      </p>
                    </div>
                    <div>
                      <p className="font-headline text-3xl font-bold uppercase tracking-tight text-primary">
                        Solutions
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">
                        Tailored platforms for startups, internal operations, and growth-stage
                        businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="services" className="bg-surface-container-low py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="mb-16 max-w-3xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Three Pillars
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                  Structured For Fast Understanding.
                </h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-px bg-outline-variant/30 md:grid-cols-3">
              {services.map((service, index) => (
                <MotionReveal key={service.title} delay={index * 0.08}>
                  <div className="h-full bg-background p-10 md:min-h-[320px] md:p-12">
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                      {service.index}
                    </span>
                    <h3 className="mt-6 font-headline text-3xl font-bold uppercase tracking-tight text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-6 max-w-sm text-base leading-relaxed text-secondary">
                      {service.copy}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-28 md:px-12 md:py-36">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <div className="max-w-xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Workflow Systems
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                  Built Around Real Business Workflows.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-secondary">
                  We do not just automate messages. We build systems people can actually use.
                </p>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 gap-px bg-outline-variant/30 sm:grid-cols-2">
              {useCases.map((item, index) => (
                <MotionReveal key={item} delay={index * 0.05}>
                  <div className="flex min-h-[160px] items-end bg-background p-8 md:p-10">
                    <p className="font-headline text-2xl font-bold uppercase leading-tight tracking-tight text-primary">
                      {item}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-surface-container-low py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="mb-16 max-w-3xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Selected Systems
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                  Proof Across Operations And Product.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-secondary">
                  Selected case studies showing how we approach commerce systems, internal platforms, and workflow-driven products.
                </p>
              </div>
            </MotionReveal>
            <div className="space-y-10">
              <ProjectsCarousel projects={featuredProjects} />
              <div className="flex justify-center">
                <Link href="/work" className="button-secondary">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-28 md:px-12 md:py-36">
          <MotionReveal>
            <div className="mb-16 max-w-3xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                How We Work
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                Clear Process. Serious Execution.
              </h2>
            </div>
          </MotionReveal>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
            {process.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="mx-auto flex h-full min-h-[15rem] max-w-sm flex-col border-t border-primary border-opacity-20 pt-8 text-left">
                  <span className="material-symbols-outlined mb-6 text-4xl font-light text-primary">
                    {item.icon}
                  </span>
                  <h3 className="mb-4 font-headline text-xl font-bold uppercase tracking-widest text-primary">
                    {item.title}
                  </h3>
                  <p className="max-w-xs font-body text-sm leading-relaxed text-secondary">
                    {item.copy}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="bg-primary py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-4xl">
                  <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-[#ffe088]">
                    Final Call
                  </span>
                  <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                    Let Us Handle The Technical Side.
                  </h2>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
                    If your business needs a website, a workflow system, or a custom platform,
                    we can help you scope it and build it properly.
                  </p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex bg-white px-12 py-5 font-headline text-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-[#ffe088]"
                  >
                    Contact Rotsi
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </Layout>
  );
}
