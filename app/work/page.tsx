import type { Metadata } from 'next';
import Link from 'next/link';
import RotsiLogo from '../../src/components/brand/RotsiLogo';
import Layout from '../../src/components/site/Layout';
import MotionReveal from '../../src/components/site/MotionReveal';
import ProjectCard from '../../src/components/site/ProjectCard';
import SiteMobileMenu from '../../src/components/site/SiteMobileMenu';
import { projects } from '../../src/content/projects';
import { mainNavigationItems } from '../../src/content/navigation';

export const metadata: Metadata = {
  title: 'Work | Selected Systems And Product Projects',
  description:
    'Browse selected Rotsi Solutions projects across platforms, internal systems, and workflow-focused product builds.',
};

export default function WorkPage() {
  const currentYear = new Date().getFullYear();
  const mobileNavigationItems = mainNavigationItems('/work');

  return (
    <Layout>
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-background/78 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <Link href="/" className="inline-flex w-[132px] text-primary sm:w-[152px]" aria-label="Rotsi home">
            <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
          </Link>
          <nav className="hidden items-center gap-12 md:flex">
            <Link className="nav-link" href="/#services">
              Services
            </Link>
            <Link className="nav-link nav-link-active font-bold" href="/work">
              Work
            </Link>
            <Link className="nav-link" href="/blog">
              Journal
            </Link>
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Contact Rotsi Solutions"
              className="material-symbols-outlined hidden text-primary transition-all duration-300 hover:-translate-y-0.5 hover:text-tertiary md:inline-flex"
            >
              north_east
            </Link>
            <SiteMobileMenu items={mobileNavigationItems} />
          </div>
        </div>
      </header>

      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16">
          <MotionReveal>
            <div className="max-w-5xl">
              <span className="mb-6 block font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
                Project Index
              </span>
              <h1 className="max-w-5xl font-headline text-[3rem] font-bold leading-[0.9] tracking-[-0.045em] text-primary md:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.25rem]">
                SELECTED SYSTEMS,
                <br />
                PRODUCTS,
                <br />
                AND OPERATIONAL
                <br />
                BUILDS.
              </h1>
              <p className="body-copy mt-8 max-w-2xl font-body text-base font-light text-secondary md:text-lg">
                A closer look at the work behind the interfaces: practical platforms, internal
                systems, and focused product builds shaped around real operational needs.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  {String(projects.length).padStart(2, '0')}
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Active Case Studies
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Focus
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Operations And Product
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Outcome
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Serious Systems, Clear Delivery
                </p>
              </div>
            </div>
          </MotionReveal>
        </section>

        <section className="bg-surface-container-low/80 py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="mb-16 max-w-3xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  All Projects
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                  Work That Balances Precision And Utility.
                </h2>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-container py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-4xl">
                  <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                    Next Project
                  </span>
                  <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                    Need Something Built With This Level Of Intent?
                  </h2>
                  <p className="body-copy mt-8 max-w-2xl text-lg text-white/72">
                    If your team needs a website, workflow system, or custom product experience,
                    we can shape it with the same clarity and execution.
                  </p>
                </div>
                <div>
                  <Link href="/contact" className="button-inverse">
                    Start A Project
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>

      <footer className="w-full bg-surface-container-low py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center space-y-12 px-8 text-center md:px-12">
          <div className="w-[148px] text-primary">
            <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link className="footer-link" href="/#services">
              Services
            </Link>
            <Link
              className="footer-link underline decoration-tertiary decoration-2 underline-offset-8"
              href="/work"
            >
              Work
            </Link>
            <Link className="footer-link" href="/blog">
              Journal
            </Link>
            <Link className="footer-link" href="/contact">
              Contact
            </Link>
          </div>
          <div className="font-body text-sm uppercase tracking-widest text-secondary">
            © {currentYear} ROTSI SOLUTIONS. ARCHITECTURAL EXCELLENCE.
          </div>
        </div>
      </footer>
    </Layout>
  );
}
