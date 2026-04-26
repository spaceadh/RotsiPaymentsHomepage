import Link from 'next/link';
import type { featuredLandingProjects } from '../../content/landing';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import ProjectImagePlaceholder from '../visuals/ProjectImagePlaceholder';

type Project = (typeof featuredLandingProjects)[number];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="min-h-0 overflow-hidden p-0">
      <ProjectImagePlaceholder tone={project.tone} />
      <div className="p-[22px]">
        <Tag className="mb-3">{project.tag}</Tag>
        <h3 className="mb-3.5 text-[19px] font-extrabold leading-[1.25] tracking-[-0.02em] text-text">
          {project.title}
        </h3>
        <p className="mb-[22px] text-sm text-muted">{project.copy}</p>
        <Link className="learn-link" href={project.href}>
          View case study →
        </Link>
      </div>
    </Card>
  );
}
