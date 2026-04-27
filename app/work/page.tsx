import type { Metadata } from 'next';
import SiteFooter from '../../src/components/layout/SiteFooter';
import SiteHeader from '../../src/components/layout/SiteHeader';
import ProjectSummaryCard from '../../src/components/projects/ProjectSummaryCard';
import Container from '../../src/components/ui/Container';
import SectionHeader from '../../src/components/ui/SectionHeader';
import { projects } from '../../src/content/projects';

export const metadata: Metadata = {
  title: 'Work | Real Systems, Platforms, And Workflow Case Studies',
  description:
    'Browse Rotsi case studies across B2B commerce, culture workflows, distributor websites, and internal operations platforms built around real business needs.',
  alternates: { canonical: '/work' },
};

const workNavItems = [
  { href: '/', label: 'Home' },
  { href: '#external-platforms', label: 'External' },
  { href: '#internal-platforms', label: 'Internal' },
  { href: '#ventures', label: 'Ventures' },
  { href: '/contact', label: 'Contact' },
];

function ProjectGroup({
  id,
  eyebrow,
  title,
  copy,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  items: typeof projects;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id={id} className="section-padding">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} copy={copy} align="left" className="mb-10 max-w-3xl" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project) => (
            <ProjectSummaryCard key={project.slug} project={project} density="large" />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function WorkPage() {
  const externalProjects = projects.filter((project) => project.surface === 'External Platform');
  const internalProjects = projects.filter((project) => project.surface === 'Internal Platform');
  const ventureProjects = projects.filter((project) => project.surface === 'In-Progress Venture');

  return (
    <>
      <SiteHeader navItems={workNavItems} ctaHref="/contact" ctaLabel="Start A Project" />
      <main>
        <section className="pb-16 pt-[72px]">
          <Container>
            <div className="max-w-5xl">
              <div className="eyebrow mb-6">Work</div>
              <h1 className="max-w-5xl text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text">
                Real projects built around <span className="text-accent">business workflows</span>.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-muted">
                These case studies show how Rotsi turns product direction, system logic, automation,
                SEO, and internal operations into practical systems for real commercial use.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="design-card min-h-0">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  {String(projects.length).padStart(2, '0')}
                </span>
                <p className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-text">
                  Real case studies
                </p>
              </div>
              <div className="design-card min-h-0">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  Focus
                </span>
                <p className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-text">
                  Commerce, automation, SEO, internal tools
                </p>
              </div>
              <div className="design-card min-h-0">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  Approach
                </span>
                <p className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-text">
                  Problem, mechanisms, outcome
                </p>
              </div>
            </div>
          </Container>
        </section>

        <div className="border-y border-line bg-surface-2">
          <ProjectGroup
            id="external-platforms"
            eyebrow="External platforms"
            title="Public systems built for growth, clarity, and search visibility."
            copy="Bewama and Somafix Kenya show how public-facing platforms can connect brand, product structure, acquisition, and technical quality."
            items={externalProjects}
          />
        </div>

        <ProjectGroup
          id="internal-platforms"
          eyebrow="Internal platforms"
          title="Systems built to improve continuity, control, and operational visibility."
          copy="Nexus is positioned at a safe public level: customer continuity, stock visibility, permissions, approval flows, and reporting."
          items={internalProjects}
        />

        <div className="border-t border-line bg-surface">
          <ProjectGroup
            id="ventures"
            eyebrow="In-progress ventures"
            title="Product bets shaped around workflow problems we can validate."
            copy="Kumbusha is presented as an active build with real reminder logic, WhatsApp workflow direction, and early vendor onboarding."
            items={ventureProjects}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
