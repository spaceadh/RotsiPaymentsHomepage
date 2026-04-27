import type { ProjectEntry } from '../../content/projects';
import ProjectCaseStudy from './ProjectCaseStudy';

type NexusCaseStudyProps = {
  project: ProjectEntry;
};

export default function NexusCaseStudy({ project }: NexusCaseStudyProps) {
  return <ProjectCaseStudy project={project} />;
}
