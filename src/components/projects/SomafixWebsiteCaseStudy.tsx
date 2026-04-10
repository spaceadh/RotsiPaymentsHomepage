import Link from 'next/link';
import type { ProjectEntry } from '../../content/projects';
import MotionReveal from '../site/MotionReveal';
import ProjectPageShell from './ProjectPageShell';

type SomafixWebsiteCaseStudyProps = {
  project: ProjectEntry;
};

export default function SomafixWebsiteCaseStudy({ project }: SomafixWebsiteCaseStudyProps) {
  return (
    <ProjectPageShell project={project}>
      <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <MotionReveal>
            <div className="max-w-3xl">
              <span className="font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
                {project.heroLabel}
              </span>
              <h1 className="mt-6 font-headline text-[3rem] font-bold leading-[0.92] tracking-[-0.045em] text-primary md:text-[4.2rem] lg:text-[4.9rem]">
                {project.heroTitle}
              </h1>
              <p className="body-copy mt-8 text-lg text-secondary md:text-xl">{project.heroIntro}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center border border-black/10 bg-white/72 px-4 py-3 font-label text-[0.68rem] uppercase tracking-[0.24em] text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="glass-panel overflow-hidden p-5">
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

      <section id="brief" className="bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <div className="max-w-xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Brief
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-5xl">
                  A website project with brand and search goals attached to it.
                </h2>
              </div>
            </MotionReveal>
            <div className="space-y-8">
              {project.challenge.map((item, index) => (
                <MotionReveal key={item} delay={index * 0.06}>
                  <p className="body-copy text-base text-secondary md:text-lg">{item}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="execution" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <MotionReveal>
          <div className="mb-14 max-w-3xl">
            <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
              Execution
            </span>
            <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl">
              Branding, product presentation, and technical quality in one build.
            </h2>
          </div>
        </MotionReveal>
        <div className="grid gap-8 lg:grid-cols-3">
          {project.mechanisms.map((mechanism, index) => (
            <MotionReveal key={mechanism.title} delay={index * 0.08}>
              <div className="section-card h-full p-8 md:p-10">
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

      <section id="performance" className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <MotionReveal>
            <div className="mb-14 max-w-3xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-[#ffe088]">
                Performance
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                High scores backed by the build, not by luck.
              </h2>
            </div>
          </MotionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <MotionReveal key={metric.label} delay={index * 0.06}>
                <div className="flex min-h-[280px] flex-col justify-end bg-primary-container/85 p-8 md:p-10">
                  <span className="font-headline text-6xl font-bold tracking-tight text-white">
                    {metric.value}
                  </span>
                  <span className="mt-5 font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                    {metric.label}
                  </span>
                  <p className="body-copy mt-5 text-sm text-white/72">{metric.detail}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-[1440px] px-8 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div className="max-w-2xl">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                Impact
              </span>
              <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-5xl">
                A stronger public presence for the brand.
              </h2>
              {project.externalUrl ? (
                <Link
                  href={project.externalUrl}
                  className="mt-8 inline-flex items-center gap-3 font-headline text-sm uppercase tracking-[0.24em] text-primary transition-all duration-300 hover:text-tertiary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                  <span className="material-symbols-outlined text-base">north_east</span>
                </Link>
              ) : null}
            </div>
          </MotionReveal>
          <div className="space-y-6">
            {project.outcomes.map((outcome, index) => (
              <MotionReveal key={outcome.title} delay={index * 0.06}>
                <div className="border-b border-outline-variant/40 pb-6">
                  <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                    {outcome.title}
                  </h3>
                  <p className="body-copy mt-4 text-base text-secondary">{outcome.description}</p>
                </div>
              </MotionReveal>
            ))}
            <MotionReveal delay={0.18}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.proofPoints.map((point) => (
                  <li key={point} className="border border-outline-variant/40 bg-surface-container-low px-5 py-4 text-sm text-secondary">
                    {point}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>
    </ProjectPageShell>
  );
}
