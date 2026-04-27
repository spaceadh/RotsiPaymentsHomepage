import Link from 'next/link';
import type { ProjectEntry } from '../../content/projects';
import Container from '../ui/Container';
import Tag from '../ui/Tag';
import ProjectPageShell from './ProjectPageShell';

type ProjectCaseStudyProps = {
  project: ProjectEntry;
};

const narrativeByLayout: Record<
  ProjectEntry['layout'],
  {
    challengeTitle: string;
    mechanismTitle: string;
    outcomeTitle: string;
    proofTitle: string;
  }
> = {
  bewama: {
    challengeTitle: 'More than a storefront.',
    mechanismTitle: 'How the system was built to move buyers from search to repeat purchase.',
    outcomeTitle: 'A clearer acquisition, conversion, and engagement engine.',
    proofTitle: 'Commercial proof points anchored in the build.',
  },
  kumbusha: {
    challengeTitle: 'Culture breaks down in small missed moments.',
    mechanismTitle: 'Built around reminders, quick actions, and follow-through.',
    outcomeTitle: 'Turning good intent into a repeatable people workflow.',
    proofTitle: 'Validation signals without overstating an in-progress product.',
  },
  'somafix-site': {
    challengeTitle: 'A website project with brand and search goals attached to it.',
    mechanismTitle: 'Branding, product presentation, and technical quality in one build.',
    outcomeTitle: 'A stronger public presence backed by measurable quality.',
    proofTitle: 'Performance and SEO proof points from the public website.',
  },
  nexus: {
    challengeTitle: 'Built for continuity instead of fragmented workarounds.',
    mechanismTitle: 'Customer records, stock visibility, and permissions in one platform.',
    outcomeTitle: 'Internal control and visibility without exposing sensitive operations.',
    proofTitle: 'Public-safe proof of operational infrastructure.',
  },
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const narrative = narrativeByLayout[project.layout];
  const [challengeSection, mechanismSection, outcomeSection, proofSection] = project.sections;

  return (
    <ProjectPageShell project={project}>
      <section className="pb-16 pt-[72px]">
        <Container className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">{project.heroLabel}</div>
            <h1 className="text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text">
              {project.heroTitle}
            </h1>
            <p className="mt-7 text-[17px] leading-relaxed text-muted md:text-lg">{project.heroIntro}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-card border border-line bg-white p-4 shadow-soft">
            <img
              alt={project.image.alt}
              className="aspect-[16/10] w-full rounded-[12px] object-cover"
              data-alt={project.image.dataAlt}
              src={project.image.src}
            />
          </div>
        </Container>

        <Container className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {[
            ['Role', project.role],
            ['Status', project.status],
            ['Surface', project.surface],
          ].map(([label, value]) => (
            <div key={label} className="bg-white p-6">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                {label}
              </span>
              <p className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-text">{value}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id={challengeSection.id} className="border-y border-line bg-surface-2 py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-xl">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
              {challengeSection.label}
            </div>
            <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
              {narrative.challengeTitle}
            </h2>
          </div>
          <div className="grid gap-5">
            {project.challenge.map((item, index) => (
              <div key={item} className="rounded-card border border-line bg-white p-6">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 text-base leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id={mechanismSection.id} className="py-20 md:py-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
              {mechanismSection.label}
            </div>
            <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
              {narrative.mechanismTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {project.mechanisms.map((mechanism, index) => (
              <article key={mechanism.title} className="design-card">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                  {mechanism.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{mechanism.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id={outcomeSection.id} className="border-y border-line bg-surface py-20 md:py-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
              {outcomeSection.label}
            </div>
            <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
              {narrative.outcomeTitle}
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <article key={outcome.title} className="rounded-card border border-line bg-white p-7">
                <h3 className="text-xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{outcome.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id={proofSection.id} className="py-20 md:py-24">
        <Container className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
              {proofSection.label}
            </div>
            <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
              {narrative.proofTitle}
            </h2>
            <ul className="mt-8 grid gap-3">
              {project.proofPoints.map((point) => (
                <li key={point} className="border-b border-line pb-3 text-base leading-relaxed text-muted">
                  {point}
                </li>
              ))}
            </ul>
            {project.externalUrl ? (
              <Link
                href={project.externalUrl}
                className="learn-link mt-8 inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                Visit live project →
              </Link>
            ) : null}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex min-h-[220px] flex-col justify-end rounded-card border border-line bg-surface-2 p-7">
                <span className="text-[44px] font-extrabold leading-none tracking-[-0.04em] text-text">
                  {metric.value}
                </span>
                <span className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                  {metric.label}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted">{metric.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </ProjectPageShell>
  );
}
