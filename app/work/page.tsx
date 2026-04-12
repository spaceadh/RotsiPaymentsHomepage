import type { Metadata } from 'next';
import Link from 'next/link';
import RotsiLogo from '../../src/components/brand/RotsiLogo';
import Layout from '../../src/components/site/Layout';
import MotionReveal from '../../src/components/site/MotionReveal';
import ProjectCard from '../../src/components/site/ProjectCard';
import SiteFooter from '../../src/components/site/SiteFooter';
import SiteMobileMenu from '../../src/components/site/SiteMobileMenu';
import { projects } from '../../src/content/projects';
import { mainNavigationItems } from '../../src/content/navigation';

export const metadata: Metadata = {
  title: 'Work | Case Studies Across Platforms And Internal Systems',
  description:
    'Browse Rotsi case studies across business automation systems, custom platforms, workflow infrastructure, and internal tools built for real operating needs.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  const mobileNavigationItems = mainNavigationItems('/work');
  const externalProjects = projects.filter((project) => project.surface === 'External Platform');
  const internalProjects = projects.filter((project) => project.surface === 'Internal Platform');
  const ventureProjects = projects.filter((project) => project.surface === 'In-Progress Venture');

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
              aria-label="Contact Rotsi"
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
                Work
              </span>
              <h1 className="max-w-5xl font-headline text-[3rem] font-bold leading-[0.9] tracking-[-0.045em] text-primary md:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.25rem]">
                CASE STUDIES IN
                <br />
                BUSINESS SYSTEMS,
                <br />
                PLATFORMS,
                <br />
                AND WORKFLOW DESIGN.
              </h1>
              <p className="body-copy mt-8 max-w-3xl font-body text-base font-light text-secondary md:text-lg">
                Rotsi works as a technical partner on projects that need more than a surface redesign. These case studies show how we shape product direction, system logic, workflow mechanics, and delivery around real commercial needs.
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
                  Platforms, Internal Tools, Automation
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Delivery
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Structured For Real Business Use
                </p>
              </div>
            </div>
          </MotionReveal>
        </section>

        <section className="bg-surface-container-low/80 py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="mb-16 max-w-3xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  External Platforms
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                  Public-facing systems built for growth, clarity, and search visibility.
                </h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              {externalProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  index={project.index}
                  title={project.title}
                  subtitle={project.subtitle}
                  href={project.href}
                  surface={project.surface}
                  status={project.status}
                  imageAlt={project.image.alt}
                  imageDataAlt={project.image.dataAlt}
                  imageSrc={project.image.src}
                  summary={project.cardSummary}
                  delay={index * 0.06}
                  className="h-[650px]"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
          <MotionReveal>
            <div className="mb-16 max-w-3xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                Internal Platforms
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                Systems built to improve control, continuity, and internal visibility.
              </h2>
            </div>
          </MotionReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {internalProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                index={project.index}
                title={project.title}
                subtitle={project.subtitle}
                href={project.href}
                surface={project.surface}
                status={project.status}
                imageAlt={project.image.alt}
                imageDataAlt={project.image.dataAlt}
                imageSrc={project.image.src}
                summary={project.cardSummary}
                delay={index * 0.06}
                className="h-[650px]"
              />
            ))}
          </div>
        </section>

        <section className="bg-primary py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="mb-16 max-w-3xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-[#ffe088]">
                  In-Progress Ventures
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                  Product bets we are shaping around real workflow problems.
                </h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-12">
              {ventureProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  index={project.index}
                  title={project.title}
                  subtitle={project.subtitle}
                  href={project.href}
                  surface={project.surface}
                  status={project.status}
                  imageAlt={project.image.alt}
                  imageDataAlt={project.image.dataAlt}
                  imageSrc={project.image.src}
                  summary={project.cardSummary}
                  delay={index * 0.06}
                  className="h-[650px] border-white/10 bg-primary-container text-white [&_h3]:text-white [&_p]:text-white/72 [&_span]:text-white"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter active="work" />
    </Layout>
  );
}

