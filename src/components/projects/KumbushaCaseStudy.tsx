import Link from 'next/link';
import type { ProjectEntry } from '../../content/projects';
import MotionReveal from '../site/MotionReveal';
import ProjectPageShell from './ProjectPageShell';

type KumbushaCaseStudyProps = {
  project: ProjectEntry;
};

export default function KumbushaCaseStudy({ project }: KumbushaCaseStudyProps) {
  return (
    <ProjectPageShell project={project}>
      <section className="relative overflow-hidden bg-surface px-8 pb-24 pt-16 text-center md:px-12 md:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,165,64,0.12),transparent_30%)]" />
        <MotionReveal className="relative mx-auto max-w-5xl">
          <span className="font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
            {project.heroLabel}
          </span>
          <h1 className="mt-6 font-headline text-[3rem] font-bold leading-[0.92] tracking-[-0.045em] text-primary md:text-[4.3rem] lg:text-[5rem]">
            {project.heroTitle}
          </h1>
          <p className="body-copy mx-auto mt-8 max-w-3xl text-lg text-secondary md:text-xl">
            {project.heroIntro}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center border border-black/10 bg-white px-4 py-3 font-label text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
              {project.status}
            </span>
            <span className="inline-flex items-center border border-tertiary/25 bg-tertiary/10 px-4 py-3 font-label text-[0.68rem] uppercase tracking-[0.28em] text-primary">
              Vendor onboarding started
            </span>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08}>
          <div className="glass-panel relative mx-auto mt-14 max-w-5xl overflow-hidden p-6 md:p-8">
            <img
              alt={project.image.alt}
              className="aspect-[16/10] w-full object-cover"
              data-alt={project.image.dataAlt}
              src={project.image.src}
            />
          </div>
        </MotionReveal>
      </section>

      <section id="problem" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <MotionReveal>
          <div className="mb-14 max-w-3xl">
            <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
              Problem
            </span>
            <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
              Culture breaks down in small missed moments.
            </h2>
          </div>
        </MotionReveal>
        <div className="grid gap-8 lg:grid-cols-3">
          {project.challenge.map((item, index) => (
            <MotionReveal key={item} delay={index * 0.08}>
              <div className="section-card flex h-full flex-col p-8 md:p-10">
                <span className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-tertiary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="body-copy mt-6 text-base text-secondary">{item}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section id="workflow" className="bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <div className="grid gap-12 xl:grid-cols-[0.76fr_1.24fr]">
            <MotionReveal>
              <div className="max-w-xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Workflow
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-5xl">
                  Built around reminders, actions, and follow-through.
                </h2>
              </div>
            </MotionReveal>
            <div className="space-y-6">
              {project.mechanisms.map((mechanism, index) => (
                <MotionReveal key={mechanism.title} delay={index * 0.06}>
                  <div className="flex gap-5 border-b border-outline-variant/40 pb-6">
                    <span className="font-headline text-2xl font-bold tracking-tight text-tertiary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                        {mechanism.title}
                      </h3>
                      <p className="body-copy mt-4 text-base text-secondary">{mechanism.description}</p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="status" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <MotionReveal>
          <div className="mb-14 max-w-3xl">
            <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
              Status
            </span>
            <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
              In progress, but already shaped by real workflows.
            </h2>
          </div>
        </MotionReveal>
        <div className="grid gap-px bg-outline-variant/30 lg:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <MotionReveal key={metric.label} delay={index * 0.06}>
              <div className="bg-background p-8 md:min-h-[240px] md:p-10">
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

      <section id="validation" className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <div className="grid gap-12 xl:grid-cols-[0.88fr_1.12fr]">
            <MotionReveal>
              <div className="max-w-2xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-[#ffe088]">
                  Validation
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-5xl">
                  Development now. Company outreach next.
                </h2>
                <ul className="mt-8 space-y-4">
                  {project.proofPoints.map((point) => (
                    <li key={point} className="body-copy border-b border-white/12 pb-4 text-base text-white/72">
                      {point}
                    </li>
                  ))}
                </ul>
                {project.externalUrl ? (
                  <Link
                    href={project.externalUrl}
                    className="mt-10 inline-flex items-center gap-3 font-headline text-sm uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-tertiary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Venture
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </Link>
                ) : null}
              </div>
            </MotionReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {project.outcomes.map((outcome, index) => (
                <MotionReveal key={outcome.title} delay={index * 0.08}>
                  <div className="h-full border border-white/10 bg-primary-container/80 p-8">
                    <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-white">
                      {outcome.title}
                    </h3>
                    <p className="body-copy mt-5 text-base text-white/72">{outcome.description}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ProjectPageShell>
  );
}
