import Link from 'next/link';
import { projects } from '../../content/projects';
import Container from '../ui/Container';
import ProjectsCarousel from './ProjectsCarousel';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <Container className="rounded-panel bg-[linear-gradient(120deg,#fbfaf8,#f4eee7)] p-14 max-[900px]:p-8 max-[560px]:px-5">
        <div className="mb-[30px] flex items-end justify-between gap-6 max-[560px]:block">
          <div>
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
              Selected projects
            </div>
            <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
              Real projects. Real impact.
            </h2>
          </div>
          <Link className="learn-link max-[560px]:mt-4 max-[560px]:inline-flex" href="/work">
            View all projects -&gt;
          </Link>
        </div>

        <ProjectsCarousel projects={projects} />
      </Container>
    </section>
  );
}
