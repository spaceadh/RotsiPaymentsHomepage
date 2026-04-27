import type { ProjectEntry } from '../../content/projects';
import ProjectSummaryCard from '../projects/ProjectSummaryCard';

type ProjectCardProps = {
  project: ProjectEntry;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return <ProjectSummaryCard project={project} />;
}
