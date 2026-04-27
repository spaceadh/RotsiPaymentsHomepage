import type { ProjectEntry } from '../../content/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

type BewamaCaseStudyProps = {
  project: ProjectEntry;
};

export default function BewamaCaseStudy({ project }: BewamaCaseStudyProps) {
  return <ProjectCaseStudy project={project} />;
}
