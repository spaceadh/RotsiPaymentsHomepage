'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ProjectEntry } from '../../content/projects';
import ProjectCard from './ProjectCard';

const PROJECTS_PER_SLIDE = 4;
const SLIDE_INTERVAL_MS = 5200;

type ProjectsCarouselProps = {
  projects: ProjectEntry[];
};

function buildSlides(projects: ProjectEntry[]) {
  if (projects.length === 0) {
    return [];
  }

  const slideCount = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_SLIDE));

  return Array.from({ length: slideCount }, (_, slideIndex) =>
    Array.from(
      { length: PROJECTS_PER_SLIDE },
      (_, projectIndex) => projects[(slideIndex * PROJECTS_PER_SLIDE + projectIndex) % projects.length],
    ),
  );
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const slides = useMemo(() => buildSlides(projects), [projects]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const canCycle = slides.length > 1;
  const renderedSlides = canCycle ? [...slides, slides[0]] : slides;

  useEffect(() => {
    if (!canCycle) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide >= slides.length ? 1 : currentSlide + 1));
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [canCycle, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  function goToSlide(slideIndex: number) {
    setIsResetting(false);
    setActiveSlide(slideIndex);
  }

  function goToPreviousSlide() {
    setIsResetting(false);
    setActiveSlide((currentSlide) =>
      currentSlide === 0 || currentSlide >= slides.length ? slides.length - 1 : currentSlide - 1,
    );
  }

  function goToNextSlide() {
    setIsResetting(false);
    setActiveSlide((currentSlide) => (currentSlide >= slides.length ? 1 : currentSlide + 1));
  }

  function handleTransitionEnd() {
    if (activeSlide < slides.length) {
      return;
    }

    setIsResetting(true);
    setActiveSlide(0);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsResetting(false));
    });
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={
            isResetting
              ? 'flex'
              : 'flex transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]'
          }
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {renderedSlides.map((slide, slideIndex) => (
            <div key={`project-slide-${slideIndex}`} className="grid w-full flex-none grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
              {slide.map((project, projectIndex) => (
                <ProjectCard
                  key={`${project.slug}-${slideIndex}-${projectIndex}`}
                  project={project}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {canCycle ? (
        <div className="mt-7 flex items-center justify-between gap-4 max-[560px]:items-start">
          <div className="flex gap-2" aria-label="Project carousel slides">
            {slides.map((_, slideIndex) => (
              <button
                key={`project-dot-${slideIndex}`}
                type="button"
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide % slides.length === slideIndex ? 'w-8 bg-text' : 'w-2 bg-text/24'
                }`}
                aria-label={`Show project slide ${slideIndex + 1}`}
                aria-current={activeSlide % slides.length === slideIndex}
                onClick={() => goToSlide(slideIndex)}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-[8px] border border-line bg-white text-text transition duration-300 hover:-translate-y-0.5 hover:border-text"
              aria-label="Show previous projects"
              onClick={goToPreviousSlide}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                west
              </span>
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-[8px] border border-line bg-white text-text transition duration-300 hover:-translate-y-0.5 hover:border-text"
              aria-label="Show next projects"
              onClick={goToNextSlide}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                east
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
