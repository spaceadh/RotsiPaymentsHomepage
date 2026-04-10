import Link from 'next/link';
import type { ProjectEntry } from '../../content/projects';
import MotionReveal from '../site/MotionReveal';
import ProjectPageShell from './ProjectPageShell';

type BewamaCaseStudyProps = {
  project: ProjectEntry;
};

export default function BewamaCaseStudy({ project }: BewamaCaseStudyProps) {
  return (
    <ProjectPageShell project={project}>
      <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16">
        <div className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-end">
          <MotionReveal>
            <div className="max-w-3xl">
              <span className="font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
                {project.heroLabel}
              </span>
              <h1 className="mt-6 font-headline text-[3rem] font-bold leading-[0.92] tracking-[-0.045em] text-primary md:text-[4.2rem] lg:text-[4.8rem]">
                {project.heroTitle}
              </h1>
              <p className="body-copy mt-8 text-lg text-secondary md:text-xl">{project.heroIntro}</p>
              <div className="mt-10 grid gap-px bg-outline-variant/30 md:grid-cols-3">
                <div className="bg-background p-6">
                  <span className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-tertiary">
                    Role
                  </span>
                  <p className="mt-4 font-headline text-xl font-bold uppercase tracking-tight text-primary">
                    {project.role}
                  </p>
                </div>
                <div className="bg-background p-6">
                  <span className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-tertiary">
                    Status
                  </span>
                  <p className="mt-4 font-headline text-xl font-bold uppercase tracking-tight text-primary">
                    {project.status}
                  </p>
                </div>
                <div className="bg-background p-6">
                  <span className="font-label text-[0.68rem] uppercase tracking-[0.28em] text-tertiary">
                    Surface
                  </span>
                  <p className="mt-4 font-headline text-xl font-bold uppercase tracking-tight text-primary">
                    {project.surface}
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="glass-panel overflow-hidden border border-primary/10 p-4 sm:p-5">
              <img
                alt={project.image.alt}
                className="aspect-[16/10] w-full object-cover"
                data-alt={project.image.dataAlt}
                src={project.image.src}
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="challenge" className="bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <MotionReveal>
              <div className="max-w-xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Challenge
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-5xl">
                  More than a storefront.
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
        </div>
      </section>

      <section id="mechanisms" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <MotionReveal>
          <div className="mb-14 max-w-3xl">
            <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
              Mechanisms
            </span>
            <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
              How the system was built to move sales forward.
            </h2>
          </div>
        </MotionReveal>
        <div className="grid grid-cols-1 gap-px bg-outline-variant/30 lg:grid-cols-2">
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
      </section>

      <section id="outcomes" className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <MotionReveal>
            <div className="mb-14 max-w-3xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-[#ffe088]">
                Outcomes
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                A clearer acquisition and conversion engine.
              </h2>
            </div>
          </MotionReveal>
          <div className="grid gap-px bg-white/10 lg:grid-cols-3">
            {project.outcomes.map((outcome, index) => (
              <MotionReveal key={outcome.title} delay={index * 0.06}>
                <div className="bg-primary-container/80 p-8 md:p-10">
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-white">
                    {outcome.title}
                  </h3>
                  <p className="body-copy mt-5 text-base text-white/72">{outcome.description}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div className="max-w-2xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                Proof
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-5xl">
                Commercial proof points anchored in the build.
              </h2>
              <ul className="mt-8 space-y-4">
                {project.proofPoints.map((point) => (
                  <li key={point} className="body-copy border-b border-outline-variant/40 pb-4 text-base text-secondary">
                    {point}
                  </li>
                ))}
              </ul>
              {project.externalUrl ? (
                <Link
                  href={project.externalUrl}
                  className="mt-10 inline-flex items-center gap-3 font-headline text-sm uppercase tracking-[0.24em] text-primary transition-all duration-300 hover:text-tertiary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Bewama
                  <span className="material-symbols-outlined text-base">north_east</span>
                </Link>
              ) : null}
            </div>
          </MotionReveal>
          <div className="grid gap-px bg-outline-variant/30 md:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <MotionReveal key={metric.label} delay={index * 0.08}>
                <div className="flex min-h-[240px] flex-col justify-end bg-surface-container-low p-8 md:p-10">
                  <span className="font-headline text-5xl font-bold tracking-tight text-primary md:text-6xl">
                    {metric.value}
                  </span>
                  <span className="mt-4 font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                    {metric.label}
                  </span>
                  <p className="body-copy mt-5 text-sm text-secondary">{metric.detail}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </ProjectPageShell>
  );
}
