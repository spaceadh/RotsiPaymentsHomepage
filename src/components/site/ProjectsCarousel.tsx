'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import type { ProjectEntry } from '../../content/projects';

type ProjectsCarouselProps = {
  projects: ProjectEntry[];
};

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, projects.length]);

  if (!projects.length) {
    return null;
  }

  const activeProject = projects[activeIndex];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  return (
    <div
      className="glass-panel overflow-hidden p-4 sm:p-6 lg:p-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-6 flex flex-col gap-5 border-b border-black/5 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-label text-xs uppercase tracking-[0.35em] text-tertiary">
            Current Project
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            className="inline-flex h-12 w-12 items-center justify-center border border-black/10 bg-white/80 text-primary transition-all duration-300 hover:border-tertiary/40 hover:text-tertiary"
            onClick={goToPrevious}
          >
            <span className="material-symbols-outlined">west</span>
          </button>
          <button
            type="button"
            aria-label="Next project"
            className="inline-flex h-12 w-12 items-center justify-center border border-black/10 bg-white/80 text-primary transition-all duration-300 hover:border-tertiary/40 hover:text-tertiary"
            onClick={goToNext}
          >
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.title} className="min-w-full">
              <ProjectCard
                {...project}
                reveal={false}
                className="h-[560px] border-none shadow-none sm:h-[620px] lg:h-[680px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 border-t border-black/5 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary">
            {activeProject.index}
          </p>
          <p className="body-copy mt-3 max-w-2xl text-base text-secondary">
            {activeProject.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {activeProject.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center border border-black/10 bg-white/72 px-4 py-2 font-label text-[0.68rem] uppercase tracking-[0.24em] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-5 border-t border-black/5 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={project.title}
                type="button"
                aria-label={`Show ${project.title}`}
                aria-pressed={isActive}
                className={`h-2.5 transition-all duration-300 ${
                  isActive ? 'w-12 bg-tertiary' : 'w-6 bg-black/10 hover:bg-black/20'
                }`}
                onClick={() => goToSlide(index)}
              />
            );
          })}
        </div>

        <Link
          href={activeProject.href}
          className="inline-flex items-center gap-3 font-headline text-sm uppercase tracking-[0.26em] text-primary transition-all duration-300 hover:text-tertiary"
        >
          Open Project
          <span className="material-symbols-outlined text-base">north_east</span>
        </Link>
      </div>
    </div>
  );
}
