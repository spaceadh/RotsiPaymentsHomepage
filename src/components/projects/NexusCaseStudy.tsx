import Link from 'next/link';
import type { ProjectEntry } from '../../content/projects';
import MotionReveal from '../site/MotionReveal';
import ProjectPageShell from './ProjectPageShell';

type NexusCaseStudyProps = {
  project: ProjectEntry;
};

export default function NexusCaseStudy({ project }: NexusCaseStudyProps) {
  return (
    <ProjectPageShell project={project}>
      <section className="bg-primary px-8 pb-24 pt-16 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <MotionReveal>
              <div className="max-w-3xl">
                <span className="font-label text-xs font-bold uppercase tracking-[0.42em] text-[#ffe088] md:text-sm">
                  {project.heroLabel}
                </span>
                <h1 className="mt-6 font-headline text-[3rem] font-bold leading-[0.92] tracking-[-0.045em] text-white md:text-[4.2rem] lg:text-[4.8rem]">
                  {project.heroTitle}
                </h1>
                <p className="body-copy mt-8 text-lg text-white/72 md:text-xl">{project.heroIntro}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="inline-flex items-center border border-white/14 px-4 py-3 font-label text-[0.68rem] uppercase tracking-[0.28em] text-white">
                    {project.role}
                  </span>
                  <span className="inline-flex items-center border border-tertiary/30 bg-tertiary/10 px-4 py-3 font-label text-[0.68rem] uppercase tracking-[0.28em] text-white">
                    {project.status}
                  </span>
                </div>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="overflow-hidden border border-white/10 bg-white p-5">
                <img
                  alt={project.image.alt}
                  className="aspect-[16/10] w-full object-cover"
                  data-alt={project.image.dataAlt}
                  src={project.image.src}
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section id="operations" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <MotionReveal>
            <div className="max-w-xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                Operations
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-5xl">
                Built for continuity instead of fragmented workarounds.
              </h2>
            </div>
          </MotionReveal>
          <div className="space-y-8">
            {project.challenge.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.06}>
                <p className="body-copy max-w-4xl text-base text-secondary md:text-lg">{item}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="controls" className="bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <MotionReveal>
            <div className="mb-14 max-w-3xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                Controls
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
                Customer records, stock visibility, and permissions in one platform.
              </h2>
            </div>
          </MotionReveal>
          <div className="grid gap-px bg-outline-variant/30 lg:grid-cols-2">
            {project.mechanisms.map((mechanism, index) => (
              <MotionReveal key={mechanism.title} delay={index * 0.05}>
                <div className="bg-background p-8 md:p-10">
                  <span className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                    {mechanism.title}
                  </h3>
                  <p className="body-copy mt-5 text-base text-secondary">{mechanism.description}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visibility" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <MotionReveal>
          <div className="mb-14 max-w-3xl">
            <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
              Visibility
            </span>
            <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
              Operational visibility without losing internal control.
            </h2>
          </div>
        </MotionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <MotionReveal key={metric.label} delay={index * 0.06}>
              <div className="section-card min-h-[260px] p-8 md:p-10">
                <span className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                  {metric.value}
                </span>
                <p className="mt-4 font-label text-xs uppercase tracking-[0.28em] text-tertiary">
                  {metric.label}
                </p>
                <p className="body-copy mt-5 text-sm text-secondary">{metric.detail}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section id="outcome" className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <div className="grid gap-12 xl:grid-cols-[0.88fr_1.12fr]">
            <MotionReveal>
              <div className="max-w-2xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-[#ffe088]">
                  Outcome
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-5xl">
                  One internal platform with clearer continuity and better oversight.
                </h2>
                {project.externalUrl ? (
                  <Link
                    href={project.externalUrl}
                    className="mt-8 inline-flex items-center gap-3 font-headline text-sm uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-tertiary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Platform
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </Link>
                ) : null}
              </div>
            </MotionReveal>
            <div className="space-y-6">
              {project.outcomes.map((outcome, index) => (
                <MotionReveal key={outcome.title} delay={index * 0.06}>
                  <div className="border-b border-white/12 pb-6">
                    <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-white">
                      {outcome.title}
                    </h3>
                    <p className="body-copy mt-4 text-base text-white/72">{outcome.description}</p>
                  </div>
                </MotionReveal>
              ))}
              <MotionReveal delay={0.18}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.proofPoints.map((point) => (
                    <li key={point} className="border border-white/12 bg-primary-container/80 px-5 py-4 text-sm text-white/72">
                      {point}
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>
    </ProjectPageShell>
  );
}
